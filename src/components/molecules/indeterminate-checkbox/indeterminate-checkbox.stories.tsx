import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import IndeterminateCheckbox from '.'

export default {
    title: 'Molecules/IndeterminateCheckbox',
    component: IndeterminateCheckbox,
} as ComponentMeta<typeof IndeterminateCheckbox>

const Template: ComponentStory<typeof IndeterminateCheckbox> = (args) => (
    <IndeterminateCheckbox {...args} />
)

export const Default = Template.bind({})
Default.args = {
    title: 'Default',
    checked: false,
    indeterminate: false
}
