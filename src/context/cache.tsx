import React, { useState } from 'react'

interface CacheContextInterface {
    cache: Object
    setCache?: any
}

export const defaultCacheContext = {
    cache: {},
}

export const CacheContext =
    React.createContext<CacheContextInterface>(defaultCacheContext)

export const CacheProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cache, set] = useState({})

    const setCache = (key: any, val: any) => {
        set({
            ...cache,
            [key]: val,
        })
    }

    return (
        <CacheContext.Provider
            value={{
                cache,
                setCache,
            }}
        >
            {children}
        </CacheContext.Provider>
    )
}
