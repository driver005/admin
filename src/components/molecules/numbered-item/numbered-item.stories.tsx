import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import NumberedItem from '.'

export default {
    title: 'Molecules/NumberedItem',
    component: NumberedItem,
} as ComponentMeta<typeof NumberedItem>

const Template: ComponentStory<typeof NumberedItem> = (args) => (
    <NumberedItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
    index: 0,
    title: 'Default',
    description: 'Add description',
}
