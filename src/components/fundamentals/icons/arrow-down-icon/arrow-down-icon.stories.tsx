import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ArrowDownIcon from '.'

export default {
    title: 'Fundamentals/Icons/ArrowDownIcon',
    component: ArrowDownIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof ArrowDownIcon>

const Template: ComponentStory<typeof ArrowDownIcon> = (args) => (
    <ArrowDownIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}