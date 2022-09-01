import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SidebarTeamMember from '.'

export default {
    title: 'Molecules/SidebarTeamMember',
    component: SidebarTeamMember,
} as ComponentMeta<typeof SidebarTeamMember>

const Template: ComponentStory<typeof SidebarTeamMember> = (args) => (
    <SidebarTeamMember {...args} />
)

export const Default = Template.bind({})
Default.args = {
    user: {
        first_name: 'Jon',
        last_name: 'Doe',
    }
}
