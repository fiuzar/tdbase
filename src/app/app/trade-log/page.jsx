'use client'

import { TradeLogsTable } from "@/components/app/trade-logs-table"

import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Plus, ArrowUp, ArrowDown, Filter } from "lucide-react"

import { use, useContext, useEffect, useState } from "react"
import { TradeAccountContext } from "@/server-actions/userContext";
import LogATrade from "@/components/app/log-a-trade"

import { getUserTradeLogs } from "../../../server-actions/logTrades"

export default function TradeLogPage() {
    const { tradeAccounts, setTradeAccounts } = useContext(TradeAccountContext)
    const [accountValue, setAccountValue] = useState(tradeAccounts?.account_name || "")
    const [sortValue, setSortValue] = useState({ sortBy: "date", order: 0 })
    const [tradeLogs, setTradelogs] = useState([])
    const [insertedTrade, setInsertedTrade] = useState(null)

    function handleSortChange(value) {
        if (value === sortValue.sortBy) {
            setSortValue({ sortBy: value, order: (sortValue.order + 1) % 2 })
        }
        else {
            setSortValue({ sortBy: value, order: 0 })
        }
    }

    useEffect(() => {
        async function fetchTradeLogs() {
            const { success, tradeLogs, message } = await getUserTradeLogs();
            if (success) {
                setTradelogs(tradeLogs);
            }
            else {
                console.error("Error fetching trade logs:", message);
            }
        }
        fetchTradeLogs();
    }, [])

    useEffect(() => {
        if (insertedTrade) {
            setTradelogs((prevLogs) => [insertedTrade, ...prevLogs]);
        }
    }, [insertedTrade])

    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4">

                    <div className="md:flex justify-between my-3 gap-2">
                        <div className="w-full lg:w-80">
                            <Input className={`w-full`} type={`text`} placeholder="Search"></Input>
                        </div>

                        <div className="lg:max-w-1/2 flex gap-2">
                            {tradeAccounts && tradeAccounts?.starting_balance ? (
                                <Select className="w-full block" defaultValue={accountValue} onValueChange={(value) => setAccountValue(value)}>
                                    <SelectTrigger className={`w-full`}>
                                        {accountValue || "Select Account"}
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={tradeAccounts?.account_name}>{`${tradeAccounts.account_name} : ${tradeAccounts?.starting_balance}`}</SelectItem>
                                        <SelectItem value="all">All</SelectItem>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <></>
                            )}

                            <Select className="w-full block" defaultValue={sortValue.sortBy} onValueChange={(value) => handleSortChange(value)}>
                                <SelectTrigger className={`w-full`}>
                                    {sortValue.sortBy || "Sort By"}
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={`date`}>Date <ArrowUp /> <ArrowDown /></SelectItem>
                                    <SelectItem value={`profit`}>Profit <ArrowUp /> <ArrowDown /></SelectItem>
                                    <SelectItem value={`R:R`}>Risk:Reward <ArrowUp /> <ArrowDown /></SelectItem>
                                    <SelectItem value={`win/loss`}>Win/Loss <ArrowUp /> <ArrowDown /></SelectItem>
                                    <SelectItem value={`duration`}>Duration <ArrowUp /> <ArrowDown /></SelectItem>
                                    <SelectItem value={`compliance`}>Compliance <ArrowUp /> <ArrowDown /></SelectItem>
                                </SelectContent>
                            </Select>

                            <LogATrade setInsertedTrade={setInsertedTrade} buttonType="icon" />

                            {/* <Button size={"icon"} className="bg-green-800 font-bold text-white text-lg hover:text-black cursor-pointer">
                                <Plus size={20} />
                            </Button> */}
                        </div>
                    </div>

                    <TradeLogsTable logs={tradeLogs} />
                </div>
            </div>
        </div>
    )
}