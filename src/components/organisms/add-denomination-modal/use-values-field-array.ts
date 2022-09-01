import { Control, useFieldArray, useWatch } from 'react-hook-form'

type UseValuesFieldArrayOptions = {
    defaultAmount: number
    defaultCurrencyCode: string
}

type ValuesFormValue = {
    default_price: number
    price: {
        currency_code: string
        amount: number
    }
}

export const useValuesFieldArray = <TKeyName extends string = 'id'>(
    currencyCodes: string[],
    {
        control,
        name,
        keyName
    }: {
        control: Control<any>
        name: string
        keyName: string
    },
    options: UseValuesFieldArrayOptions = {
        defaultAmount: 1000,
        defaultCurrencyCode: 'usd',
    }
) => {
    const { defaultAmount } = options
    const { fields, append, remove } = useFieldArray(
        {
            control: control,
            name: name,
            keyName: keyName,
        }
    )

    const watchedFields = useWatch({
        control,
        name: name,
        defaultValue: fields,
    })

    const selectedCurrencies = watchedFields.map(
        (field: any) => field?.price?.currency_code
    )
    const availableCurrencies = currencyCodes?.filter(
        (currency) => !selectedCurrencies.includes(currency)
    )

    const controlledFields = fields.map((field, index) => {
        return {
            ...field,
            ...watchedFields[index],
        }
    })

    const appendPrice = () => {
        const newCurrency = availableCurrencies[0]
        append({
            price: {
                currency_code: newCurrency,
                amount: defaultAmount,
            },
        })
    }

    const deletePrice = (index: number) => {
        return () => {
            remove(index)
        }
    }

    return {
        fields: controlledFields,
        appendPrice,
        deletePrice,
        availableCurrencies,
        selectedCurrencies,
    } as const
}
