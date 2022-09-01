import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Breadcrumb from '.'

export default {
    title: 'Molecules/Breadcrumb',
    component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
    <Breadcrumb {...args} />
)

export const Default = Template.bind({})
Default.args = {
    previousRoute: '/a/settings',
    previousBreadcrumb: 'Settings',
    currentPage: 'Tax'
}
