'use client'

import CloseTrade from "./close-trade";

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "../ui/card";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react";

export function TradeLogsTable({ logs }) {
    return (
        <Card className="p-4">
            <Table>
                <TableHeader className="bg-muted">
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Entry</TableHead>
                        <TableHead>Stop Loss</TableHead>
                        <TableHead>Take Profit</TableHead>
                        <TableHead>LotSize</TableHead>
                        <TableHead>R:R</TableHead>
                        <TableHead className="w-[30px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {logs.map((tradelog, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{new Date(tradelog.created_at).toLocaleDateString()}</TableCell>
                            <TableCell>{tradelog.symbol}</TableCell>
                            <TableCell>{tradelog.direction}</TableCell>
                            <TableCell>{tradelog.entry_price}</TableCell>
                            <TableCell>{tradelog.stop_loss}</TableCell>
                            <TableCell>{tradelog.take_profit}</TableCell>
                            <TableCell>{tradelog.lot_size}</TableCell>
                            <TableCell>{tradelog.risk_reward_ratio}</TableCell>
                            <TableCell>
                                <CloseTrade tradeDetail={JSON.stringify(tradelog)} />
                            </TableCell>
                        </TableRow>
                    ))}
                    {/* <TableRow className="bg-red-800/30">
                        <TableCell>12/10/2025</TableCell>
                        <TableCell>EURUSD</TableCell>
                        <TableCell>BUY</TableCell>
                        <TableCell>134543</TableCell>
                        <TableCell>134543</TableCell>
                        <TableCell>145343</TableCell>
                        <TableCell>1343</TableCell>
                        <TableCell>1343</TableCell>
                        <TableCell>
                            <Button size={"icon"} className="bg-muted border cursor-pointer" variant={'ghost'}>
                                <X />
                            </Button>
                        </TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>
        </Card>
    )
}