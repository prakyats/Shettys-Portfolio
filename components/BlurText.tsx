'use client'

import { motion } from 'framer-motion'

type Props = {
    text: string
    delay?: number
    duration?: number
    className?: string
    animateBy?: 'words' | 'letters'
    direction?: 'top' | 'bottom'
    onAnimationComplete?: () => void
}

export default function BlurText({
    text,
    delay = 0,
    duration = 1,
    className = '',
    animateBy = 'words',
    direction = 'top',
    onAnimationComplete,
}: Props) {
    const items =
        animateBy === 'words' ? text.split(' ') : text.split('')

    const yValue = direction === 'top' ? 20 : -20

    return (
        <span className={`inline-block ${className}`}>
            {items.map((item, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: 'blur(8px)', y: yValue }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{
                        delay: delay / 1000 + i * 0.06,
                        duration: duration,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    onAnimationComplete={
                        i === items.length - 1 ? onAnimationComplete : undefined
                    }
                    className="inline-block mr-[0.25em]"
                >
                    {item}
                </motion.span>
            ))}
        </span>
    )
}