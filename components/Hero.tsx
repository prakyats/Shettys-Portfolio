'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const PORTRAIT_URL = '/prakyat.png'

const LINES = [
    { type: 'greeting', delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], y: 10 },
    { type: 'firstName', delay: 0.45, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], y: 12 },
    { type: 'lastName', delay: 0.60, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], y: 12 },
    { type: 'phil-1', delay: 1.0, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], y: 8 },
    { type: 'phil-2', delay: 1.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], y: 8 },
    { type: 'phil-3', delay: 1.3, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], y: 8 },
]

function lineAnim(cfg: typeof LINES[0], isMobile: boolean) {
    const mobileDelayMult = 0.55
    const mobileDurMult = 0.75

    return {
        initial: { opacity: 0, y: isMobile ? 0 : cfg.y, x: isMobile ? 24 : 0 },
        animate: { opacity: 1, y: 0, x: 0 },
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
        target: heroRef,
        offset: ['start start', 'end start'],
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 55,
        damping: 30,
        restDelta: 0.001
    })

    // 🔥 CROSSFADE-OPTIMIZED TIMING
    const fadeEnd = 0.22

    const contentOpacity = useTransform(smoothProgress, [0, fadeEnd], [1, 0])
    const contentY = useTransform(smoothProgress, [0, fadeEnd], [0, -120])
    const contentBlur = useTransform(smoothProgress, [0.05, fadeEnd], [0, 4])
    const contentScale = useTransform(smoothProgress, [0, fadeEnd], [1, 0.97])
    const glowOpacity = useTransform(smoothProgress, [0, fadeEnd], [1, 0])

    const portraitY = useTransform(smoothProgress, [0, fadeEnd], [0, -60])
    const portraitScale = useTransform(smoothProgress, [0, fadeEnd], [1, 1.01])

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative h-[120vh] md:h-[130vh] bg-[#05070A]"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-start md:items-center pt-[15vh] md:pt-0">

                {/* Background glow */}
                <motion.div className="absolute right-0 top-0 w-full h-full pointer-events-none" style={{ opacity: glowOpacity }}>
                    <div
                        className="w-full h-full"
                        style={{
                            background: 'radial-gradient(ellipse 55% 60% at 72% 42%, rgba(30,58,138,0.09) 0%, transparent 68%)'
                        }}
                    />
                </motion.div>

                {/* GRID */}
                <div className="absolute inset-0 pointer-events-none opacity-25"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 10%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 10%, transparent 100%)',
                    }}
                />

                <motion.div
                    style={{
                        opacity: contentOpacity,
                        y: contentY,
                        scale: contentScale,
                        filter: useTransform(contentBlur, v => `blur(${v}px)`)
                    }}
                    className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center"
                >

                    {/* LEFT */}
                    <div className="lg:col-span-7 flex flex-col justify-end lg:justify-center">

                        <motion.div {...lineAnim(LINES[0], isMobile)} className="mb-2 md:mb-3">
                            <span className="text-white/75 text-base md:text-xl font-light tracking-[0.1em]">
                                Hey, I'm
                            </span>
                        </motion.div>

                        <div className="mb-8 md:mb-10">
                            <h1 className="font-['Georgia',_serif] leading-[0.8] tracking-[0.035em] flex flex-col"
                                style={{ fontSize: 'clamp(4rem, 13vw, 9rem)' }}>
                                <motion.span {...lineAnim(LINES[1], isMobile)} className="font-bold text-white">
                                    Prakyat
                                </motion.span>
                                <motion.span {...lineAnim(LINES[2], isMobile)} className="font-medium text-white/90">
                                    Shetty
                                </motion.span>
                            </h1>
                        </div>

                        <div className="flex flex-col tracking-wide leading-[1.05]"
                            style={{ fontSize: 'clamp(1.3rem, 4.2vw, 2.8rem)' }}>

                            <motion.div {...lineAnim(LINES[3], isMobile)}>
                                <span className="text-white font-medium">Learning. Building.</span>
                            </motion.div>

                            <motion.div {...lineAnim(LINES[4], isMobile)}>
                                <span className="text-white/85">Getting better</span>
                            </motion.div>

                            <motion.div {...lineAnim(LINES[5], isMobile)}>
                                <span className="text-white/80">every day.</span>
                            </motion.div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(16px)', y: 20 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{ y: portraitY, scale: portraitScale }}
                            className="relative w-full max-w-[600px] aspect-[4/5]"
                        >
                            <img
                                src={PORTRAIT_URL}
                                alt="Prakyat Shetty"
                                className="w-full h-full object-cover"
                                style={{
                                    maskImage: 'linear-gradient(to top, transparent 0%, black 35%, black 100%)',
                                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 35%, black 100%)',
                                }}
                            />
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}