import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Now from '@/components/Now'
import Projects from '@/components/Projects'
import Growth from '@/components/Growth'
import Beyond from '@/components/Beyond'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="bg-[#05070A] text-white">
            <Navbar />
            <Hero />
            <Now />
            <Projects />
            <Growth />
            <Beyond />
            <Contact />
            <Footer />
        </main>
    )
}
