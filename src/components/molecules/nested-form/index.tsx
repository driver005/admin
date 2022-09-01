import React from 'react'
import { useFormContext } from 'react-hook-form'

const ConnectForm: React.FC<{ children: any }> = ({ children }) => {
    const methods = useFormContext()

    return children({ ...methods })
}

export default ConnectForm
