import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import FilterTab from '.'

export default {
    title: 'Molecules/FilterTab',
    component: FilterTab,
} as ComponentMeta<typeof FilterTab>

const Template: ComponentStory<typeof FilterTab> = (args) => (
    <FilterTab {...args} />
)

export const Default = Template.bind({})
Default.args = {
    label: 'Filter',
    removable: false
}
