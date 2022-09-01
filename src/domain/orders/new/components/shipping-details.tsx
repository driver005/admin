import React, { useContext, useEffect, useState } from 'react'
import qs from 'query-string'
import Medusa from '../../../../services/api'
import Spinner from '../../../../components/atoms/spinner'
import Button from '../../../../components/fundamentals/button'
import AddressForm from '../../../../components/templates/address-form'

import Select from '../../../../components/molecules/select'
import RadioGroup from '../../../../components/organisms/radio-group'
import { SteppedContext } from '../../../../components/molecules/modal/stepped-modal'

interface ShippingDetailsProps {
    customerAddresses: any
    region: any
    setCustomerAddresses: any
    form: any
}

const ShippingDetails: React.FC<ShippingDetailsProps> = ({
    customerAddresses,
    region,
    setCustomerAddresses,
    form,
}) => {
    const [addNew, setAddNew] = useState(false)
    const [fetchingAddresses, setFetchingAddresses] = useState(false)
    const { disableNextPage, enableNextPage, nextStepEnabled } =
        useContext(SteppedContext)

    const {
        shipping,
        customer: selectedCustomer,
        requireShipping,
    } = form.watch()

    useEffect(() => {
        const subscription = form.watch((value: any) => {
            if (
                !value?.shipping?.first_name ||
                !value?.shipping?.last_name ||
                !value?.shipping?.address_1 ||
                !value?.shipping?.city ||
                !value?.shipping?.country_code ||
                !value?.shipping?.postal_code
            ) {

                disableNextPage()
            } else {
                enableNextPage()
            }
        });
        return () => subscription.unsubscribe();
    }, [form.watch]);

    useEffect(() => {
        if (
            !shipping?.first_name ||
            !shipping?.last_name ||
            !shipping?.address_1 ||
            !shipping?.city ||
            !shipping?.country_code ||
            !shipping?.postal_code
        ) {
            if (nextStepEnabled) {
                disableNextPage()
            }
        }
    }, [])

    // "region",
    const debouncedFetch = (filter: any) => {
        const prepared = qs.stringify(
            {
                q: filter,
                offset: 0,
                limit: 10,
            },
            { skipNull: true, skipEmptyString: true }
        )

        return Medusa.customers
            .list(`?${prepared}`)
            .then(({ data }: any) =>
                data.customers.map(({ id, first_name, last_name, email }: any) => ({
                    label: `${first_name || ''} ${last_name || ''} (${email})`,
                    value: id,
                }))
            )
            .catch((error: any) => [])
    }

    const onCustomerSelect = async (val: any) => {
        const email = /\(([^()]*)\)$/.exec(val?.label)

        if (!val || !email) {
            form.setValue('customer', '')
            form.setValue('customerId', '')
            setCustomerAddresses([])
            return
        }

        form.setValue('customer', val)
        form.setValue('email', email[1])
        form.setValue('customerId', val.value)

        setFetchingAddresses(true)
        await Medusa.customers
            .retrieve(val.value)
            .then(({ data }: any) => {
                form.setValue('shipping.first_name', data.customer.first_name)
                form.setValue('shipping.last_name', data.customer.last_name)
                form.setValue('shipping.email', data.customer.email)
                form.setValue('shipping.phone', data.customer.phone)
                const countries = region.countries.map(({ iso_2 }: any) => iso_2)
                const inRegion = data.customer.shipping_addresses.filter((sa: any) =>
                    countries.includes(sa.country_code)
                )

                if (inRegion) {
                    setAddNew(false)
                }
                setCustomerAddresses(inRegion)
            })
            .catch((_: any) => setCustomerAddresses([]))
        setFetchingAddresses(false)
    }

    const onCustomerCreate = (val: any) => {
        setCustomerAddresses([])
        setAddNew(true)
        form.setValue('email', val)
        form.setValue('customer', { label: val, value: val })
        return { label: val, value: val }
    }

    const onCreateNew = () => {
        form.setValue('shipping.address_1', undefined)
        form.setValue('shipping.postal_code', undefined)
        form.setValue('shipping.city', undefined)
        form.setValue('shipping.province', undefined)

        setAddNew(true)
    }

    return (
        <div className="min-h-[705px]">
            <span className="inter-base-semibold">
                Customer and shipping details
            </span>
            <Select
                className="mt-4"
                label="Find or create a customer"
                value={selectedCustomer}
                options={[]}
                enableSearch
                onChange={(val) => onCustomerSelect(val)}
                filterOptions={debouncedFetch}
                isCreatable
                onCreateOption={(value: any) => {
                    return onCustomerCreate(value)
                }}
            />

            {fetchingAddresses ? (
                <div>
                    <Spinner variant="primary" />
                </div>
            ) : customerAddresses.length && !addNew ? (
                <div className="mt-6">
                    <span className="inter-base-semibold">
                        Choose existing addresses
                    </span>
                    <RadioGroup.Root
                        className="mt-4"
                        value={shipping.id}
                        onValueChange={(value) => {
                            const address = customerAddresses.find(
                                (ca: any) => ca.id === value
                            )
                            form.setValue('shipping', address)
                            form.setValue('billing', address)
                        }}
                    >
                        {customerAddresses.map((sa: any, i: any) => (
                            <RadioGroup.Item
                                label={`${sa.first_name} ${sa.last_name}`}
                                checked={shipping && sa.id === shipping.id}
                                description={`${sa.address_1}, ${sa.address_2
                                    } ${sa.postal_code} ${sa.city
                                    } ${sa.country_code.toUpperCase()}`}
                                value={sa.id}
                                key={i}
                            ></RadioGroup.Item>
                        ))}
                    </RadioGroup.Root>
                    <div className="mt-4 flex w-full justify-end">
                        <Button
                            variant="ghost"
                            size="small"
                            className="border border-grey-20 w-[112px]"
                            onClick={onCreateNew}
                        >
                            Create new
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="mt-4">
                    <AddressForm
                        allowedCountries={
                            region.countries?.map((c: any) => c.iso_2) || []
                        }
                        country={shipping?.country_code}
                        form={form}
                        type="shipping"
                        openMenuOnFocus={false}
                    />
                </div>
            )}
        </div>
    )
}

export default ShippingDetails
