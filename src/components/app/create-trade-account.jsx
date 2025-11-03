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
import { Label } from "../ui/label";
import { Input } from "../ui/input"

import { Logs, Plus, X } from "lucide-react"
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { add_trade_account } from "@/server-actions/create-trade-account-actions";

export default function CreateTradeAccount() {

    const [accountName, setAccountName] = useState("")
    const [startingBalance, setStartingBalance] = useState("")
    const [leverage, setLeverage] = useState("")
    const [currency, setCurrency] = useState("")
    const [rules, setRules] = useState({ max_risk_per_trade: "", max_daily_loss: "", max_total_loss: "", profit_target: "" })
    const [strategy, setStrategy] = useState([])
    const [strategySingle, setStrategySingle] = useState("")

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {

        if (!accountName || !startingBalance || !currency || !rules) {
            setIsDisabled(true)
        }
        else {
            setIsDisabled(false)
        }

    }, [accountName, startingBalance, currency, rules])

    function add_strategy() {
        if (strategySingle) {
            setStrategy([...strategy, strategySingle])
            setStrategySingle("")
        }
    }

    function add_rules(rule_obj, rule_value) {
        setRules(preRules => ({
            ...preRules,
            [rule_obj]: rule_value
        }))
    }

    function remove_strategy(idx) {
        const newStrategy = [
            ...strategy.slice(0, idx),
            ...strategy.slice(idx + 1)
        ]

        setStrategy(newStrategy)
    }

    async function create_account() {
        const { success, message } = await add_trade_account(accountName, startingBalance, leverage, currency, rules, strategy)

        if (success) {
            toast(<div className="text-green-700">{message}</div>)
        }
        else {
            toast(<div className="text-red-700">{message}</div>)
        }
    }

    return (

        <Dialog>
            <DialogTrigger className="w-full">
                <div
                    tooltip="Create Trade Account"
                    className="border bg-zinc-600 cursor-pointer flex p-1 align-bottom gap-2 rounded-md text-white font-semibold hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
                    <Logs />
                    <span className="mt-0.5">Create Trade Account</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={`border-b pb-4`}>Create Trade Account</DialogTitle>
                    <div className="py-3 h-[70vh] overflow-y-auto pr-3">

                        <div className="mb-4 md:grid md:grid-cols-2 gap-2 w-full">
                            <Label className="mb-3 block text-left">
                                <span className="block w-full pb-2">Account Name *</span>
                                <Input type="text" value={accountName} onChange={(e) => setAccountName(e.target.value)} className={`block w-full`} placeholder="Account Name" />
                            </Label>

                            <Label className="mb-3 block text-left">
                                <span className="block w-full pb-2">Starting Balance *</span>
                                <Input type="number" value={startingBalance} onChange={(e) => setStartingBalance(e.target.value)} className={`block w-full`} placeholder="Starting Balance" />
                            </Label>

                            <Label className="mb-3 block text-left">
                                <span className="block w-full pb-2">Leverage</span>
                                <Select className="w-full block" onValueChange={(value) => setLeverage(value)}>
                                    <SelectTrigger className={`w-full`}>
                                        <SelectValue placeholder="Select Leverage" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1:1">1:1</SelectItem>
                                        <SelectItem value="1:10">1:10</SelectItem>
                                        <SelectItem value="1:25">1:25</SelectItem>
                                        <SelectItem value="1:50">1:50</SelectItem>
                                        <SelectItem value="1:100">1:100</SelectItem>
                                        <SelectItem value="1:200">1:200</SelectItem>
                                        <SelectItem value="1:400">1:400</SelectItem>
                                        <SelectItem value="1:500">1:500</SelectItem>
                                        <SelectItem value="1:1000">1:1000</SelectItem>
                                        <SelectItem value="1:2000">1:2000</SelectItem>
                                        <SelectItem value="1:5000">1:5000</SelectItem>
                                        <SelectItem value="1:10000">1:10000</SelectItem>
                                        <SelectItem value="1:20000">1:20000</SelectItem>
                                        <SelectItem value="1:50000">1:50000</SelectItem>
                                        <SelectItem value="1:100000">1:100000</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Label>

                            <Label className="mb-3 block text-left">
                                <span className="block w-full pb-2">Currency *</span>
                                <Select className="w-full block" onValueChange={(value) => setCurrency(value)}>
                                    <SelectTrigger className={`w-full`}>
                                        <SelectValue placeholder="Select Currency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="USD">USD</SelectItem>
                                        <SelectItem value="EUR">EUR</SelectItem>
                                        <SelectItem value="GBP">GBP</SelectItem>
                                        <SelectItem value="JPY">JPY</SelectItem>
                                        <SelectItem value="AUD">AUD</SelectItem>
                                        <SelectItem value="CAD">CAD</SelectItem>
                                        <SelectItem value="CHF">CHF</SelectItem>
                                        <SelectItem value="NZD">NZD</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Label>
                        </div>

                        <h3 className="text-md my-3 mb-4">Rules</h3>

                        <div className="grid grid-cols-2 gap-2">
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Max Risk % Per Trade *</span>
                                <Input type="number" value={rules.max_risk_per_trade} onChange={(e) => add_rules("max_risk_per_trade", e.target.value)} className={`block w-full`} placeholder="e.g. 1" />
                            </Label>
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Max Daily Loss % *</span>
                                <Input type="number" value={rules.max_daily_loss} onChange={(e) => add_rules("max_daily_loss", e.target.value)} className={`block w-full`} placeholder="e.g. 5" />
                            </Label>
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Max Total Loss % *</span>
                                <Input type="number" value={rules.max_total_loss} onChange={(e) => add_rules("max_total_loss", e.target.value)} className={`block w-full`} placeholder="e.g. 10" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Profit Target *</span>
                                <Input type="number" value={rules.profit_target} onChange={(e) => add_rules("profit_target", e.target.value)} className={`block w-full`} placeholder="e.g. 10 (optional)" />
                            </Label>
                        </div>

                        <h3 className="text-md my-3 mb-4">Strategy</h3>

                        <div className="mb-3">
                            <div className="flex gap-2 mb-2">
                                <Input type="text" value={strategySingle} onChange={(e) => setStrategySingle(e.target.value)} className={`block w-full`} placeholder="Do your market structure" />
                                <Button onClick={add_strategy} className={`bg-green-800 text-white font-medium hover:text-black cursor-pointer`}>
                                    <Plus />
                                </Button>
                            </div>
                            {/* <div className="flex flex-wrap gap-2">
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Scalping <span className="font-bold cursor-pointer">x</span></span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Day Trading <span className="font-bold cursor-pointer">x</span></span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Swing Trading <span className="font-bold cursor-pointer">x</span></span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Position Trading <span className="font-bold cursor-pointer">x</span></span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Algorithmic Trading <span className="font-bold cursor-pointer">x</span></span>
                            </div> */}
                            <ul className="gap-2 text-left list-disc pl-4">
                                {strategy.map((singleStrategy, idx) => {
                                    return (
                                        <li className="relative" key={idx}>
                                            <X className="text-red-800 absolute right-0" onClick={() => remove_strategy(idx)} />
                                            <div className="mr-6">{singleStrategy}</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>
                    <DialogFooter>
                        <Button disabled={isDisabled} onClick={create_account} className={`px-12 bg-green-800 text-white font-medium hover:text-black cursor-pointer`}>Log</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>


    )
}