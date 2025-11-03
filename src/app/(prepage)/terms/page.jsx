export const metadata = {
    title: "Terms & Condition | TDBase",
    description: "Review the official terms and condition governing your use of TDBase. Understand your rights, data usage and responsibilities when accessing out trading tools and community."
}

export default function TermsPage() {
    return (
        <div className="py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h1 className="text-base/7 font-semibold text-gray-500">Terms</h1>
                    <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        📜 Terms and Conditions
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl text-lg flex flex-col gap-3">
                    <p>Last updated: October 2025</p>
                    <p>Welcome to TraderOS</p>
                    <p>By accessing or using this web app, you agree to comply with and be bound by these Terms and Conditions (“Terms”).
                        If you do not agree with any part of these Terms, please do not use the App.</p>

                    <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
                    <p>By using this App, you confirm that you are at least 18 years old (or have legal guardian consent) and capable of entering into a binding agreement.
                        These Terms apply to all visitors, users, and others who access or use the App.</p>

                    <h2 className="text-2xl font-semibold">2. Description of Service</h2>
                    <p>TraderOS provides traders with digital tools to:</p>
                    <ul className="pl-5 flex flex-col gap-y-2">
                        <li className="list-style-disc">Log and track trades across multiple accounts.</li>
                        <li className="list-style-disc">Manage risk and position sizing.</li>
                        <li className="list-style-disc">Gain AI-based insights into trading performance.</li>
                        <li className="list-style-disc">Monitor trading rules and consistency.</li>
                    </ul>
                    <p>
                        The App is intended for educational and analytical purposes only. It does not provide financial advice, investment recommendations, or trade execution services.
                    </p>

                    <h2 className="text-2xl font-semibold">3. Account Registration</h2>
                    <p>To access some features, you must create an account using accurate and complete information.
                        You are responsible for safeguarding your login credentials and for all activities that occur under your account.
                        We are not liable for loss or damage arising from unauthorized access to your account.</p>

                    <p className="text-2xl">4. Free and Paid Plans</p>
                    <ul className="pl-5 flex flex-col gap-y-1 list-style-disc">
                        <li className="list-style-disc">We offer both free and paid subscription tiers.</li>
                        <li className="list-style-disc">Paid plans may include advanced analytics, AI insights, and multi-account tracking.</li>
                        <li className="list-style-disc">Subscription fees are billed according to your chosen plan and renewal cycle.</li>
                        <li className="list-style-disc">No refunds will be issued for partially used subscription periods unless required by law.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">5. User Content</h2>
                    <p>You may upload trade data, screenshots, or journal entries.
                        By doing so, you grant us a non-exclusive, royalty-free, and revocable license to store, process, and display your content solely for providing the service.
                        You remain the owner of your content.</p>
                    <p>Do not upload or share:</p>
                    <ul className="pl-5 flex flex-col gap-y-1">
                        <li className="list-style-disc">Offensive, harmful, or illegal material.</li>
                        <li className="list-style-disc">Content that violates the rights of others.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">6. Users' Data</h2>
                    <ul className="pl-5 flex flex-col gap-y-1">
                        <li className="list-style-disc">Your data is processed according to our Privacy Policy.</li>
                        <li className="list-style-disc">We store trade data securely and do not sell your personal information.</li>
                        <li className="list-style-disc">You can request data deletion at any time by contacting support at <a href="mailto:mail@traderos.com">mail@traderos.com</a></li>
                    </ul>

                    <h2 className="text-2xl font-semibold">7. Financial Disclaimer</h2>
                    <p>TraderOS is not a broker or financial advisor.</p>
                    <p>All analytics, metrics, or AI insights are provided for informational purposes only and should not be considered investment advice.
                        You are solely responsible for any trading decisions or financial outcomes.</p>

                    <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
                    <p>We do our best to maintain accurate data and reliable uptime.
                        However, the App is provided on an “as is” and “as available” basis.</p>
                    <p>We are not liable for:</p>
                    <ul className="pl-5 flex flex-col gap-y-1">
                        <li className="list-style-disc">Any losses arising from trading decisions</li>
                        <li className="list-style-disc">Service interruptions, data loss, or third-party issues</li>
                        <li className="list-style-disc">Errors or inaccuracies in analysis tools or insights.</li>
                    </ul>
                    <p>Use the App at your own risk.</p>

                    <h2 className="text-2xl font-semibold">9. Modifications to Service or Terms</h2>
                    <p>
                        We may update, modify, or discontinue parts of the App at any time.
                        We may also revise these Terms when needed — updates will be reflected here with a new “Last Updated” date.
                        Continued use of the App after changes means you accept the revised Terms.
                    </p>

                    <h2 className="text-2xl font-semibold">10. Termination</h2>
                    <p>We may suspend or terminate your account for violating these Terms or for misuse of the App.
                        Upon termination, your right to use the App ends immediately. You may export your data before deletion.</p>

                    <h2 className="text-2xl font-semibold">11. Contact</h2>
                    <p>For any questions, feedback, or support, contact us at: <a href="malto:mail@traderos.com">malto:mail@traderos.com</a></p>
                </div>
            </div>
        </div>
    )
}