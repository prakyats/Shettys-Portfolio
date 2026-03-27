'use client'

import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const interests = ['UI/UX Design', 'Street Photography', 'Open Source', 'Mentorship']

export default function Beyond() {
    return (
        <section id="beyond" className="py-24 md:py-32 px-8 md:px-12">
            <motion.div
                className="max-w-3xl mx-auto space-y-20"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            >
                {/* Header */}
                <div className="space-y-8">
                    <motion.h2 variants={fadeUp} className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/30">
                        / Perspective
                    </motion.h2>
                    <motion.h3 variants={fadeUp} className="text-4xl font-headline font-bold text-white/90">
                        Beyond Building
                    </motion.h3>
                    <motion.p variants={fadeUp} className="text-xl font-light text-white/55 leading-relaxed">
                        I believe the best engineers are those who understand the human systems they build for.
                    </motion.p>
                </div>

                {/* Content blocks */}
                <div className="space-y-14">
                    <motion.div variants={fadeUp} className="space-y-3">
                        <h4 className="text-[9px] font-mono uppercase tracking-widest text-white/30">Leadership</h4>
                        <p className="text-white/50 leading-relaxed font-light">
                            Serving as College President, managing community initiatives and bridging communication
                            between 2,000+ students and faculty. Focus on empathy-driven administration.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="space-y-3">
                        <h4 className="text-[9px] font-mono uppercase tracking-widest text-white/30">Creative Interests</h4>
                        <p className="text-white/50 leading-relaxed font-light">
                            Exploring urban geometry and street lighting through photography. Finding patterns
                            in the chaos of city life.
                        </p>
                    </motion.div>
                </div>

                {/* Tags */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-x-8 gap-y-3">
                    {interests.map((item) => (
                        <span key={item} className="text-[9px] font-mono uppercase tracking-widest text-white/20">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
