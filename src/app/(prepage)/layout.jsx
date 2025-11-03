import Header from "@/components/root/header"
import Footer from "@/components/root/footer"

export default function PrepageLayout({ children }) {
    return (
        <>
            <Header />
            <div className="py-3">
                {children}
            </div>
            <Footer />
        </>
    )
}