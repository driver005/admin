import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import PriceInput from './index'
import { currencies } from '../../../utils/currencies'

function C(args: any) {
    const [amount, setAmount] = useState()

    return <PriceInput {...args} amount={amount} onAmountChange={setAmount} />
}

export default {
    title: 'Organisms/PriceInput',
    component: PriceInput,
} as ComponentMeta<typeof PriceInput>

const Template: ComponentStory<typeof PriceInput> = (args) => <C {...args} />

export const Default = Template.bind({})
Default.args = {
    currency: currencies.BHD,
}
