'use client'

import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Now() {
    return (
        <section id="now" className="py-24 md:py-32 px-8 md:px-12">
            <motion.div
                className="max-w-7xl mx-auto border-l border-white/[0.06] pl-10 md:ml-12"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            >
                <motion.h2
                    variants={fadeUp}
                    className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/30 mb-6"
                >
                    — currently
                </motion.h2>
                <motion.div variants={fadeUp} className="max-w-3xl">
                    <p className="text-2xl md:text-3xl font-headline font-light text-white/90 leading-snug">
                        Building{' '}
                        <span className="italic text-white/50">Lead Link CRM</span> and
                        refining full-stack fundamentals. Focused on distributed systems and
                        micro-interactions.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}
