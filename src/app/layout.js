import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trade Journal & Risk Manager for Smart Traders | TDBase",
  description: "Track, analyze and improve your trading performance with out free journal app. Built for prop firm trader and serious retail traders who want consistency, clarity and control. Works offline and syncs seamlessly when online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark h-full`}
      >
        {children}
      </body>
    </html>
  );
}
