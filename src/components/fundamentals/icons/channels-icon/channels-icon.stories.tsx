import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ChannelsIcon from '.'

export default {
    title: 'Fundamentals/Icons/ChannelsIcon',
    component: ChannelsIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof ChannelsIcon>

const Template: ComponentStory<typeof ChannelsIcon> = (args) => (
    <ChannelsIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
