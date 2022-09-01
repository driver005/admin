import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import WarningCircle from '.'

export default {
    title: 'Fundamentals/Icons/WarningCircle',
    component: WarningCircle,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof WarningCircle>

const Template: ComponentStory<typeof WarningCircle> = (args) => (
    <WarningCircle {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
