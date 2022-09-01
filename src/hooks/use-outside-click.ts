import { useEffect } from 'react'

const useOutsideClick = (callback: () => void, ref: any) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback()
            }
        }
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside)
        }, 500)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref])
}

export default useOutsideClick
