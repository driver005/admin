import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SwitchableItem from '.'

export default {
    title: 'Molecules/SwitchableItem',
    component: SwitchableItem,
} as ComponentMeta<typeof SwitchableItem>

const Template: ComponentStory<typeof SwitchableItem> = (args) => (
    <SwitchableItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
    title: 'Default',
    description: 'Add discription',
    tooltip: 'Tooltip',
    open: true,
    onSwitch: () => {}
}
