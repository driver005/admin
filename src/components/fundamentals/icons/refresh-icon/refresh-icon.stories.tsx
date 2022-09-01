import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import RefreshIcon from '.'

export default {
    title: 'Fundamentals/Icons/RefreshIcon',
    component: RefreshIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof RefreshIcon>

const Template: ComponentStory<typeof RefreshIcon> = (args) => (
    <RefreshIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
