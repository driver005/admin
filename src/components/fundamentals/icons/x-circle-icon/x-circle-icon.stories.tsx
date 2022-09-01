import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import XCircleIcon from '.'

export default {
    title: 'Fundamentals/Icons/XCircleIcon',
    component: XCircleIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof XCircleIcon>

const Template: ComponentStory<typeof XCircleIcon> = (args) => (
    <XCircleIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
