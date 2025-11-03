import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"

export default function Hero({
	heading = "Trade Smarter. Manage Risk. Stay Consistent",
	description = "Your all-in-one trading journal and risk manager built to help you survive prop firms and grow consistently as a trader.",
	imageSrc = "/img/main_hero.png",
	imageAlt = "pip",
}) {
	return (
		<section className="overflow-hidden py-16">
			<div className="container mx-auto">
				<div className="flex flex-col gap-5">
					<div className="relative flex flex-col gap-5">
						<div
							style={{
								transform: "translate(-50%, -50%)",
							}}
							className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:size-[1300px] md:p-32"
						>
							<div className="size-full rounded-full border p-16 md:p-32">
								<div className="size-full rounded-full border"></div>
							</div>
						</div>
						<h1 className="mx-auto max-w-6xl text-center text-3xl font-medium text-balance md:text-6xl">
							{heading}
						</h1>
						<p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg">
							{description}
						</p>
						<div className="flex items-center justify-center gap-3 pt-3 pb-12">
							<Button size="lg" className={`py-6`} asChild>
								<Link href="/app">{`Install App`}</Link>
							</Button>
							<Button size="lg" className={`py-6`} asChild>
								<Link href="/login">{`Get Started Free`}</Link>
							</Button>
						</div>
					</div>
					<Image
						width={1000}
						height={1000}
						src={imageSrc}
						alt={imageAlt}
						className="mx-auto h-auto w-full max-w-5xl rounded-2xl"
					/>
				</div>
			</div>
		</section>
	);
};
