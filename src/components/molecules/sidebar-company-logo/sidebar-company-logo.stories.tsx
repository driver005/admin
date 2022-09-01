import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SidebarCompanyLogo from '.'

export default {
    title: 'Molecules/SidebarCompanyLogo',
    component: SidebarCompanyLogo,
} as ComponentMeta<typeof SidebarCompanyLogo>

const Template: ComponentStory<typeof SidebarCompanyLogo> = (args) => (
    <SidebarCompanyLogo {...args} />
)

export const Default = Template.bind({})
Default.args = {
    storeName: 'My Store'
}
