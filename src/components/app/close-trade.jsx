'use client'

import { Button } from "@/components/ui/button"
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { toast } from "sonner";

import { useState } from "react"

import { CloseTradeLog } from "../../server-actions/logTrades";

export default function CloseTrade({ tradeDetail, setUpdateLogs }) {

    const {id, symbol, direction, entry_price, stop_loss, take_profit, note } = JSON.parse(tradeDetail)
    
    const [closeNotes, setCloseNotes] = useState(note || "")
    const [closePrice, setClosePrice] = useState("")

    async function handleCloseTrade() {
        const { success, message, updatedTrade} = await CloseTradeLog(id, closePrice, closeNotes);

        if (success) {
            setUpdateLogs(updatedTrade);
            toast(<div className="text-green-700">Trade closed successfully</div>)
        } else {
            toast(<div className="text-red-700">{message}</div>)
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size={"icon"} className="bg-muted border cursor-pointer" variant={'ghost'}>
                        <X />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className="border-b py-3">
                        <DialogTitle>Close <span className="text-green-600 font-bold">{`${symbol}`}</span> </DialogTitle>
                    </DialogHeader>
                    <div>
                        {/* {tradeDetail} */}
                        <div className="mb-8 grid md:grid-cols-2">
                            <div>
                                <h2 className={`font-bold text-xl ${(direction == "SELL")? "text-red-700" : "text-blue-700"}`}>{direction}</h2>
                                <p>EP: {entry_price}</p>
                            </div>
                            <div>
                                <p>SL: {stop_loss}</p>
                                <p>TP: {take_profit}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 hover:text-black mt-4">
                            <Button className="hover:bg-green-700" size="icon" onClick={() => setClosePrice(stop_loss)}>SL</Button>
                            <Button className="hover:bg-red-700" size="icon" onClick={() => setClosePrice(take_profit)}>TP</Button>
                            <Input type="number" value={closePrice} onChange={(e) => setClosePrice(e.target.value)} placeholder="Close Price" className="w-full" />
                        </div>

                        <Textarea value={closeNotes} onChange={(e) => setCloseNotes(e.target.value)} placeholder="Closing Notes" className="w-full mt-4" rows={4} />

                    </div>
                    <DialogFooter>
                        <Button onClick={handleCloseTrade} disabled={closePrice == ""} className="bg-green-800 text-white hover:text-black">Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}