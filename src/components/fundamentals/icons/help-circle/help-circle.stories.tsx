import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import HelpCircleIcon from '.'

export default {
    title: 'Fundamentals/Icons/HelpCircleIcon',
    component: HelpCircleIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof HelpCircleIcon>

const Template: ComponentStory<typeof HelpCircleIcon> = (args) => (
    <HelpCircleIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
