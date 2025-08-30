import Footer from "@/components/publicComponents/Footer"
import Header from "@/components/publicComponents/Header"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}