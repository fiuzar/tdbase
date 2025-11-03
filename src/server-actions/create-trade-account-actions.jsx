"use server";

import { query } from "@/dbh";
import { auth } from "@/auth";

export async function add_trade_account(account_name, starting_balance, leverage, currency, rules, strategy) {
	// ✅ Validate inputs
	if (
		!account_name ||
		!starting_balance ||
		!currency ||
		!rules?.max_risk_per_trade ||
		!rules?.max_daily_loss ||
		!rules?.max_total_loss
	) {
		return {
			success: false,
			message: "Empty fields — all fields marked * are required.",
		};
	}

	// ✅ Get user session
	const session = await auth();

	if (!session?.user?.id) {
		return {
			success: false,
			message: "Session not found — please log in again.",
		};
	}

	const user_id = session.user.id;

	try {

		const select_trade_acc_name = `SELECT * FROM trade_account WHERE user_id = $1 AND account_name = $2`
		const select_account_query = await query(select_trade_acc_name, [user_id, account_name])
		const no_of_trade_acc = select_account_query.rows[0]

		if (no_of_trade_acc) {
			return { success: false, message: "Account exists, please use another name" }
		}

		// ✅ Serialize JSON fields before inserting
		const add_trade_acc = `
			INSERT INTO trade_account (
				user_id, 
				account_name, 
				starting_balance, 
				leverage, 
				currency, 
				rules, 
				strategy
			) VALUES ($1, $2, $3, $4, $5, $6, $7)
			RETURNING *;
		`;

		const values = [
			user_id,
			account_name,
			starting_balance,
			leverage,
			currency,
			JSON.stringify(rules),     // convert JS object → JSON
			JSON.stringify(strategy),  // convert JS array → JSON
		];

		const result = await query(add_trade_acc, values);

		return {
			success: true,
			message: "Account created successfully.",
			data: result.rows[0],
		};
	} catch (error) {
		console.error("❌ Error inserting trade account:", error);

		// More helpful feedback
		if (error.code === "23505") {
			// duplicate constraint error
			return { success: false, message: "Account name already exists." };
		}

		return {
			success: false,
			message: "Server error — please try again later.",
		};
	}
}

export async function delete_trade_account(account_id) {
	const session = await auth();

	if (!session?.user?.id) {
		return { success: false, message: "Session not found, please log in again." };
	}

	try {
		const deleteQuery = `
			DELETE FROM trade_account 
			WHERE id = $1 AND user_id = $2
			RETURNING *;
		`;

		const result = await query(deleteQuery, [account_id, session.user.id]);

		if (result.rowCount === 0) {
			return { success: false, message: "Account not found or unauthorized." };
		}

		return { success: true, message: "Account deleted successfully." };
	} catch (error) {
		console.error("❌ Error deleting trade account:", error);
		return { success: false, message: "Server error — please try again later." };
	}
}

export async function get_trade_accounts() {
	const session = await auth();

	if (!session?.user?.id) {
		return { success: false, message: "Session not found — please log in again." };
	}

	const user_id = session.user.id;

	try {
		const selectQuery = `
			SELECT id, account_name, starting_balance, leverage, currency, rules, strategy, created_at
			FROM trade_account
			WHERE user_id = $1
			ORDER BY created_at DESC;
		`;

		const result = await query(selectQuery, [user_id]);

		return {
			success: true,
			accounts: result.rows,
		};
	} catch (error) {
		console.error("❌ Error fetching trade accounts:", error);
		return { success: false, message: "Server error — please try again later." };
	}
}

export async function update_trade_account(account_id, updates) {
	const session = await auth();

	if (!session?.user?.id) {
		return { success: false, message: "Session not found — please log in again." };
	}

	const user_id = session.user.id;

	const { account_name, starting_balance, leverage, currency, rules, strategy } = updates;

	try {
		const updateQuery = `
			UPDATE trade_account
			SET
				account_name = COALESCE($1, account_name),
				starting_balance = COALESCE($2, starting_balance),
				leverage = COALESCE($3, leverage),
				currency = COALESCE($4, currency),
				rules = COALESCE($5, rules),
				strategy = COALESCE($6, strategy),
				updated_at = NOW()
			WHERE id = $7 AND user_id = $8
			RETURNING *;
		`;

		const values = [
			account_name || null,
			starting_balance || null,
			leverage || null,
			currency || null,
			rules ? JSON.stringify(rules) : null,
			strategy ? JSON.stringify(strategy) : null,
			account_id,
			user_id,
		];

		const result = await query(updateQuery, values);

		if (result.rowCount === 0) {
			return { success: false, message: "Account not found or unauthorized." };
		}

		return { success: true, message: "Account updated successfully.", data: result.rows[0] };
	} catch (error) {
		console.error("❌ Error updating trade account:", error);
		return { success: false, message: "Server error — please try again later." };
	}
}

export async function get_trade_account(account_id) {
	const session = await auth();

	if (!session?.user?.id) {
		return { success: false, message: "Session not found — please log in again." };
	}

	const user_id = session.user.id;

	try {
		const selectOneQuery = `
			SELECT id, account_name, starting_balance, leverage, currency, rules, strategy, created_at
			FROM trade_account
			WHERE id = $1 AND user_id = $2;
		`;

		const result = await query(selectOneQuery, [account_id, user_id]);

		if (result.rowCount === 0) {
			return { success: false, message: "Account not found or unauthorized." };
		}

		return { success: true, account: result.rows[0] };
	} catch (error) {
		console.error("❌ Error fetching trade account:", error);
		return { success: false, message: "Server error — please try again later." };
	}
}
