import { symbols } from "@/lib/symbols";

export async function calculateRiskSize(
    pair,
    accountBalance,
    riskPercentage,
    entryPrice,
    stopLoss,
    takeProfit,
) {

    // --- 1. Validate inputs ---
    if (
        !pair ||
        !accountBalance ||
        !riskPercentage ||
        !entryPrice ||
        !stopLoss
    ) {
        return { success: false, message: "Missing required fields" };
    }

    // --- 2. Auto-detect pip size ---
    let { pipSize, pipValuePerLot } = await getSymbolDetails(pair)

    if (pipSize == null) {
        pipSize = pair.includes("JPY") ? 0.01 : 0.0001;
    }

    // --- 3. Compute pip difference ---
    const pipDifference = Math.abs(entryPrice - stopLoss);
    if (pipDifference <= 0) {
        return { success: false, message: "Invalid stop loss or entry price" };
    }

    // --- 4. Pip value per standard lot ---
    // Roughly 10 units per pip per standard lot for non-JPY pairs
    // JPY pairs have slightly different value, but this is a good baseline

    if (!pipValuePerLot) {
        pipValuePerLot = pair.includes("JPY") ? 9.1 : 10;
    }

    // --- 5. Risk amount in account currency ---
    const riskAmount = (accountBalance * riskPercentage) / 100;

    // --- 6. Calculate lot sizes ---
    // standard lot = 100,000 units
    // mini lot = 10,000 units
    // micro lot = 1,000 units
    const lotSize =
        riskAmount / (pipDifference / pipSize * pipValuePerLot);

    const standardLots = lotSize.toFixed(2);
    const miniLots = (lotSize * 10).toFixed(2);
    const microLots = (lotSize * 100).toFixed(2);

    // --- 7. Take profit pips and reward:risk ratio ---
    let takeProfitPips = null;
    let rr = null;
    if (takeProfit) {
        takeProfitPips = Math.abs(takeProfit - entryPrice) / pipSize;
        const stopLossPips = pipDifference / pipSize;
        rr = (takeProfitPips / stopLossPips).toFixed(2);
    }

    // --- 8. Return result ---
    return {
        success: true,
        message: "Calculation successful",
        pair,
        pipSize,
        pipDifference: pipDifference.toFixed(5),
        pipValuePerLot,
        riskAmount: riskAmount.toFixed(2),
        lots: {
            standard: standardLots,
            mini: miniLots,
            micro: microLots,
        },
        takeProfitPips,
        rr,
    };
}

export function calculateRR(pair, entryPrice, stopLoss, takeProfit) {

    const pipSize = pair.includes("JPY") ? 0.01 : 0.0001;

    if (
        !pair ||
        !entryPrice ||
        !takeProfit ||
        !stopLoss
    ) {
        return { success: false, message: "Missing required fields" };
    }

    const pipDifference = Math.abs(entryPrice - stopLoss);
    if (pipDifference <= 0) {
        return { success: false, message: "Invalid stop loss or entry price" };
    }

    let takeProfitPips = null;
    let rr = null;
    if (takeProfit) {
        takeProfitPips = Math.abs(takeProfit - entryPrice) / pipSize;
        const stopLossPips = pipDifference / pipSize;
        rr = (takeProfitPips / stopLossPips).toFixed(2);
    }

    return { success: true, rr }
}

export async function calculateLotSize(
    pair,
    accountBalance,
    riskPercentage,
    entryPrice,
    stopLoss,
) {

    const result = await calculateRiskSize(
        pair,
        accountBalance,
        riskPercentage,
        entryPrice,
        stopLoss,
        null
    );

    if (!result.success) {
        return {success: false, message: "failed to calculate lot size"}
    }
    return {
        success: true,
        lots: result.lots.standard
    }

}

export async function getSymbolDetails(pair) {
    const symbol = symbols.find(s => s.pair == pair)

    if (!symbol) {

        return { pipSize: null }
    }

    return {
        pipSize: symbol.pipSize,
        pipValuePerLot: symbol.pipValuePerLot
    }
}