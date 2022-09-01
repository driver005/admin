import { capitalize } from 'lodash'

export const useGridColumns = (product: any, isEditing: any) => {
    const defaultFields = [
        { header: 'Title', field: 'title' },
        { header: 'SKU', field: 'sku' },
        { header: 'EAN', field: 'ean' },
        { header: 'Inventory', field: 'inventory_quantity' },
    ]

    if (isEditing) {
        const optionColumns = product.options.map((o: any) => ({
            header: o.title,
            field: 'options',
            formatter: (variantOptions: any) => {
                const displayVal = variantOptions.find(
                    (val: any) => val.option_id === o.id
                )
                return displayVal?.value || ' - '
            },
        }))

        return [
            ...optionColumns,
            {
                header: 'Prices',
                field: 'prices',
                formatter: (prices: any) => `${prices.length} price(s)`,
            },
            ...defaultFields,
        ]
    } else {
        return [
            {
                header: 'Variant',
                field: 'options',
                formatter: (value: any) => {
                    const options = value.map((v: any) => {
                        if (v.value) {
                            return capitalize(v.value)
                        }
                        return capitalize(v)
                    })

                    return options.join(' / ')
                },
                readOnly: true,
                headCol: true,
            },
            ...defaultFields,
        ]
    }
}
