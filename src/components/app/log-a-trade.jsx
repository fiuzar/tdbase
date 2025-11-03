"use client"

import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue, SelectLabel } from "../ui/select";
import { symbols } from "@/lib/symbols";
import { Label } from "../ui/label";
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

import { Plus } from "lucide-react"
import { useEffect, useState, useContext } from "react";
import { TradeAccountContext } from "@/server-actions/userContext";
import { newManualTradeLog } from "@/server-actions/logTrades";

import { calculateRR } from "./risk-calculator-functions";

export default function LogATrade({ buttonType = "full", setInsertedTrade }) {

    const [pair, setPair] = useState("");
    const [entryPrice, setEntryPrice] = useState("")
    const [rr, setRR] = useState("")
    const [stopLoss, setStopLoss] = useState("")
    const [takeProfit, setTakeProfit] = useState("")
    const { tradeAccounts, setTradeAccounts } = useContext(TradeAccountContext)
    const [accountValue, setAccountValue] = useState(tradeAccounts?.account_name || "")
    const [direction, setDirection] = useState("")
    const [lotSize, setLotSize] = useState("")

    const [isDisabled, setIsDisabled] = useState(true)
    const [riskPercentage, setRiskPercentage] = useState(1)

    useEffect(() => {
        if(accountValue){
            setRiskPercentage(tradeAccounts.max_risk_per_trade)
        }
    }, [accountValue])

    useEffect(() => {

        if (pair, entryPrice, stopLoss, takeProfit) {
            const { success, rr } = calculateRR(pair, entryPrice, stopLoss, takeProfit)
            let newRR = "1:" + rr
            if (success) {
                setRR(newRR)
                return
            }
            else {
                setRR("")
            }
        }
    }, [pair, entryPrice, stopLoss, takeProfit])

    useEffect(() => {
        if (stopLoss > entryPrice) {
            setDirection("SELL")
        }
        else if (stopLoss < entryPrice) {
            setDirection("BUY")
        }
        else {
            setDirection("")
        }
    }, [stopLoss, entryPrice])


    useEffect(() => {

        if (!pair || !accountValue || !entryPrice || !stopLoss || !takeProfit) {
            setIsDisabled(true)
        }
        else {
            setIsDisabled(false)
        }

    }, [pair, accountValue, entryPrice, stopLoss, takeProfit])

    async function insertTradeLog() {
        const { success, message, insertedTrade } = await newManualTradeLog(pair, accountValue, entryPrice, stopLoss, takeProfit, rr, direction, lotSize)

        if (success) {
            // Reset form
            setPair("")
            setAccountValue(tradeAccounts?.starting_balance || "")
            setEntryPrice(0)
            setStopLoss(0)
            setTakeProfit(0)
            setRR("")
            setDirection("")
            setLotSize(0)

            setInsertedTrade(insertedTrade);

            toast(<div className="text-green-700">{message || "Trade logged successfully"}</div>)
        }
        else {
            toast(<div className="text-red-700">{message}</div>)
        }
    }

    return (

        <Dialog>
            <DialogTrigger className="w-full">

                {buttonType === "icon" ? (
                    <Button size={"icon"} className="bg-green-800 font-bold text-white text-lg hover:text-black cursor-pointer">
                        <Plus size={20} />
                    </Button>
                ) : (
                    <div
                        tooltip="Log Trade"
                        className="bg-green-800 cursor-pointer flex p-1 align-bottom gap-2 rounded-md text-white font-semibold hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
                        <Plus />
                        <span className="mt-0.5">Log Trade</span>
                    </div>
                )}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={`border-b pb-4`}>Log A Trade</DialogTitle>
                    <div className="py-3 h-[70vh] overflow-y-auto pr-3">

                        <div className="mb-4 md:grid md:grid-cols-2 md:gap-2">
                            <Select className="w-full block mb-4 md:mb-0" defaultValue={pair} onValueChange={(value) => setPair(value)}>
                                <SelectTrigger className={`w-full`}>
                                    {pair || "Select Symbol"}
                                </SelectTrigger>
                                <SelectContent>
                                    {symbols.map((symbol, idx) => (
                                        <SelectItem key={idx} value={symbol.pair}>{symbol.pair}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {tradeAccounts && tradeAccounts?.starting_balance ? (
                                <Select className="w-full block" defaultValue={accountValue} onValueChange={(value) => setAccountValue(value)}>
                                    <SelectTrigger className={`w-full`}>
                                        {accountValue || "Select Account"}
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={tradeAccounts?.account_name}>{`${tradeAccounts.account_name} : ${tradeAccounts?.starting_balance}`}</SelectItem>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <Input type={`text`} disabled="true" placeholder="No Trade Account" />
                            )}


                        </div>

                        <h3 className="text-md my-3 mb-4">Risk Management</h3>

                        <div className="grid grid-cols-2 gap-2">
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Entry Price</span>
                                <Input disabled={!accountValue || accountValue.trim() === ""} value={entryPrice} onChange={(e) => setEntryPrice(e.target.value)} type="number" className={`block w-full`} placeholder="Entry Price" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">R:R Ratio</span>
                                <Input type="text" value={rr} disabled className={`block w-full`} placeholder="R:R" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Stop Loss</span>
                                <Input disabled={!accountValue || accountValue.trim() === ""} type="number" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} className={`block w-full`} placeholder="Stop Loss" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Take Profit</span>
                                <Input disabled={!accountValue || accountValue.trim() === ""} type="number" value={takeProfit} onChange={(e) => setTakeProfit(e.target.value)} className={`block w-full`} placeholder="Take Profit" />
                            </Label>
                        </div>

                        <h3 className="text-md my-3 mb-4">Trade Basics</h3>

                        <div className="grid grid-cols-2 gap-2 w-full">
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Direction</span>
                                <Select className="w-full block" defaultValue={direction} onValueChange={(value) => setDirection(value)}>
                                    <SelectTrigger className={`w-full`}>
                                        {direction || "Direction"}
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={`BUY`}>BUY</SelectItem>
                                        <SelectItem value={`SELL`}>SELL</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Standard Lot</span>
                                <Input type="number" className={`block w-full`} value={lotSize} onChange={(e) => setLotSize(e.target.value)} placeholder="Lot Size" />
                            </Label>
                        </div>

                        <h3 className="text-md my-3 mb-4">Quick Notes</h3>
                        <div className="w-full">
                            <Textarea placeholder="Quick notes about the trade..." className="resize-none"></Textarea>
                        </div>

                    </div>
                    <DialogFooter>
                        <Button onClick={insertTradeLog} disabled={isDisabled} className={`px-12 bg-green-800 text-white font-medium hover:text-black cursor-pointer`}>Log</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}