import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SidebarTeam from '.'

export default {
    title: 'Organisms/SidebarTeam',
    component: SidebarTeam,
} as ComponentMeta<typeof SidebarTeam>

const Template: ComponentStory<typeof SidebarTeam> = (args) => (
    <SidebarTeam {...args} />
)

export const Default = Template.bind({})
Default.args = {
}
