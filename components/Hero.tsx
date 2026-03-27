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
            <div className="relative h-full w-full overflow-hidden flex items-start md:items-center pt-[15vh] md:pt-0">

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
                    <div className="lg:col-span-7 flex flex-col justify-end lg:justify-center pt-0 md:pt-0">

                        <motion.div
                            {...lineAnim(LINES[0], isMobile)}
                            className="mb-2 md:mb-3 z-10 relative saturate-0 translate-y-3 md:translate-y-4"
                        >
                            <span className="text-white/75 text-base md:text-xl font-light tracking-[0.1em] leading-none block">
                                Hey, I'm
                            </span>
                        </motion.div>

                        <div className="mb-6 md:mb-8 lg:mb-10 relative z-0">
                            <h1 className="font-['Georgia',_serif] leading-[0.8] tracking-[0.035em] flex flex-col"
                                style={{ fontSize: 'clamp(4rem, 13vw, 9rem)' }}
                            >
                                <motion.span {...lineAnim(LINES[1], isMobile)} className="font-bold text-white drop-shadow-sm">
                                    Prakyat
                                </motion.span>
                                <motion.span {...lineAnim(LINES[2], isMobile)} className="font-medium text-[rgba(255,255,255,0.96)]">
                                    Shetty
                                </motion.span>
                            </h1>
                        </div>

                        <div className="flex flex-col font-headline tracking-wide leading-[1.05]" style={{ fontSize: 'clamp(1.3rem, 4.2vw, 2.8rem)' }}>
                            <motion.div {...lineAnim(LINES[3], isMobile)} className="mb-[-2px] md:mb-[-6px]">
                                <span className="text-white font-medium">Learning. Building.</span>
                            </motion.div>

                            <motion.div {...lineAnim(LINES[4], isMobile)}>
                                <span className="text-[rgba(255,255,255,0.85)] font-normal">Getting better</span>
                            </motion.div>

                            <motion.div {...lineAnim(LINES[5], isMobile)}>
                                <span className="text-[rgba(255,255,255,0.76)] font-light">every day.</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-5 relative flex justify-start lg:justify-center items-start lg:items-center h-auto md:h-[50vh] lg:h-[80vh] w-full mt-2 lg:mt-0 xl:-ml-6 lg:-ml-2">
                        <motion.div
                            initial={isMobile
                                ? { opacity: 0, filter: 'blur(16px)', x: -24, y: 0, scale: 1.015 }
                                : { opacity: 0, filter: 'blur(16px)', x: 0, y: 14, scale: 1.015 }
                            }
                            animate={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0, scale: 1 }}
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
                                    // Fades the image strictly from the bottom edge upwards in a flat, square line
                                    // Binds exclusively to the transparent boundaries of the PNG
                                    maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 15%, black 40%, black 100%)',
                                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 15%, black 40%, black 100%)',
                                    filter: 'grayscale(25%) brightness(1) contrast(1.15)',
                                }}
                            />
                        </motion.div>
                    </div>

                </motion.div>

                {/* Fading bottom glow tied directly to scroll state! */}
                <motion.div style={{ opacity: glowOpacity }} className="absolute bottom-0 left-0 w-full h-[50vh] pointer-events-none">
                    {/* Layer 1 — Base dark fade (renders behind everything) */}
                    <div
                        className="absolute inset-x-0 bottom-0 h-full"
                        style={{
                            background: 'linear-gradient(to top, rgba(5,7,10,1) 5%, rgba(5,7,10,0.9) 30%, rgba(5,7,10,0.4) 60%, transparent 100%)',
                        }}
                    />
                    {/* Layer 2 — Mid dark-blue haze in lowest third */}
                    <div
                        className="absolute inset-x-0 bottom-0 h-1/3"
                        style={{
                            background: 'linear-gradient(to top, rgba(10, 18, 45, 0.5) 0%, transparent 100%)',
                        }}
                    />
                    {/* Layer 3 — Atmospheric glow (renders on top so it isn't hidden) */}
                    <div
                        className="absolute inset-x-0 bottom-0 h-[60%]"
                        style={{
                            background: 'radial-gradient(ellipse 100% 70% at 50% 100%, rgba(60, 100, 220, 0.35) 0%, rgba(40, 70, 180, 0.12) 45%, transparent 75%)',
                            filter: 'blur(20px)',
                            mixBlendMode: 'screen',
                        }}
                    />
                </motion.div>
            </div>
        </section>
    )
}