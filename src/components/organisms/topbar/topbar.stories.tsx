import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Topbar from '.'

export default {
    title: 'Organisms/Topbar',
    component: Topbar,
} as ComponentMeta<typeof Topbar>

const Template: ComponentStory<typeof Topbar> = (args) => (
    <Topbar {...args} />
)

export const Default = Template.bind({})
Default.args = {
}
