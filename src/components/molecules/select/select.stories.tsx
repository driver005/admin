import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import Select from '.'

export default {
    title: 'Molecules/Select',
    component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState({
        label: 'USD',
        value: 'usd',
    })
    return (
        <Select {...args} value={value} onChange={(val) => setValue(val)} />
    )
}

export const Default = Template.bind({})
Default.args = {
    label: 'Default',
    options: [
        {
            label: 'USD',
            value: 'usd',
        },
        {
            label: 'EUR',
            value: 'eur',
        },
    ],
    disabled: false,
}
