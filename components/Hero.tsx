'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const PORTRAIT_URL = '/prakyat.png'

// Per-line custom timing for the new hierarchy
const LINES = [
    // 1. Greeting — slight delay (intro silence), soft entry
    {
        type: 'greeting',
        delay: 0.4,
        duration: 1.0,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        y: 8,
    },
    // 2. Name — main moment, appears confidently
    {
        type: 'name',
        delay: 0.9,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        y: 12,
    },
    // 3. Phil 1 — short pause after name, then appears
    {
        type: 'phil-1',
        delay: 1.8,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        y: 8,
    },
    // 4. Phil 2 — final conclusion line
    {
        type: 'phil-2',
        delay: 2.1,
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        y: 6,
    },
]

function lineAnim(cfg: typeof LINES[0]) {
    return {
        initial: { opacity: 0, y: cfg.y },
        animate: { opacity: 1, y: 0 },
        transition: { duration: cfg.duration, ease: cfg.ease, delay: cfg.delay },
    }
}

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 25, restDelta: 0.001 })

    // Scroll dissolve: faster fade + sharper lift + shorter blur
    const contentOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0])
    const contentY       = useTransform(smoothProgress, [0, 0.35], [0, -180]) // steep drop/lift
    const contentBlur    = useTransform(smoothProgress, [0.05, 0.3], [0, 4])  // minimal blur
    const contentScale   = useTransform(smoothProgress, [0, 0.35], [1, 0.95])

    // Background glow dims faster
    const glowOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0])

    // Portrait drifts away quickly rather than lingering
    const portraitY     = useTransform(smoothProgress, [0, 0.35], [0, -100])
    const portraitScale = useTransform(smoothProgress, [0, 0.35], [1, 1.01])

    return (
        <section ref={heroRef} id="hero" className="relative h-screen bg-[#05070A]">

            {/* Viewport frame */}
            <div className="relative h-full w-full overflow-hidden flex items-center">

                {/* Background radial glow */}
                <motion.div
                    className="absolute right-0 top-0 w-full h-full pointer-events-none"
                    style={{ opacity: glowOpacity }}
                >
                    <div
                        className="w-full h-full"
                        style={{
                            background:
                                'radial-gradient(ellipse 55% 60% at 72% 42%, rgba(30,58,138,0.09) 0%, transparent 68%)',
                        }}
                    />
                </motion.div>

                {/* Faint grid texture */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        opacity: 0.25,
                        maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 10%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 10%, transparent 100%)',
                    }}
                />

                {/* Scroll-dissolve wrapper */}
                <motion.div
                    style={{
                        opacity: contentOpacity,
                        y: contentY,
                        scale: contentScale,
                        filter: useTransform(contentBlur, v => `blur(${v}px)`),
                    }}
                    className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-0"
                >
                    {/* LEFT: Text Content - Identity first, philosophy second */}
                    <div className="lg:col-span-7 flex flex-col justify-center">

                        {/* Greeting — small, soft entry */}
                        <motion.div {...lineAnim(LINES[0])} className="mb-6">
                            <span className="text-white/50 text-xl md:text-2xl font-light tracking-wide">
                                Hey there, I'm
                            </span>
                        </motion.div>

                        {/* Name — Primary Visual Anchor, aligns centrally with face */}
                        <motion.div {...lineAnim(LINES[1])} className="mb-14">
                            <h1
                                className="font-['Georgia',_serif] font-bold leading-[0.9] tracking-[-0.02em] text-white"
                                style={{ fontSize: 'clamp(4rem, 9.5vw, 8.5rem)' }}
                            >
                                Prakyat<br/>Shetty
                            </h1>
                        </motion.div>

                        {/* Philosophy — Secondary, smaller, split lines */}
                        <div className="flex flex-col gap-2 font-headline tracking-wide" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
                            <motion.div {...lineAnim(LINES[2])}>
                                <span className="text-white/80 font-medium">Learning. Building.</span>
                            </motion.div>
                            
                            <motion.div {...lineAnim(LINES[3])}>
                                <span className="text-white/50 font-normal">Getting better </span>
                                <span className="text-white/30 font-light">every day.</span>
                            </motion.div>
                        </div>

                    </div>

                    {/* RIGHT: Portrait */}
                    <div className="lg:col-span-5 relative flex justify-end lg:justify-center items-center h-[50vh] lg:h-[80vh]">
                        <motion.div
                            // Floating physical presence
                            initial={{ opacity: 0, filter: 'blur(20px)', y: 14, scale: 1.015 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
                            transition={{ duration: 3.0, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                            style={{ y: portraitY, scale: portraitScale }}
                            className="relative w-full max-w-[420px] aspect-[8/9]"
                        >
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        'radial-gradient(circle at 50% 45%, rgba(68, 100, 190, 0.12) 0%, transparent 65%)',
                                    filter: 'blur(60px)',
                                }}
                            />

                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={PORTRAIT_URL}
                                alt="Prakyat Shetty"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                style={{
                                    maskImage:
                                        'radial-gradient(ellipse 85% 75% at 50% 50%, black 45%, rgba(0,0,0,0.5) 75%, transparent 95%)',
                                    WebkitMaskImage:
                                        'radial-gradient(ellipse 85% 75% at 50% 50%, black 45%, rgba(0,0,0,0.5) 75%, transparent 95%)',
                                    filter: 'grayscale(35%) brightness(0.95) contrast(1.15)',
                                    mixBlendMode: 'normal',
                                }}
                            />
                            
                            {/* Subtle side ambient light over the image for 3D depth */}
                            <div 
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(255,255,255,0.02) 0%, transparent 20%, transparent 80%, rgba(59,91,177,0.05) 100%)',
                                    maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, black 45%, rgba(0,0,0,0.5) 75%, transparent 95%)',
                                    WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, black 45%, rgba(0,0,0,0.5) 75%, transparent 95%)',
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom scene fade */}
                <div
                    className="absolute bottom-0 w-full h-48 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, #05070A 0%, transparent 100%)' }}
                />
            </div>
        </section>
    )
}
