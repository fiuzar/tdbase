'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({ error, reset }) {
    return (
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-green-400">Error</p>
                <h1 className="my-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">An Error Occurred</h1>
                <p className="py-5">Sorry, we couldn&apos;t find what you&apos;re looking for.</p>
                <div clasName="mt-10 flex items-center justify-center gap-x-10 w-full">
                    <Button className="rounded-md bg-green-700 text-white px-3.5 mx-3 py-4 text-sm font-semibold shadow-xs focus-visible:outline-offset-2" onClick={() => reset()}>Try Again</Button>
                    <Link className="text-sm font-semibold text-white" href="mailto:mail@tdbase.com">Contact Support <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </div>
        </main>
    )
}