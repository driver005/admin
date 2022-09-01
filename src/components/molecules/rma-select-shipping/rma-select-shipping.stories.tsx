import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import RMAShippingPrice from '.'

export default {
    title: 'Molecules/RMAShippingPrice',
    component: RMAShippingPrice,
} as ComponentMeta<typeof RMAShippingPrice>

const Template: ComponentStory<typeof RMAShippingPrice> = (args) => {
    const [useCustomShippingPrice, setUseCustomShippingPrice] = useState(false)
    return (
        <RMAShippingPrice {...args}
            setUseCustomShippingPrice={setUseCustomShippingPrice}
            useCustomShippingPrice={useCustomShippingPrice}
        />
    )
}

export const Default = Template.bind({})
Default.args = {
    inclTax: false,
    shippingPrice: 1000,
    currencyCode: 'USD',
    updateShippingPrice: () => {},
}
