import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SidebarMenuItem from '.'
import MedusaIcon from '../../fundamentals/icons/medusa-icon'

export default {
    title: 'Molecules/SidebarMenuItem',
    component: SidebarMenuItem,
} as ComponentMeta<typeof SidebarMenuItem>

const Template: ComponentStory<typeof SidebarMenuItem> = (args) => (
    <SidebarMenuItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
    pageLink: '/',
    text: 'Home',
    icon: <MedusaIcon />,
    triggerHandler: () => {},
}
