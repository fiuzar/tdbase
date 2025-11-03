'use client'

import { Check } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";


export default function PricingComponent({
    title = "Choose Your Path to Profitability",
    description = "Start free. Build consistency. Pass challenges. Get funded.",
    plans = [
        {
            name: "Free Forever",
            badge: "Free Forever",
            monthlyPrice: "$0",
            yearlyPrice: "$0",
            features: [
                "1 trading account workspace",
                "Basic trade journal",
                "Risk calculator",
                "Simple Analytics (win rate, RR, P/L %)",
                "Monthly Analytics summary",
                "Access to the trader community",
                "Limited AI insights (5 per month)"
            ],
            buttonText: "Get Started",
        },
        {
            name: "Pro Plan",
            badge: "Pro Plan",
            monthlyPrice: "$19.99",
            yearlyPrice: "$199.99",
            features: [
                "Everything in FREE",
                "Unlimited Trading accounts",
                "Full Journal with auto insights",
                "AI Trade Reviewer",
                "Prop Firm Mode",
                "Priority Support",
                "20 AI insights per month"
            ],
            buttonText: "Subscribe",
            isPopular: true,
        },
        {
            name: "Elite Plan",
            badge: "Elite Plan",
            monthlyPrice: "$49.99",
            yearlyPrice: "$499.99",
            features: [
                "Everything in PRO",
                "Advanced AI insights (unlimited + pattern recognition)",
                "Smart Growth Planner",
                "Auto Trade Sync (via broker/prop firm)",
                "AI Strategy Coach",
                "Verified Trader Badge",
                "Exclusive trader leaderboard & networking lounge",
                "Priority access to future prop partnership"
            ],
            buttonText: "Subscribe",
        },
    ],
    className = "",
}) {
    const [isAnnually, setIsAnnually] = useState(false);
    return (
        <section className={`py-16 ${className}`}>
            <div className="container mx-auto max-w-6xl">
                <div className="mx-auto flex max-w-7xl flex-col gap-6">
                    <h2 className="text-pretty text-3xl text-center font-bold lg:text-4xl">
                        {title}
                    </h2>
                    <div className="flex flex-col justify-between gap-10 md:flex-row">
                        <p className="text-muted-foreground max-w-3xl lg:text-xl">
                            {description}
                        </p>
                        <div className="bg-muted flex h-11 w-fit shrink-0 items-center rounded-md p-1 text-lg">
                            <RadioGroup
                                defaultValue="monthly"
                                className="h-full grid-cols-2"
                                onValueChange={(value) => {
                                    setIsAnnually(value === "annually");
                                }}
                            >
                                <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                                    <RadioGroupItem
                                        value="monthly"
                                        id="monthly"
                                        className="peer sr-only"
                                    />
                                    <Label
                                        htmlFor="monthly"
                                        className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center px-7 font-semibold"
                                    >
                                        Monthly
                                    </Label>
                                </div>
                                <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                                    <RadioGroupItem
                                        value="annually"
                                        id="annually"
                                        className="peer sr-only"
                                    />
                                    <Label
                                        htmlFor="annually"
                                        className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold"
                                    >
                                        Yearly
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`flex w-full flex-col rounded-lg border p-6 text-left ${plan.isPopular ? "bg-muted" : ""
                                    }`}
                            >
                                <Badge className="mb-8 block w-fit uppercase">
                                    {plan.badge}
                                </Badge>
                                <span className="text-4xl font-medium">
                                    {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                                </span>
                                <p
                                    className={`text-muted-foreground ${plan.monthlyPrice === "$0" ? "invisible" : ""}`}
                                >
                                    {isAnnually ? "Per year" : "Per month"}
                                </p>
                                <Separator className="my-6" />
                                <div className="flex h-full flex-col justify-between gap-20">
                                    <ul className="text-muted-foreground space-y-4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className="flex items-center gap-2"
                                            >
                                                <Check className="size-4" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full">{plan.buttonText}</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};