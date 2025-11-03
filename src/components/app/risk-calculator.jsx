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
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { symbols } from "@/lib/symbols";
import { Label } from "../ui/label";
import { Input } from "../ui/input"
import { Card } from "../ui/card";

import { Calculator } from "lucide-react"
import { useEffect, useState } from "react";

import { useContext } from "react";
import { TradeAccountContext } from "@/server-actions/userContext";
import { calculateRiskSize } from "./risk-calculator-functions"

export default function RiskCalculator() {

    const [pair, setPair] = useState("");
    const [accountValue, setAccountValue] = useState("")
    const [entryPrice, setEntryPrice] = useState("")
    const [rr, setRR] = useState("")
    const [stopLoss, setStopLoss] = useState("")
    const [takeProfit, setTakeProfit] = useState("")
    const [riskPercentage, setRiskPercentage] = useState(0)
    const {tradeAccounts, setTradeAccounts} = useContext(TradeAccountContext)
    const [riskDetails, setRiskDetails] = useState({ riskAmount: null, standard_lots: null, mini_lots: null, micro_lots: null, pip_value_per_lot: null, rr: null })

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {

        if(tradeAccounts && tradeAccounts?.account_name){
            setRiskPercentage(tradeAccounts.rules.max_risk_per_trade)
        }

    }, [tradeAccounts])

    useEffect(() => {

        if (!pair || !accountValue || !entryPrice || !stopLoss || !takeProfit) {
            setIsDisabled(true)
        }
        else {
            setIsDisabled(false)
        }

    }, [pair, accountValue, entryPrice, stopLoss, takeProfit])

    async function calculateRisk() {
        const {success, pipValuePerLot, lots, riskAmount, rr} = await calculateRiskSize(pair, accountValue, riskPercentage, entryPrice, stopLoss, takeProfit)

        if(success) {
            setRiskDetails({riskAmount, standard_lots: lots.standard, mini_lots: lots.mini, micro_lots: lots.micro, pip_value_per_lot: pipValuePerLot, rr: Math.round(rr) })
        }
    }

    return (

        <Dialog>
            <DialogTrigger className="w-full">
                <div
                    tooltip="Risk Calculator"
                    className="border bg-zinc-600 cursor-pointer flex p-1 align-bottom gap-2 rounded-md text-white font-semibold hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
                    <Calculator />
                    <span className="mt-0.5">Risk Calculator</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={`border-b pb-4`}>Risk Calculator</DialogTitle>
                    <div className="py-3 h-[70vh] overflow-y-auto pr-3">

                        <div className="grid grid-cols-2 gap-2">

                            <Select className="w-full block" onValueChange={(value) => setPair(value)}>
                                <SelectTrigger className={`w-full`}>
                                    {pair || `Select Symbol`}
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
                                        <SelectItem value={tradeAccounts?.starting_balance}>{`${tradeAccounts.account_name} : ${tradeAccounts?.starting_balance}`}</SelectItem>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <Input type={`text`} disabled="true" placeholder="No Trade Account" />
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-10">
                            <Label className="mb-3 block col-span-2">
                                <span className="block w-full pb-2">Entry Price</span>
                                <Input type="number" className={`block w-full`} value={entryPrice} onChange={(e) => setEntryPrice(e.target.value)} placeholder="Entry Price" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Stop Loss</span>
                                <Input type="number" className={`block w-full`} value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} placeholder="Stop Loss" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Take Profit</span>
                                <Input type="number" className={`block w-full`} value={takeProfit} onChange={(e) => setTakeProfit(e.target.value)} placeholder="Take Profit" />
                            </Label>
                        </div>

                        {riskDetails.riskAmount && (
                            <Card className="my-5 grid gap-y-1 p-3">
                                <div className="flex justify-between">
                                    <span>Risk Amount</span>
                                    <span>{riskDetails.riskAmount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Risk To Reward</span>
                                    <span>{`1: ${riskDetails.rr}`}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Standard Lots</span>
                                    <span>{riskDetails.standard_lots}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Mini Lots</span>
                                    <span>{riskDetails.mini_lots}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Micro Lots</span>
                                    <span>{riskDetails.micro_lots}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Pip Value per Lot</span>
                                    <span>{riskDetails.pip_value_per_lot}</span>
                                </div>
                            </Card>
                        )}

                    </div>
                    <DialogFooter>
                        <Button disabled={isDisabled} className={`cursor-pointer bg-green-700 text-white block`} onClick={calculateRisk}>Calculate</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>


    )
}