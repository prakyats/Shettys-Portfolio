'use client'

import { motion } from 'framer-motion'

const CRM_IMG =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBKc1k74Q1iV7qsJ6H4bbPuvd5I7GcZzKTup3U0XAk1jTw0T4TRsUXvGZb2ITxl92XE5mF3w_Khkd_6f9ZCU9zwQ0yrn8wiz7_9p1cQso30dNlQd2gpjr4NK0d-hLTgY4RF7Xj-HukTjVovRsopIfQFdx5b6mWTbAbxu3we0sQpCbgEbZxgr_ZXh2SCI8wFW8VAY9Ky1nF2hcu7AumSaLqi7HFiPfBXjWzXKLpl5mP3Tgy_sf22RnXJbdBVEmTV2MsWsePIDzi2e5FB'

const PROJ2_IMG =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCZTB31KFlptYPeJ1nlPhkw1VdtyhtCaPGT14cIFJMthRSuLkKPBr6aG0twbxfvCJUZGCFkyN1zxko1Jxrgs7QJBI4GhJxaQv50PZfjCHtaiPbgG9QToaISGPZGN5sWthp1B1W3xMzmcNjmt47Eoajbb3y0k7TQyk-RXujTQ8QSXepcreoVJOfvi4BTaoKJkge1b-uMvdvzCkQw0E0wuGPtKxq7fMbCVdP2KLJTNW3-AoYnA9M7ulUEakGq-3DwFLFqmRRKahM_ve-T'

const PROJ3_IMG =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAjDSOGb2NUGZpGmfkyKYfEOuofMNPhy-RxCCLWxW3GL3ZqglVqdhDBavJacOVn2ijxZ4qRKc9bu8tMnus3RLIgyYFX7IyPlRmOIkwtOBUVQzw0uL-BJYCFOVps9E62ioNNvXCzcV-91CkJ9FTX8VKYvIaiSYolDa8N76lwp0nxfWR10vt3SvYceGJ-2jq6UzmnBuJTHX184G8SmhjRmOV_TgLxEqUx2Z64bdm6CPVtB6Qddw03JfZhIZdCGjjrvtz8kaJjBoeuYBRD'

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 px-8 md:px-12">
            <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">

                {/* Section header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                    className="flex justify-between items-end pb-10 border-b border-white/[0.05]"
                >
                    <div className="space-y-3">
                        <motion.h2 variants={fadeUp} className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/30">
                            / Work
                        </motion.h2>
                        <motion.h3 variants={fadeUp} className="text-4xl font-headline font-bold tracking-tight text-white/90">
                            Featured Projects
                        </motion.h3>
                    </div>
                </motion.div>

                {/* ── Featured project ── */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
                    className="group grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center"
                >
                    {/* Text */}
                    <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
                        <motion.div variants={fadeUp} className="space-y-5">
                            <div className="flex items-center gap-4">
                                <h4 className="text-3xl font-headline font-bold text-white/90">Lead Link CRM</h4>
                                <span className="w-8 h-[1px] bg-white/15" />
                                <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">2024</span>
                            </div>
                            <p className="text-white/50 leading-relaxed text-lg font-light max-w-xl">
                                A high-performance CRM for high-volume sales teams. Focused on
                                real-time data sync and modular architecture. Striving for
                                zero-latency operations.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-6 items-center">
                            <div className="flex gap-4">
                                {['React', 'Node.js', 'PostgreSQL'].map((t) => (
                                    <span key={t} className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a
                                href="#"
                                className="group/link inline-flex items-center gap-3 text-[10px] font-headline font-bold uppercase tracking-widest text-white/60 hover:text-white/90 transition-colors duration-300"
                            >
                                Read Case Study
                                <span className="text-white/30 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div variants={fadeUp} className="lg:col-span-5 order-1 lg:order-2">
                        <div className="aspect-[4/3] overflow-hidden bg-[#0a0d14]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={CRM_IMG}
                                alt="Lead Link CRM"
                                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Project grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {[
                        {
                            title: 'Neural Schema',
                            year: '2023',
                            desc: 'Automated database schema generation using transformer models. Mapping relational structures to graph databases.',
                            tags: ['Python', 'TensorFlow'],
                            img: PROJ2_IMG,
                        },
                        {
                            title: 'Sentinel Auth',
                            year: '2023',
                            desc: 'Zero-trust authentication framework designed for edge computing. Biometric integration with low-latency.',
                            tags: ['Rust', 'Wasm'],
                            img: PROJ3_IMG,
                        },
                    ].map((proj) => (
                        <motion.div
                            key={proj.title}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                            className="group space-y-6 cursor-default"
                        >
                            <div className="aspect-video bg-[#0a0d14] overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={proj.img}
                                    alt={proj.title}
                                    className="w-full h-full object-cover grayscale opacity-35 group-hover:opacity-75 group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-600"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-baseline">
                                    <h5 className="text-xl font-headline font-bold text-white/85">{proj.title}</h5>
                                    <span className="text-[9px] font-mono text-white/25 uppercase tracking-widest">{proj.year}</span>
                                </div>
                                <p className="text-white/45 text-sm leading-relaxed font-light">{proj.desc}</p>
                                <div className="flex gap-3 pt-1">
                                    {proj.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[8px] font-mono text-white/30 uppercase tracking-widest border border-white/[0.08] px-2 py-0.5"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
