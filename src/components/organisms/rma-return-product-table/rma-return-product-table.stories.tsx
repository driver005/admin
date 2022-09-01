import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import RMAReturnProductsTable from '.'

export default {
    title: 'Organisms/RMAReturnProductsTable',
    component: RMAReturnProductsTable,
} as ComponentMeta<typeof RMAReturnProductsTable>

const Template: ComponentStory<typeof RMAReturnProductsTable> = (args) => (
    <RMAReturnProductsTable {...args} />
)

export const Default = Template.bind({})
Default.args = {
    handleRemoveItem: () => {},
    handleToAddQuantity: () => {},
    isAdditionalItems: true,
    order: {
        region_id: "reg_01FG1BQYCFJZJHTHQ7PD3SKSAJ",
        currency_code: 'usd',
        tax_rate: 0,
    },
    itemsToAdd: [{
        product: {
            thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png',
            title: "Medusa Water Bottle",
        },
        title: "Medusa Water Bottle",
        quantity: 1,
        prices: [
            {
                region_id: "reg_01FG1BQYCFJZJHTHQ7PD3SKSAJ",
                currency_code: 'usd',
                amount: 100
            },
            {
                region_id: "reg_01FG1BQYCFJZJHTHQ7PD3SKSAJ",
                currency_code: 'eur',
                amount: 100
            },
        ]
    }]
}
