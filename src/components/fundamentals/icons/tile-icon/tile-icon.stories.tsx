import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import TileIcon from '.'

export default {
    title: 'Fundamentals/Icons/TileIcon',
    component: TileIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof TileIcon>

const Template: ComponentStory<typeof TileIcon> = (args) => (
    <TileIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
