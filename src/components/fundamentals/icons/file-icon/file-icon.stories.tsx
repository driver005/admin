import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import FileIcon from '.'

export default {
    title: 'Fundamentals/Icons/FileIcon',
    component: FileIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof FileIcon>

const Template: ComponentStory<typeof FileIcon> = (args) => (
    <FileIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
