import React, { useContext, useEffect, useState } from 'react'
import AddressForm from '../../../../components/templates/address-form'
import CheckIcon from '../../../../components/fundamentals/icons/check-icon'
import { SteppedContext } from '../../../../components/molecules/modal/stepped-modal'

interface BillingProps {
    form: any
    region: any
}

const Billing: React.FC<BillingProps> = ({ form, region }) => {
    const [useShipping, setUseShipping] = useState(false)
    const { disableNextPage, enableNextPage, nextStepEnabled } =
        useContext(SteppedContext)

    const { shipping, billing } = form.watch()

    useEffect(() => {
        if (!useShipping) {
            form.setValue('billing', {})
        }
    }, [useShipping])

    useEffect(() => {
        const subscription = form.watch((value: any) => {
            if (
                !value?.billing?.first_name ||
                !value?.billing?.last_name ||
                !value?.billing?.address_1 ||
                !value?.billing?.city ||
                !value?.billing?.country_code ||
                !value?.billing?.postal_code
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
            !billing?.first_name ||
            !billing?.last_name ||
            !billing?.address_1 ||
            !billing?.city ||
            !billing?.country_code ||
            !billing?.postal_code
        ) {
            if (nextStepEnabled) {
                disableNextPage()
            }
        }
    }, [])

    const onUseShipping = () => {
        setUseShipping(!useShipping)
        form.setValue('billing', { ...shipping })
    }

    return (
        <div className="min-h-[705px]">
            <span className="inter-base-semibold">Billing Address</span>
            <div
                className="items-center flex mt-4 mb-6 cursor-pointer"
                onClick={() => onUseShipping()}
            >
                <div
                    className={`w-5 h-5 flex justify-center text-grey-0 border-grey-30 border rounded-base ${useShipping && 'bg-violet-60'
                        }`}
                >
                    <span className="self-center">
                        {useShipping && <CheckIcon size={16} />}
                    </span>
                </div>
                <input
                    className="hidden"
                    type="checkbox"
                    onChange={() => onUseShipping()}
                    checked={useShipping}
                    tabIndex={-1}
                />
                <span className="ml-3 text-grey-90">Use same as shipping</span>
            </div>
            {!useShipping && (
                <AddressForm
                    allowedCountries={
                        region.countries?.map((c: any) => c.iso_2) || []
                    }
                    form={form}
                    country={shipping?.country_code}
                    type="billing"
                    openMenuOnFocus={false}
                />
            )}
        </div>
    )
}

export default Billing
