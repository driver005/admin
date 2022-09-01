import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CheckIcon from '.'

export default {
    title: 'Fundamentals/Icons/CheckIcon',
    component: CheckIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof CheckIcon>

const Template: ComponentStory<typeof CheckIcon> = (args) => (
    <CheckIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
