import React, { useState } from 'react'

type useScrollProps = {
    threshold?: number
}

export const useScroll = ({ threshold = 0 }: useScrollProps) => {
    const [isScrolled, setIsScrolled] = useState(false)

    const scrollListener = (e: React.UIEvent<HTMLDivElement>) => {
        const currentScrollY = e.currentTarget.scrollTop
        if (currentScrollY > threshold) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    return { isScrolled, scrollListener }
}
