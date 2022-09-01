import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import DuplicateIcon from '.'

export default {
    title: 'Fundamentals/Icons/DuplicateIcon',
    component: DuplicateIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof DuplicateIcon>

const Template: ComponentStory<typeof DuplicateIcon> = (args) => (
    <DuplicateIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
