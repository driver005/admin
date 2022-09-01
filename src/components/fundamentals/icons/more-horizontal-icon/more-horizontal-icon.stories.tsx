import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import MoreHorizontalIcon from '.'

export default {
    title: 'Fundamentals/Icons/MoreHorizontalIcon',
    component: MoreHorizontalIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof MoreHorizontalIcon>

const Template: ComponentStory<typeof MoreHorizontalIcon> = (args) => (
    <MoreHorizontalIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
