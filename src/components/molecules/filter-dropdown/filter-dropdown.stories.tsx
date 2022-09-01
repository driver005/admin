import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import FilterDropdownItem from './item'

export default {
    title: 'Molecules/FilterDropdownItem',
    component: FilterDropdownItem,
} as ComponentMeta<typeof FilterDropdownItem>

const Template: ComponentStory<typeof FilterDropdownItem> = (args) => (
    <span>In Development</span>
)

export const Default = Template.bind({})
Default.args = {
}
