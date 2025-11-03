import ChooseTDBase from "@/components/root/choose-tdbase"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import Image from "next/image"

export const metadata = {
    title: "Features | Trading Journal, Risk Manager & Prop Firm PRep Tools",
    description: "All the tools that make trading easier, from trade journalling and risk managerment to performance analytics and prop firm simulation. Everything you need to trade with confidence in one platform."
}

const features = [
    {
        name: "Smart Trade Journal",
        description: "Import trades automatically from your broker, tag your emotions and attach screenshots. All your trades in one clean dashboard.",
        value: "item-1",
    },
    {
        name: "The Discipline Score",
        description: "A live mirror of your trading habits, measuring consistency, risk management and adherence to your trading plan.",
        value: "item-2",
    },
    {
        name: "Behavioural Compliance Score",
        description: "Track your discipline over time with our proprietary Behavioural Compliance Score, designed to show you how consistently you respect your trading plan.",
        value: "item-3",
    },
    {
        name: "Funding Challenge Tracker",
        description: "Create and Monitor your prop-firm challenge rules (max daily drawdown, overall loss, profit targets). Get real time alerts when you are nearing limits, before you blow your account.",
        value: "item-4",
    },
    {
        name: "Custom Accounts & Strategy Profiles",
        description: "Separate your trading strategies, prop-firm challenges or demo experiments. Each account has its own balance, max risks and daily loss rules. Compare perfomance across profiles and discover where you're truly consistent.",
        value: "item-5"
    },
    {
        name: "Social Performance & Community Sync",
        description: "Share your progress with your trading peers or mentor directly from the app. Build credibility, get feedback and showcase your verified trade stats to sponsors.",
        value: "item-6"
    },
    {
        name: "Advanced Strategy Analytics",
        description: "Filter trades by combinations of tags, instruments and time periods. Discover your edge with detailed performance metrics including expectancy, risk of ruin and profit factor.",
        value: "item-7"
    },
    {
        name: "AI Mentor",
        description: "Get personalized feedback on your trading journal, risk management and discipline score. The AI mentor suggests improvements based on your historical data.",
    }
]

export default function FeaturesPage() {
    return (
        <>
            <div className="py-16">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base/7 font-semibold text-gray-500">Features</h2>
                        <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                            Built for Traders Who Want Consistency
                        </p>
                    </div>
                </div>

                <div className="container mx-auto py-10 px-2">
                    <div className="grid lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
                        <Image
                            src="/img/pip_hero.jpg"
                            alt=""
                            width={600}
                            height={600}
                            className="h-auto object-cover object-center rounded-lg" />

                        <div>
                            <p>
                                TDBase is the first trading journal designed to measure discipline, not just profit. Every trade you log becomes structured data that teaches you how to trade like a funded professional.
                            </p>

                            <Accordion type="single" collapsible className="w-full mt-6">
                                {features.map((feature) => (
                                    <AccordionItem key={feature.value} value={feature.value}>
                                        <AccordionTrigger>{feature.name}</AccordionTrigger>
                                        <AccordionContent>
                                            {feature.description}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>


            {/* <ChooseTDBase /> */}
        </>
    )
}