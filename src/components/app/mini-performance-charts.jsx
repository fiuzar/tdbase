'use client'

import { useEffect, useState, useContext } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { getUserTradeLogs } from "@/server-actions/logTrades";
import { Card } from "@/components/ui/card";
import { TradeAccountContext } from "@/server-actions/userContext";

// Register Chart.js modules
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

export default function MiniPerformanceCharts() {
  const [equityCurve, setEquityCurve] = useState([]);
  const { tradeAccounts } = useContext(TradeAccountContext);
  const [logs, setLogs] = useState(null);
  const [otherMessage, setOtherMessage] = useState([]);

  useEffect(() => {
    async function getUserLogs() {
      const { success, message, tradeLogs } = await getUserTradeLogs();

      if (success) {
        setLogs(tradeLogs);
      } else {
        setOtherMessage(message);
      }
    }

    getUserLogs();
  }, []);

  useEffect(() => {
    if (logs && tradeAccounts) {
      const account = tradeAccounts;
      const startingBalance = parseFloat(account.starting_balance);
      const curve = computeMonthlyEquityCurve(logs, startingBalance);
      setEquityCurve(curve);
    }
  }, [logs, tradeAccounts]);

  function computeMonthlyEquityCurve(trades, startBalance) {
    const validTrades = trades.filter(trade => trade.closed_at);
    const sorted = [...validTrades].sort(
      (a, b) => new Date(a.closed_at) - new Date(b.closed_at)
    );

    const groupedByMonth = {};
    sorted.forEach(trade => {
      const date = new Date(trade.closed_at);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      if (!groupedByMonth[monthKey]) groupedByMonth[monthKey] = [];
      groupedByMonth[monthKey].push(trade);
    });

    const curve = [];
    let balance = startBalance;

    Object.keys(groupedByMonth).forEach(monthKey => {
      const [year, month] = monthKey.split('-').map(Number);
      if (!year || !month) return;

      const daysInMonth = new Date(year, month, 0).getDate();
      const dailyBalances = Array(daysInMonth).fill(balance);

      groupedByMonth[monthKey].forEach(trade => {
        const date = new Date(trade.closed_at);
        const day = date.getDate() - 1;
        balance += trade.profit || 0;
        dailyBalances[day] = balance;
      });

      for (let i = 1; i < dailyBalances.length; i++) {
        if (dailyBalances[i] === balance) {
          dailyBalances[i] = dailyBalances[i - 1];
        }
      }

      dailyBalances.forEach((bal, index) => {
        curve.push({
          date: `${monthKey}-${String(index + 1).padStart(2, "0")}`,
          balance: bal,
        });
      });
    });

    return curve;
  }

  // Chart.js data and options
  const chartData = {
    labels: equityCurve.map(point => point.date),
    datasets: [
      {
        label: "Equity Curve",
        data: equityCurve.map(point => point.balance),
        fill: true,
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        borderColor: "#00BFFF",
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // hide legend
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#111",
        titleColor: "#fff",
        bodyColor: "#ccc",
      },
    },
    scales: {
      x: {
        ticks: { color: "#ccc", maxRotation: 45, minRotation: 45 },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        ticks: { color: "#ccc" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return (
    <Card className="p-2 mt-4">
      <h2 className="text-lg font-semibold mb-2">Mini Performance Chart</h2>
      <div style={{ height: "300px" }}>
        {equityCurve.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p className="text-gray-400 text-sm">Loading chart data...</p>
        )}
      </div>
    </Card>
  );
}
