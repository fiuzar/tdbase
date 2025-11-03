export const metadata = {
    title: "Install TDBase | Access Your Trading Journal Anywhere",
    description: "Install our Web App on your phone or desktop. Trade, log and manage your accounts even offline."
}

import { LockIcon, ChartArea, BellIcon, BoltIcon } from "lucide-react"

const whyInstall = [
    {
        header: "Faster Access",
        description: "Open instantly from your device, no browser needed",
        icon: BoltIcon
    },
    {
        header: "Secure & Private",
        description: "Your trades stay on your account, never shared",
        icon: LockIcon
    },
    {
        header: "Offline Support",
        description: "View your last sync data without internet",
        icon: ChartArea
    },
    {
        header: "Instant Updates",
        description: "You always get the latest version automatically",
        icon: BellIcon
    }
]

export default function InstallPage() {
    return (
        <div className="py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h1 className="text-base/7 font-semibold text-gray-500">Install the App</h1>
                    <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        Trade Smarter Anywhere, Anytime
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
                    <div className="md:flex gap-4 justify-between align-middle">
                        <div className="md:w-1/2">
                            <img src="/img/pip_hero.jpg" />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4">How To Install</h2>
                            <p>Our web app works seamlessly across devices. Install it once and get instant access to your trading dashboard, journal and risk tools even offline</p>

                            <h3 className="py-4 text-lg font-semibold">On Mobile</h3>
                            <ul className="list-disc pl-5">
                                <li>Open tdbase.com in your browser</li>
                                <li>Tap 'Share' or your menu button</li>
                                <li>Select "Add to Home Screen".</li>
                                <li>Done! You can now open the app like a native trading tool</li>
                            </ul>

                            <h3 className="py-4 text-lg font-semibold">On Desktop</h3>
                            <ul className="list-disc pl-5">
                                <li>Open tdbase.com in your browser</li>
                                <li>Click the install icon in your address bar</li>
                                <li>Select Install App".</li>
                                <li>Done! You can now open the app like a native trading tool</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
                    <div className="lg:text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl lg:text-balance">
                            Why Install the App
                        </h2>
                        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 my-12">
                            {whyInstall.map((project, idx) => (
                                <div key={project.id || idx} className="group relative flex flex-col items-start border border-zinc-100 dark:border-zinc-700/40 rounded-lg py-2 px-4 overflow-hidden">
                                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                        <span
                                            className="h-11 w-11 flex items-center justify-center rounded-full bg-green-700 text-white text-2xl font-bold select-none"
                                            aria-label={project.header ? project.header[0].toUpperCase() : "P"}
                                        >
                                            <project.icon />
                                        </span>
                                    </div>
                                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                            <span className="relative z-10">{project.header || "Features"}</span>
                                    </h2>

                                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 text-left">
                                        {project.description || "No description."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}