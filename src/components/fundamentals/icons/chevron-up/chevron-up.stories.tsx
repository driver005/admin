import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ChevronUpIcon from '.'

export default {
    title: 'Fundamentals/Icons/ChevronUpIcon',
    component: ChevronUpIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof ChevronUpIcon>

const Template: ComponentStory<typeof ChevronUpIcon> = (args) => (
    <ChevronUpIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
