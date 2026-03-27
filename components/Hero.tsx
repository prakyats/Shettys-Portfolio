'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const PORTRAIT_URL = '/prakyat.png'

const LINES = [
    { type: 'greeting', delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], y: 8 },
    { type: 'name', delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], y: 12 },
    { type: 'phil-1', delay: 1.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], y: 8 },
    { type: 'phil-2', delay: 2.1, duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], y: 6 },
]

function lineAnim(cfg: typeof LINES[0], isMobile: boolean) {
    const mobileDelayMult = 0.55
    const mobileDurMult = 0.75

    return {
        initial: { opacity: 0, y: isMobile ? cfg.y * 0.7 : cfg.y },
        animate: { opacity: 1, y: 0 },
        transition: {
            duration: isMobile ? cfg.duration * mobileDurMult : cfg.duration,
            ease: cfg.ease,
            delay: isMobile ? cfg.delay * mobileDelayMult : cfg.delay
        },
    }
}

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    const { scrollYProgress } = useScroll({
        target: heroRef, offset: ['start start', 'end start'],
    })

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 25, restDelta: 0.001 })

    const contentOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0])
    const contentY = useTransform(smoothProgress, [0, 0.35], [0, -180])
    const contentBlur = useTransform(smoothProgress, [0.05, 0.3], [0, 4])
    const contentScale = useTransform(smoothProgress, [0, 0.35], [1, 0.95])
    const glowOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0])

    const portraitY = useTransform(smoothProgress, [0, 0.35], [0, -100])
    const portraitScale = useTransform(smoothProgress, [0, 0.35], [1, 1.01])

    return (
        <section ref={heroRef} id="hero" className="relative h-screen bg-[#05070A]">
            <div className="relative h-full w-full overflow-hidden flex items-center pt-10 md:pt-0">

                {/* Background glow */}
                <motion.div className="absolute right-0 top-0 w-full h-full pointer-events-none" style={{ opacity: glowOpacity }}>
                    <div className="w-full h-full"
                        style={{ background: 'radial-gradient(ellipse 55% 60% at 72% 42%, rgba(30,58,138,0.09) 0%, transparent 68%)' }}
                    />
                </motion.div>

                {/* Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-25"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 10%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 10%, transparent 100%)',
                    }}
                />

                <motion.div
                    style={{ opacity: contentOpacity, y: contentY, scale: contentScale, filter: useTransform(contentBlur, v => `blur(${v}px)`) }}
                    className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-0"
                >

                    {/* LEFT */}
                    <div className="lg:col-span-7 flex flex-col justify-end lg:justify-center pt-8 md:pt-0">

                        <motion.div {...lineAnim(LINES[0], isMobile)} className="mb-3 lg:mb-6">
                            <span className="text-white/50 text-lg md:text-2xl font-light tracking-wide">
                                Hey there, I'm
                            </span>
                        </motion.div>

                        <motion.div {...lineAnim(LINES[1], isMobile)} className="mb-8 lg:mb-14">
                            <h1 className="font-['Georgia',_serif] font-bold leading-[0.95] tracking-[-0.02em] text-white"
                                style={{ fontSize: 'clamp(3.5rem, 12vw, 8.5rem)' }}
                            >
                                Prakyat<br className="hidden sm:block" />
                                <span className="sm:hidden">Shetty</span>
                                <span className="hidden sm:inline">Shetty</span>
                            </h1>
                        </motion.div>

                        <div className="flex flex-col gap-3 lg:gap-2 font-headline tracking-wide" style={{ fontSize: 'clamp(1.2rem, 4vw, 2.5rem)' }}>
                            <motion.div {...lineAnim(LINES[2], isMobile)}>
                                <span className="text-white/80 font-medium">Learning. Building.</span>
                            </motion.div>

                            <motion.div {...lineAnim(LINES[3], isMobile)}>
                                <span className="text-white/50 font-normal">Getting better </span>
                                <span className="text-white/30 font-light block sm:inline">every day.</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-5 relative flex justify-start lg:justify-center items-start lg:items-center h-[38vh] md:h-[50vh] lg:h-[80vh] w-full mt-4 lg:mt-0 xl:-ml-6 lg:-ml-2">
                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(16px)', y: 14, scale: 1.015 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
                            transition={{ duration: isMobile ? 1.8 : 3.0, ease: [0.16, 1, 0.3, 1], delay: isMobile ? 0.1 : 0.25 }}
                            style={{ y: portraitY, scale: portraitScale }}
                            className="relative w-full max-w-[420px] md:max-w-[520px] lg:max-w-[650px] aspect-[4/5]"
                        >

                            <div className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle at 10% 45%, rgba(68, 100, 190, 0.12) 0%, transparent 20%)',
                                    filter: 'blur(60px)',
                                }}
                            />

                            <img
                                src={PORTRAIT_URL}
                                alt="Prakyat Shetty"
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{
                                    maskImage: isMobile
                                        ? 'radial-gradient(ellipse 65% 65% at 50% 55%, black 60%, transparent 100%)'
                                        : 'radial-gradient(ellipse 60% 65% at 55% 55%, black 60%, transparent 100%)',
                                    WebkitMaskImage: isMobile
                                        ? 'radial-gradient(ellipse 65% 65% at 50% 55%, black 60%, transparent 100%)'
                                        : 'radial-gradient(ellipse 60% 65% at 55% 55%, black 60%, transparent 100%)',
                                    filter: 'grayscale(25%) brightness(1) contrast(1.15)',
                                }}
                            />

                            <div className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(255,255,255,0.02) 0%, transparent 20%, transparent 80%, rgba(59,91,177,0.05) 100%)',
                                    maskImage: isMobile
                                        ? 'radial-gradient(ellipse 65% 65% at 50% 55%, black 60%, transparent 100%)'
                                        : 'radial-gradient(ellipse 60% 65% at 55% 55%, black 60%, transparent 100%)',
                                    WebkitMaskImage: isMobile
                                        ? 'radial-gradient(ellipse 65% 65% at 50% 55%, black 60%, transparent 100%)'
                                        : 'radial-gradient(ellipse 60% 65% at 55% 55%, black 60%, transparent 100%)',
                                }}
                            />
                        </motion.div>
                    </div>

                </motion.div>

                <div className="absolute bottom-0 w-full h-32 md:h-48 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, #05070A 0%, transparent 100%)' }}
                />
            </div>
        </section>
    )
}