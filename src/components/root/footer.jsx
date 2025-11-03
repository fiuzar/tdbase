import Link from "next/link"

export default function Footer() {
    return (
        <>

            <div>
                <div className="rounded-2xl border mt-10 border-zinc-100 p-6 dark:border-zinc-700/40 max-w-3xl mx-auto">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                            <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                            <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                        </svg>
                        <span className="ml-3 text-2xl">Stay up to date</span>
                    </h2>
                    <p className="mt-2 text-md text-zinc-600 dark:text-zinc-400">Join 1000+ Traders Getting Our Free Market Outlooks & Psychology Notes</p>
                    <div className="mt-6 flex items-center">
                        <span className="flex min-w-0 flex-auto p-px">
                            <input type="email" placeholder="Email address" aria-label="Email address" required="" className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400" />
                        </span>
                        <button className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none" type="submit">Join</button>
                    </div>
                </div>
            </div>

            <footer className="mt-24 flex-none">
                <div className="sm:px-8">
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                            <div className="relative px-4 sm:px-8 lg:px-12">
                                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                            <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/features">Features</Link>
                                            <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/install">Install</Link>
                                            <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">About Us</Link>
                                            <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/terms">Terms & Condition</Link>
                                            <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/privacy-policy">Privacy</Link>
                                        </div>
                                        <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                            © 2025 Pip. All rights reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}