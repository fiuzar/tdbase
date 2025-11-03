export const metadata = {
    title: "Terms & Conditions | TDBase",
    description: "Your privacy matters. Learn how we collect, protect and use your data within our app, ensuring complete transparency and control for all users."
}

export default function PrivacyPolicyPage() {
    return (
        <div className="py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h1 className="text-base/7 font-semibold text-gray-500">Terms</h1>
                    <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        Privacy Policy
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl text-lg flex flex-col gap-3">
                    <p>Last updated: October 2025</p>
                    <p>Welcome to TraderOS</p>
                    <p>This Privacy Policy explains how we collect, use, and protect your information when you use our web application (“the App”).
                        By using the App, you consent to the practices described in this Policy.</p>

                    <h2 className="text-2xl font-semibold"> 1. Information We Collect</h2>
                    <p>We collect only the data necessary to provide and improve the App:</p>

                    <h3 className="text-xl">a. Account Information</h3>
                    <p>When you create an account, we collect:</p>

                    <ul className="pl-5 flex flex-col gap-y-2 list-style-disc">
                        <li className="list-style-disc">Your full name</li>
                        <li className="list-style-disc">Email address</li>
                        <li className="list-style-disc">Password (securely hashed)</li>
                    </ul>

                    <h3 className="text-xl">b. Trading Data</h3>
                    <p>If you use the journaling or risk management features, we collect:</p>

                    <ul className="pl-5 flex flex-col gap-y-2">
                        <li className="list-style-disc">Trade details (pair, entry, exit, profit/loss, screenshots, etc.)</li>
                        <li className="list-style-disc">Custom account rules or trading goals</li>
                        <li className="list-style-disc">Device & Usage Data</li>
                    </ul>

                    <h3 className="text-xl">b. Trading Data</h3>
                    <p>If you use the journaling or risk management features, we collect:</p>

                    <ul className="pl-5 flex flex-col gap-y-2">
                        <li className="list-style-disc">Trade details (pair, entry, exit, profit/loss, screenshots, etc.)</li>
                        <li className="list-style-disc">Custom account rules or trading goals</li>
                        <li className="list-style-disc">Device & Usage Data</li>
                    </ul>

                    <p>c. We automatically collect limited technical data such as:</p>
                    <ul className="pl-5 flex flex-col gap-y-2">
                        <li className="list-style-disc">Browser type, device model, and operating system</li>
                        <li className="list-style-disc"></li>
                        <li className="list-style-disc">Cookies (to maintain login sessions and preferences)</li>
                    </ul>

                    <h3 className="text-xl">Payment Data (for Paid Plans)</h3>
                    <p>Payments are processed through secure third-party providers (like Stripe, Paystack, or Paddle).
                        We do not store your credit/debit card information on our servers.</p>

                    <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="pl-5 flex flex-col gap-y-2">
                        <li className="list-style-disc">Provide, personalize, and improve the App experience</li>
                        <li className="list-style-disc">Securely store and display your trade journal and insights</li>
                        <li className="list-style-disc">Respond to user feedback or support requests</li>
                        <li className="list-style-disc">Send relevant updates, product information, or account alerts</li>
                        <li className="list-style-disc">Monitor usage patterns to enhance app performance</li>
                    </ul>
                    <p>
                        We do not sell, rent, or trade your personal data to third parties.
                    </p>

                    <h2 className="text-2xl font-semibold">3. Data Storage & Security</h2>
                    <ul className="pl-5 flex flex-col gap-y-1">
                        <li className="list-style-disc">All user data is stored securely in encrypted databases.</li>
                        <li className="list-style-disc">Passwords are stored using strong hashing algorithms (bcrypt).</li>
                        <li className="list-style-disc">We use HTTPS across all connections to ensure end - to - end data security.</li>
                        <li className="list-style-disc">You can delete your account and all associated data at any time by contacting <a href="mailto:mail@traderos.com">mailto:mail@traderos.com</a></li>
                    </ul>

                    <h2 className="text-2xl">4. Cookies and Tracking</h2>
                    <p>We use cookies only to:</p>
                    <ul className="pl-5 flex flex-col gap-y-1">
                        <li className="list-style-disc">Keep you logged in</li>
                        <li className="list-style-disc">Remember preferences(like dark / light mode)</li>
                        <li className="list-style-disc">Collect anonymous usage statistics(via Google Analytics or similar)</li>
                        <li className="list-style-disc">No refunds will be issued for partially used subscription periods unless required by law.</li>
                    </ul>
                    <p>You can disable cookies in your browser, but some features of the App may not function properly.</p>

                    <h2 className="text-2xl">Third - Party Services</h2>
                    <p>We may use trusted third - party services to operate the App, such as:</p>
                    <ul className="pl-5 flex flex-col gap-y-1">
                        <li className="list-style-disc">Analytics: Google Analytics or Vercel Analytics(to track engagement)</li>
                        <li className="list-style-disc">Payments: Stripe, Paystack, or Paddle(to process subscriptions securely)</li>
                        <li className="list-style-disc">Hosting: Vercel(for web hosting and CDN delivery)</li>
                    </ul>
                    <p>Each third party has its own privacy practices, we encourage you to review their policies.</p>


                    <h2 className="text-2xl font-semibold">6. Data Retention</h2>
                    <p>We retain user data only as long as needed to provide the service.
                        When you delete your account, your data and all associated logs are permanently erased from our active systems within 30 days.
                    </p>

                    <h2 className="text-2xl font-semibold">7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="pl-5 flex flex-col gap-y-1">
                        <li className="list-style-disc">Access your data</li>
                        <li className="list-style-disc">Request correction or deletion</li>
                        <li className="list-style-disc">Withdraw consent to data processing.</li>
                        <li className="list-style-disc">Export your trade logs and analytics</li>
                    </ul>
                    <p>Contact us at: <a href="malto:mail@traderos.com">malto:mail@traderos.com</a> to exercise any of these rights.</p>

                    <h2 className="text-2xl font-semibold">8. Children’s Privacy</h2>
                    <p>Our App is not intended for individuals under 18 years old.
                        We do not knowingly collect data from minors.If you believe a minor has provided us with personal data, please contact us for removal.</p>
                    <p>We are not liable for:</p>
                    <ul className="pl-5 flex flex-col gap-y-1">
                        <li className="list-style-disc">Any losses arising from trading decisions</li>
                        <li className="list-style-disc">Service interruptions, data loss, or third-party issues</li>
                        <li className="list-style-disc">Errors or inaccuracies in analysis tools or insights.</li>
                    </ul>
                    <p>Use the App at your own risk.</p>

                    <h2 className="text-2xl font-semibold">9. Updates to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time.
                        When we make changes, we will update the “Last Updated” date and notify you(via email or banner) if the changes are significant.
                    </p>

                    <h2 className="text-2xl font-semibold">10. Contact</h2>
                    <p>For any questions, feedback, or support, contact us at: <a href="malto:mail@traderos.com">malto:mail@traderos.com</a></p>
                </div>
            </div>
        </div>
    )
}