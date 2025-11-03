'use client'

import Link from "next/link"

import { LogsIcon, MonitorCheck, Rocket, Share2Icon } from "lucide-react";

const features = [
    {
        name: 'Smart Trade Journal',
        description:
            'Track every trade automatically; entry, exit, risk, reward, screenshots and emotion tags, all in one clean dashboard. You will never forget why you took a trade or repeat the same mistake twice',
        icon: LogsIcon,
    },
    {
        name: 'Funding Challenge Tracker',
        description:
            'Create and Monitor your prop-firm challenge rules (max daily drawdown, overall loss, profit targets). Get real time alerts when you are nearing limits, before you blow your account.',
        icon: MonitorCheck,
    },
    {
        name: 'Smart Growth Planner',
        description:
            'Set profit, drawdown and consistency targets. The AI monitors your results and suggests how to scale from demo -> challenge -> funded account based on verified stats.',
        icon: Rocket,
    },
    {
        name: 'Social performance & Community Sync',
        description:
            'Share your progress with your trading peers or mentor directly from the app. Build credibility, get feedback and showcase your verified trade stats to sponsors.',
        icon: Share2Icon,
    },
]

export default function HomeFeatures() {

    return (
        <div className="py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-gray-500">Features</h2>
                    <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        Built for Traders Who Want Consistency
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-white">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}