import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SearchBar from '.'

export default {
    title: 'Molecules/SearchBar',
    component: SearchBar,
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = (args) => (
    <SearchBar {...args} />
)

export const Default = Template.bind({})
Default.args = {
}
