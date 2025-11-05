"use client"

import { Plus, SettingsIcon } from "lucide-react"
import {Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle, EmptyMedia} from "@/components/ui/empty"

import MiniPerformanceCharts from "@/components/app/mini-performance-charts"
import { useContext } from "react"
import { TradeAccountContext } from "@/server-actions/userContext"
import CreateTradeAccount from "@/components/app/create-trade-account"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import Link from "next/link"

export default function TradeAccountsPage() {

    const { tradeAccounts } = useContext(TradeAccountContext)

    if(!tradeAccounts){
        return(
            <Empty>
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <SettingsIcon className="w-20 h-20" />
                    </EmptyMedia>
                    <EmptyTitle>No Trade Accounts Found</EmptyTitle>
                    <EmptyDescription>
                        You have not created any trade accounts yet. Please create a trade account to get started.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <Link href="/app/create-trade-account">
                        <CreateTradeAccount />
                    </Link>
                </EmptyContent>
            </Empty>
        )
    }

    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 p-4 md:gap-6 md:py-6 relative">
                    {/* <button className="absolute right-3 bg-green-700 text-white flex gap-2 p-1 rounded-lg md:pr-2">
                        <Plus size={28} />
                        <span className="hidden md:block my-1">Add New Account</span>
                    </button>
                    <h1 className="text-3xl font-bold text-green-700">My Trade Account</h1> */}

                    <Card className="py-2 my-3">
                        <CardHeader className={`relative -pl-2`}>
                            <Button variant="ghost" className="absolute right-3 -top-0.5 cursor-pointer">
                                <SettingsIcon className="w-20 h-20" />
                            </Button>
                            <CardTitle className={`text-2xl`}>{tradeAccounts.account_name}</CardTitle>
                        </CardHeader>
                        <CardContent className={`text-muted-foreground`}>
                            <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                                <div className="flex justify-between">
                                    <div>Balance</div>
                                    <div>{tradeAccounts.starting_balance}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Profit/Loss</div>
                                    <div>{tradeAccounts.starting_balance}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Max Daily Loss</div>
                                    <div>{tradeAccounts.starting_balance}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Max Total Drawdown</div>
                                    <div>{tradeAccounts.starting_balance}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Profit Target</div>
                                    <div>{tradeAccounts.starting_balance}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Win Rate</div>
                                    <div>{tradeAccounts.starting_balance}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Average R:R Ratio</div>
                                    <div>{tradeAccounts.starting_balance}</div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className={`relative h-10`}>
                            <Link href="/app/trade-log" className="-mt-10">
                                <Button className={`absolute right-5 bg-green-700 text-white cursor-pointer hover:text-black`}>View Journal</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    <div>
                        <h2 className="text-2xl font-bold">Mini Performance Chart</h2>
                        <MiniPerformanceCharts />
                    </div>
                </div>
            </div>
        </div>
    )
}