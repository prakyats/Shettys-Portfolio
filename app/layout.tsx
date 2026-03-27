import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['300', '400', '500', '600'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Prakyat's Portfolio",
    description:
        'CS undergrad architecting systems from the ground up. Building tools for people with focus on performance and minimal complexity.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${spaceGrotesk.variable} ${inter.variable} font-body`}>
                {children}
            </body>
        </html>
    )
}
