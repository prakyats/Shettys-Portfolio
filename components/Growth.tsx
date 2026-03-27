'use client'

import { motion } from 'framer-motion'

const phases = [
    {
        label: 'Phase 04 — Current',
        title: 'Cloud Architecture & Scaling',
        desc: 'Deep diving into AWS serverless patterns, Kubernetes orchestration, and Terraform infrastructure as code.',
        active: true,
    },
    {
        label: 'Phase 03',
        title: 'Systems Interface Design',
        desc: 'Studying typography hierarchies, spacing systems, and accessibility-first architecture.',
        active: false,
    },
    {
        label: 'Phase 02',
        title: 'Backend Infrastructure',
        desc: 'Understanding SQL optimization, Redis caching layers, and event-driven architectures.',
        active: false,
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

export default function Growth() {
    return (
        <section
            id="growth"
            className="py-24 md:py-32 px-8 md:px-12"
            style={{ background: 'rgba(8,11,18,0.5)' }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

                {/* Left: heading */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                    className="lg:col-span-5 space-y-6"
                >
                    <motion.h2 variants={fadeUp} className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/30">
                        / Growth
                    </motion.h2>
                    <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-headline font-bold leading-tight text-white/90">
                        Documenting the learning curve.
                    </motion.h3>
                    <motion.p variants={fadeUp} className="text-white/40 text-lg font-light leading-relaxed">
                        Continuous iteration of my technical stack and mental models. Striving for mastery over familiarity.
                    </motion.p>
                </motion.div>

                {/* Right: phase list */}
                <div className="lg:col-span-7 space-y-12">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={phase.title}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: phase.active ? 1 : 0.35, x: 0 }}
                            whileHover={{ opacity: 1 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                            className="group space-y-3 border-l border-white/[0.06] hover:border-white/20 pl-8 transition-colors duration-500"
                        >
                            <span className={`text-[8px] font-mono uppercase tracking-widest ${phase.active ? 'text-white/60' : 'text-white/25'}`}>
                                {phase.label}
                            </span>
                            <h4 className="text-xl font-headline font-bold text-white/85">{phase.title}</h4>
                            <p className="text-white/45 text-sm font-light leading-relaxed">{phase.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
