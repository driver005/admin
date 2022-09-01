import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ListIcon from '.'

export default {
    title: 'Fundamentals/Icons/ListIcon',
    component: ListIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof ListIcon>

const Template: ComponentStory<typeof ListIcon> = (args) => (
    <ListIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
