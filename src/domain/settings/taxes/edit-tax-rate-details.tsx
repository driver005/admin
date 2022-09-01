import React from 'react'
import Input from '../../../components/molecules/input'

interface EditTaxRateDetails {
    lockName: any
    register: any
}

export const EditTaxRateDetails: React.FC<EditTaxRateDetails> = ({ lockName, register }) => {
    return (
        <div>
            <p className="inter-base-semibold mb-base">Details</p>
            <Input
                disabled={lockName}
                label="Name"
                placeholder={lockName ? 'Default' : 'Rate name'}
                {...register('name', { required: !lockName })}
                className="mb-base min-w-[335px] w-full"
            />
            <Input
                type="number"
                min={0}
                max={100}
                step={0.01}
                label="Rate"
                placeholder="12"
                {...register('rate', { min: 0, max: 100, required: true })}
                className="mb-base min-w-[335px] w-full"
            />
            <Input
                placeholder="1000"
                name="code"
                label="Code"
                {...register('code', { required: true })}
                className="mb-base min-w-[335px] w-full"
            />
        </div>
    )
}
