'use client'

import Image from "next/image"

export default function HowItWorksComponent() {
    return (
        <div className="py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-gray-500">Demo</h2>
                    <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        How the App works
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-12 rounded-lg overflow-hidden">
                    <Image src="/img/pip_hero.jpg" width={500} height={500} alt="Pip Demo" className="w-full max-h-[500px] object-cover" />
                </div>
            </div>
        </div>
    )
}