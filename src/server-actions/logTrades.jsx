'use server'

import { v4 as uuidv4 } from 'uuid';
import { auth } from "@/auth";
import { query } from "@/dbh"

async function get_trade_account(account_name, userId) {

    if (!account_name) {
        return { success: false, message: "Account ID is required." };
    }

    try {
        const selectOneQuery = ` SELECT * FROM trade_account WHERE user_id = $1 AND account_name = $2;`;

        const result = await query(selectOneQuery, [userId, account_name]);

        if (result.rowCount === 0) {
            return { success: false, message: "Account not found or unauthorized." };
        }

        return { success: true, account_id: result.rows[0].id };
    } catch (error) {
        console.error("❌ Error fetching trade account:", error);
        return { success: false, message: "Server error — please try again later." };
    }
}

export async function newManualTradeLog(symbol, account, entry, stopLoss, takeProfit, rr, direction, lotSize, note) {
    if (!symbol || !account || !entry || !stopLoss || !takeProfit || !direction || !lotSize) {
        return { success: false, message: "Missing required fields" }
    }

    let userId;

    const session = await auth();
    if (!session?.user) {
        return { success: false, message: "Session lost, login to fix issue" }
    }

    userId = session.user.id;

    const accountResult = await get_trade_account(account, userId);
    if (!accountResult.success) {
        return { success: false, message: "Trade account not found" }
    }
    else {
        account = accountResult.account_id;
    }

    const tradeId = uuidv4();

    try {
        const result = await query(
            `
                INSERT INTO trade_logs
                (trade_id, user_id, symbol, account_name, entry_price, stop_loss, take_profit, risk_reward_ratio, direction, lot_size, note, created_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW())
                RETURNING *
            `,
            [tradeId, userId, symbol, account, entry, stopLoss, takeProfit, rr, direction, lotSize, note]
        );


        const insertedTrade = result[0];

        return { success: true, insertedTrade, message: "Trade log inserted successfully" };
    }
    catch (error) {
        console.error("Error inserting trade log:", error);
        return { success: false, message: "Server error, please try again later" };
    }

}

export async function getUserTradeLogs(filters) {
    const session = await auth();
    if (!session?.user) {
        return { success: false, message: "Session not found, log in again" }
    }

    const userId = session.user.id;

    try {
        let baseQuery = `SELECT * FROM trade_logs WHERE user_id = $1 ORDER BY created_at DESC`;
        let queryParams = [userId];
        const result = await query(baseQuery, queryParams);

        return { success: true, tradeLogs: result.rows };
    }
    catch (error) {
        console.error("Error fetching trade logs:", error);
        return { success: false, message: "Server error, please try again later" };
    }

}

export async function CloseTradeLog(tradeId, closePrice, closeNotes) {
    if (!tradeId || !closePrice) {
        return { success: false, message: "Missing required fields" }
    }

    const session = await auth();
    if (!session?.user) {
        return { success: false, message: "Session not found, log in again" }
    }
    const userId = session.user.id;

    try {
        const result = await query(
            `
                UPDATE trade_logs
                SET close_price = $1,
                    close_notes = $2,
                    closed_at = NOW()
                WHERE trade_id = $3 AND user_id = $4
                RETURNING *
            `,
            [closePrice, closeNotes, tradeId, userId]
        );
        const updatedTrade = result.rows[0];

        return { success: true, updatedTrade, message: "Trade closed successfully" };
    }
    catch (error) {
        console.error("Error closing trade log:", error);
        return { success: false, message: "Server error, please try again later" };
    }
}