'use client'

import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const socials = [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
]

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-32 md:py-48 px-8 md:px-12 border-t border-white/[0.04]"
        >
            <motion.div
                className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-14"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
            >
                {/* Ghost background text */}
                <motion.h2
                    variants={fadeUp}
                    className="text-5xl sm:text-7xl md:text-9xl font-headline font-bold uppercase tracking-tighter select-none pointer-events-none"
                    style={{ color: 'rgba(255,255,255,0.04)' }}
                >
                    GET_IN_TOUCH
                </motion.h2>

                {/* Main content */}
                <motion.div variants={fadeUp} className="space-y-7 -mt-4">
                    <p className="text-2xl text-white/45 font-light">
                        Let's talk about systems, products, or photography.
                    </p>
                    <a
                        href="mailto:hello@algorithmic.identity"
                        className="inline-block text-xl md:text-2xl font-headline font-bold text-white/80 hover:text-white transition-colors duration-300"
                    >
                        hello@algorithmic.identity
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-10 pt-4">
                    {socials.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/25 hover:text-white/70 transition-colors duration-300"
                        >
                            {label}
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
