export default function Footer() {
    return (
        <footer className="w-full py-12 border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/15">
                    © 2025 ALGORITHMIC_IDENTITY. All Rights Reserved.
                </p>
                <div className="flex gap-10 font-mono text-[8px] uppercase tracking-[0.4em] text-white/15">
                    {['Source', 'Archive', 'Status'].map((l) => (
                        <a key={l} href="#" className="hover:text-white/50 transition-colors duration-300">
                            {l}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
