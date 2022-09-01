import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ChevronDownIcon from '.'

export default {
    title: 'Fundamentals/Icons/ChevronDownIcon',
    component: ChevronDownIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof ChevronDownIcon>

const Template: ComponentStory<typeof ChevronDownIcon> = (args) => (
    <ChevronDownIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
