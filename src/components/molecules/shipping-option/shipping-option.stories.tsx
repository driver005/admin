import { RequirementType } from '@medusajs/medusa'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ShippingOption from '.'

export default {
    title: 'Atoms/ShippingOption',
    component: ShippingOption,
} as ComponentMeta<typeof ShippingOption>

const Template: ComponentStory<typeof ShippingOption> = (args) => <ShippingOption {...args} />

export const FlatRate = Template.bind({})
FlatRate.args = {
    option: {
        name: 'Standard',
        amount: 1000,
        price_type: 'flat_rate',
        requirements: [
            { type: 'MAX_SUBTOTAL' as RequirementType, amount: 10000 },
            { type: 'min_subtotal' as RequirementType, amount: 0 },
        ],
        admin_only: false,
        data: {
            name: 'FedEx',
        },
    },
    currency_code: 'USD',
    onEdit: () => {},
}

export const CalculatedRate = Template.bind({})
CalculatedRate.args = {
    option: {
        name: 'Standard',
        amount: 1000,
        price_type: 'calculated',
        requirements: [
            { type: 'max_subtotal' as RequirementType, amount: 10000 },
            { type: 'min_subtotal' as RequirementType, amount: 0 },
        ],
        admin_only: false,
        data: {
            name: 'FedEx',
        },
    },
    currency_code: 'USD',
    onEdit: () => {},
}

export const AdminOnly = Template.bind({})
AdminOnly.args = {
    option: {
        name: 'Standard',
        amount: 1000,
        price_type: 'calculated',
        requirements: [],
        admin_only: true,
        data: {
            name: 'FedEx',
        },
    },
    currency_code: 'USD',
    onEdit: () => {},
}
