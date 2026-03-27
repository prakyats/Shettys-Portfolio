'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Now() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 90%', 'start 40%'],
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const y = useTransform(scrollYProgress, [0, 1], [40, 0])

    return (
        <motion.section
            ref={ref}
            style={{ opacity, y }}
            className="relative -mt-[14vh] md:-mt-[18vh] pt-[20vh] pb-24 md:pb-32 px-8 md:px-12"
        >

            {/* 🔥 TOP GLOW BRIDGE */}
            <div className="absolute top-0 left-0 w-full h-32 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(60,100,220,0.12), transparent 80%)',
                    filter: 'blur(20px)'
                }}
            />

            <div className="max-w-7xl mx-auto border-l border-white/[0.06] pl-10 md:ml-12">

                <h2 className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/30 mb-6">
                    — currently
                </h2>

                <p className="text-2xl md:text-3xl text-white/90 leading-snug max-w-3xl">
                    Building <span className="italic text-white/50">Lead Link CRM</span> and
                    refining full-stack fundamentals. Focused on distributed systems and
                    micro-interactions.
                </p>

            </div>
        </motion.section>
    )
}