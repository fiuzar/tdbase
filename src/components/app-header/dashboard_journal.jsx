import { Card } from "../ui/card"
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "../ui/table"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { PlusIcon } from "lucide-react"

export default function DashboardJournal({ className }) {
    return (
        <Card className={`${className} px-3 relative`}>
            <h2 className="text-3xl font-bold mb-4">Trade Journal</h2>
            <div className="lg:absolute lg:max-w-96 flex gap-3 right-4">
                <Input type="text" placeholder="Search..." className="flex-auto" />
                <Button className={`text-white bg-green-700`}>
                    <PlusIcon size={16} />
                </Button>
            </div>

            <Table>
                <TableCaption>A list of your recent trades.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Entry</TableHead>
                        <TableHead>SL</TableHead>
                        <TableHead>TP</TableHead>
                        <TableHead>Lot Size</TableHead>
                        <TableHead>Risk %</TableHead>
                        <TableHead>Reward %</TableHead>
                        <TableHead>P/L</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-muted-foreground">
                    <TableRow>
                        <TableCell>10/20/2025</TableCell>
                        <TableCell>XAUUSD</TableCell>
                        <TableCell>4205.50</TableCell>
                        <TableCell>4195.50</TableCell>
                        <TableCell>4237.50</TableCell>
                        <TableCell>0.01</TableCell>
                        <TableCell>0.50</TableCell>
                        <TableCell>1.50</TableCell>
                        <TableCell>-$11.34</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>10/21/2025</TableCell>
                        <TableCell>EURUSD</TableCell>
                        <TableCell>1.1595</TableCell>
                        <TableCell>1.1590</TableCell>
                        <TableCell>1.1611</TableCell>
                        <TableCell>0.2</TableCell>
                        <TableCell>0.50</TableCell>
                        <TableCell>1.75</TableCell>
                        <TableCell>+$52.67</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>10/22/2025</TableCell>
                        <TableCell>BTCUSD</TableCell>
                        <TableCell>109432</TableCell>
                        <TableCell>108954</TableCell>
                        <TableCell>110345</TableCell>
                        <TableCell>0.01</TableCell>
                        <TableCell>0.50</TableCell>
                        <TableCell>1.50</TableCell>
                        <TableCell>-$12.50</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>10/22/2025</TableCell>
                        <TableCell>EURUSD</TableCell>
                        <TableCell>1.1610</TableCell>
                        <TableCell>1.1615</TableCell>
                        <TableCell>1.1590</TableCell>
                        <TableCell>0.23</TableCell>
                        <TableCell>0.50</TableCell>
                        <TableCell>1.8</TableCell>
                        <TableCell>-$13.60</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>10/23/2025</TableCell>
                        <TableCell>XAUUSD</TableCell>
                        <TableCell>4095.63</TableCell>
                        <TableCell>4099.80</TableCell>
                        <TableCell>4154.62</TableCell>
                        <TableCell>0.01</TableCell>
                        <TableCell>0.50</TableCell>
                        <TableCell>1.50</TableCell>
                        <TableCell>+$43.07</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    )
}