import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import DiscordIcon from '.'

export default {
    title: 'Fundamentals/Icons/DiscordIcon',
    component: DiscordIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof DiscordIcon>

const Template: ComponentStory<typeof DiscordIcon> = (args) => (
    <DiscordIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
