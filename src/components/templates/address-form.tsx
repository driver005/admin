import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { countries } from '../../utils/countries'
import Input from '../molecules/input'
import Select from '../molecules/select'

const AddressForm = ({
    form = {},
    country,
    allowedCountries,
    type = 'address',
    openMenuOnFocus = true,
}: any) => {
    const countryOptions: any = countries
        .map((c) => {
            if (allowedCountries) {
                const clean = allowedCountries.map((c: any) => c.toLowerCase())
                if (clean.includes(c.alpha2.toLowerCase())) {
                    return { label: c.name, value: c.alpha2.toLowerCase() }
                } else {
                    return null
                }
            } else {
                return { label: c.name, value: c.alpha2.toLowerCase() }
            }
        })
        .filter(Boolean)

    form.register(`${type}.country_code`)

    useEffect(() => {
        const t: any = [type]
        if (country && !form.getValues(`${t.country_code}`)) {
            form.setValue(`${t.country_code}`, country)
        }
    }, [])

    return (
        <div>
            <span className="inter-base-semibold">General</span>
            <div className="grid grid-cols-2 gap-x-base gap-y-base mt-4 mb-8">
                <Input
                    placeholder="First Name"
                    label="First Name"
                    required={true}
                    {...form.register(`${type}.first_name`, { required: true })}
                />
                <Input
                    placeholder="Last Name"
                    label="Last Name"
                    required={true}
                    {...form.register(`${type}.last_name`, { required: true })}
                />
                <Input
                    placeholder="Email"
                    label="Email"
                    type="email"
                    required={true}
                    {...form.register('email', { required: true })}
                />
                <Input
                    placeholder="Phone"
                    label="Phone"
                    required={true}
                    {...form.register(`${type}.phone`, { required: true })}
                />
            </div>

            <span className="inter-base-semibold">{`${type !== 'address'
                ? `${type.charAt(0).toUpperCase()}${type.slice(1)} `
                : ''
                }Address`}</span>
            <div className="mt-4">
                <Input
                    placeholder="Address 1"
                    label="Address 1"
                    required={true}
                    {...form.register(`${type}.address_1`, { required: true })}
                />
                <div className="grid grid-cols-2 gap-x-base gap-y-base mt-4">
                    <Input
                        placeholder="Province"
                        label="Province"
                        {...form.register(`${type}.province`)}
                    />
                    <Input
                        placeholder="Postal code"
                        label="Postal code"
                        required={true}
                        {...form.register(`${type}.postal_code`, { required: true })}
                    />
                    <Input
                        placeholder="City"
                        label="City"
                        required={true}
                        {...form.register(`${type}.city`, { required: true })}
                    />
                    <Controller
                        name={`${type}.country_code`}
                        control={form.control}
                        render={({ field: { onChange, value } }: any) => {
                            return (
                                <Select
                                    value={value}
                                    onChange={onChange}
                                    label="Country"
                                    required
                                    options={countryOptions}
                                    openMenuOnFocus={openMenuOnFocus}
                                />
                            )
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default AddressForm
