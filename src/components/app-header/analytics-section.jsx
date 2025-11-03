'use client'

import { Card } from "../ui/card"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "../ui/dropdown-menu"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { Calendar } from "../ui/calendar"
import { Filter } from "lucide-react"

import { useEffect, useState } from "react"

export default function AnalyticsSection() {

    const [period, setPeriod] = useState("this_month")
    const [customRange, setCustomRange] = useState({ start: null, end: null })

    useEffect(() => {
        const now = new Date();

        switch (period) {
            case "today": {
                const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
                const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

                setCustomRange({ start: start.getTime(), end: end.getTime() });
                break;
            }
            case "past_7_days": {
                const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
                const start = new Date(end);
                start.setDate(end.getDate() - 6);
                start.setHours(0, 0, 0, 0);

                setCustomRange({ start: start.getTime(), end: end.getTime() });
                break;
            }
            case "this_month": {
                const start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
                const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

                setCustomRange({ start: start.getTime(), end: end.getTime() });
                break;
            }
            case "last_month": {
                const start = new Date(now.getFullYear(), now.getMonth() - 1, 1, 0, 0, 0, 0);
                const end = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);

                setCustomRange({ start: start.getTime(), end: end.getTime() });
                break;
            }
            case "custom": {
                break;
            }
            default: {
                setCustomRange({ start: null, end: null })
            }
        }
    }, [period])

    return (
        <div className="my-3 relative">
            <h2 className="text-3xl font-bold mb-4">Analytics</h2>

            <div className="absolute top-0 right-3 max-w-44">
                <DropdownMenu>
                    <DropdownMenuTrigger className="border flex gap-2 p-2 align-middle cursor-pointer rounded-lg">
                        {period === "today" && "Today"}
                        {period === "past_7_days" && "Past 7 Days"}
                        {period === "this_month" && "This Month"}
                        {period === "last_month" && "Last Month"}
                        {period === "custom" && "Custom"}
                        <Filter size={16} className="my-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Period</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setPeriod("today")}>Today</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setPeriod("past_7_days")}>Past 7 Days</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setPeriod("this_month")}>This Month</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setPeriod("last_month")}>Last Month</DropdownMenuItem>
                        <Dialog>
                            <DialogTrigger className={`px-2 hover:bg-zinc-800 py-1 rounded-lg w-full text-left`} onClick={() => setPeriod("custom")}>
                                Custom
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Select Custom Date Range</DialogTitle>
                                    <DialogDescription>
                                        Choose a start and end date for your custom range.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid md:grid-cols-2 gap-2">
                                    <div>
                                        <h3 className="text-md font-semibold mb-2">Start Date</h3>
                                        <Calendar
                                            mode="single"
                                            selected={customRange.start ? new Date(customRange.start) : undefined}
                                            onSelect={(date) => {
                                                if (date) {
                                                    setCustomRange({ ...customRange, start: date.getTime() })
                                                }
                                            }}
                                            initialFocus
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-semibold mb-2">End Date</h3>
                                        <Calendar
                                            mode="single"
                                            selected={customRange.end ? new Date(customRange.end) : undefined}
                                            onSelect={(date) => {
                                                if (date) {
                                                    setCustomRange({ ...customRange, end: date.getTime() })
                                                }
                                            }}
                                            initialFocus
                                        />
                                    </div>
                                </div>
                                </DialogContent>
                        </Dialog>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="grid md:grid-cols-2 gap-2">
                <Card className={`py-1 px-1 h-80`}>
                    <h3 className="text-md font-semibold px-2">Profit/Loss</h3>
                </Card>
                <Card className={`py-1 px-1`}>
                    <h3 className="text-md font-semibold px-2">Win Rate</h3>
                </Card>
                <Card className={`py-1 px-1 col-span-2`}>
                    <h3 className="text-md font-semibold px-2">Average R:R Per Symbol</h3>
                </Card>
            </div>
        </div>
    )
}