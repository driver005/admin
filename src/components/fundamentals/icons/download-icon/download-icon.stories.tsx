import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import DownloadIcon from '.'

export default {
    title: 'Fundamentals/Icons/DownloadIcon',
    component: DownloadIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof DownloadIcon>

const Template: ComponentStory<typeof DownloadIcon> = (args) => (
    <DownloadIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
