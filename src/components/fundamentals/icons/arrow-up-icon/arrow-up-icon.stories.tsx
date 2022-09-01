import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ArrowUpIcon from '.'

export default {
    title: 'Fundamentals/Icons/ArrowUpIcon',
    component: ArrowUpIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof ArrowUpIcon>

const Template: ComponentStory<typeof ArrowUpIcon> = (args) => (
    <ArrowUpIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}