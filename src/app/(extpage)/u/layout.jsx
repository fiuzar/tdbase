'use client'

import { UserContext, TradeAccountContext } from "@/server-actions/userContext"
import { getUserDetails } from "@/server-actions/authentication"
import { get_trade_accounts } from "@/server-actions/create-trade-account-actions"

import Header from "@/components/root/header"
import Footer from "@/components/root/footer"

import { AppSidebar } from "@/components/app-header/app-sidebar"
import { SiteHeader } from "@/components/app-header/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import { Toaster } from "@/components/ui/sonner"
import { useEffect, useState } from "react"

export default function UPage({ children }) {
    const [user, setUser] = useState({})
    const [accounts, setAccounts] = useState([])

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        async function runPreliminaries() {
            let { success, message, userDetails } = await getUserDetails()

            if (success) {
                setUser(userDetails)
            }
            else {

            }

            let { success: trade_success, accounts: trade_accounts, message: trade_message } = await get_trade_accounts()

            if (trade_success) {
                setAccounts(trade_accounts[0])
            }
            else {
                throw new Error("Failed to load account details")
            }
        }

        runPreliminaries()
    }, [])

    if (isLogged) {
        <UserContext.Provider value={{ user, setUser }}>
            <TradeAccountContext.Provider value={{ tradeAccounts: accounts, setTradeAccounts: setAccounts }}>
                <SidebarProvider
                    style={
                        {
                            "--sidebar-width": "calc(var(--spacing) * 72)",
                            "--header-height": "calc(var(--spacing) * 12)",
                        }
                    }
                >
                    <AppSidebar variant="inset" />
                    <SidebarInset>
                        <SiteHeader />
                        <>
                            {children}
                            <Toaster />
                        </>
                    </SidebarInset>
                </SidebarProvider>
            </TradeAccountContext.Provider>
        </UserContext.Provider>
    }
    else {
        return (
            <>
                <Header />
                <div className="py-3">
                    {children}
                </div>
                <Footer />
            </>
        )
    }
}