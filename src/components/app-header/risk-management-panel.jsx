'use client'

import { Alert, AlertTitle, AlertDescription } from "../ui/alert"

export default function RiskManagementPanel({className}) {
    return (
        <div className={className}>
            <h2 className="text-xl font-bold mb-4">Alerts</h2>
            <div className="space-y-2">
                <Alert variant="warning">
                    <AlertTitle>Review Open Trades</AlertTitle>
                    <AlertDescription>You have 2 open trades that need your attention.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                    <AlertTitle>High Risk Trade</AlertTitle>
                    <AlertDescription>Your last trade of 0.01 on BTCUSD did not exceeded your risk threshold. (Cleared)</AlertDescription>
                </Alert>
                <Alert variant="info">
                    <AlertTitle>Weekly Summary Available</AlertTitle>
                    <AlertDescription>Your weekly performance summary is ready to view.</AlertDescription>
                </Alert>

                {/* <div className="p-4 bg-red-100 text-red-800 rounded">
                    <p className="font-semibold">High Risk Trade</p>
                    <p className="text-sm">Your last trade exceeded your risk threshold.</p>
                </div>
                <div className="p-4 bg-yellow-100 text-yellow-800 rounded">
                    <p className="font-semibold">Review Open Trades</p>
                    <p className="text-sm">You have open trades that need your attention.</p>
                </div>
                <div className="p-4 bg-blue-100 text-blue-800 rounded">
                    <p className="font-semibold">Weekly Summary Available</p>
                    <p className="text-sm">Your weekly performance summary is ready to view.</p>
                </div> */}
            </div>
        </div>
    )
}