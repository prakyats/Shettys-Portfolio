'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [visible, setVisible] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.4   // 40vh — perfectly timed as Hero exits

            if (window.scrollY > threshold) {
                // Small additional delay so navbar never "races" the hero fade
                if (!timerRef.current) {
                    timerRef.current = setTimeout(() => setVisible(true), 250)
                }
            } else {
                if (timerRef.current) {
                    clearTimeout(timerRef.current)
                    timerRef.current = null
                }
                setVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    key="navbar"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed top-0 w-full z-50 bg-[#05070A]/65 backdrop-blur-xl border-b border-white/[0.05]"
                >
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 md:px-12 h-20">
                        {/* Logo */}
                        <div className="text-[10px] font-bold tracking-[0.35em] text-white/70 font-headline uppercase">
                            PRAKYAT'S PORTFOLIO
                        </div>

                        {/* Nav links */}
                        <div className="hidden md:flex items-center gap-12 font-headline text-[9px] uppercase tracking-widest text-white/35">
                            <a href="#now"     className="hover:text-white/80 transition-colors duration-400">Now</a>
                            <a href="#projects" className="hover:text-white/80 transition-colors duration-400">Work</a>
                            <a href="#growth"  className="hover:text-white/80 transition-colors duration-400">Growth</a>
                            <a href="#beyond"  className="hover:text-white/80 transition-colors duration-400">Beyond</a>
                        </div>

                        {/* Resume */}
                        <button className="border border-white/12 text-white/40 px-5 py-2 text-[9px] uppercase tracking-widest font-medium hover:border-white/35 hover:text-white/80 transition-all duration-500">
                            Resume
                        </button>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}
