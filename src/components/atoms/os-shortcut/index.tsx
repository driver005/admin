import React from 'react'
import { osName } from "react-device-detect";

type OSShortcutProps = {
    winModifiers: string | string[]
    macModifiers: string | string[]
    keys: string[] | string
}

const OSShortcut = ({ winModifiers, macModifiers, keys }: OSShortcutProps) => {
    const isMac = osName === "Mac OS"

    let modifiers: string

    if (isMac) {
        if (Array.isArray(macModifiers)) {
            modifiers = macModifiers.join('')
        } else {
            modifiers = macModifiers
        }
    } else {
        if (Array.isArray(winModifiers)) {
            modifiers = winModifiers.join(' + ')
        } else {
            modifiers = winModifiers
        }
    }

    let input: string

    if (Array.isArray(keys)) {
        input = keys.join(' + ')
    } else {
        input = keys
    }

    return (
        <div className="flex items-center text-grey-40">
            <p className="m-0 inter-base-semibold">
                <span className="inter-base-semibold">{modifiers} </span>
                {input}
            </p>
        </div>
    )
}

export default OSShortcut
