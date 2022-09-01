import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import GripIcon from '.'

export default {
    title: 'Fundamentals/Icons/GripIcon',
    component: GripIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof GripIcon>

const Template: ComponentStory<typeof GripIcon> = (args) => (
    <GripIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
