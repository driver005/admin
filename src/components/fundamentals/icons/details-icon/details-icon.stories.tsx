import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import DetailsIcon from '.'

export default {
    title: 'Fundamentals/Icons/DetailsIcon',
    component: DetailsIcon,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof DetailsIcon>

const Template: ComponentStory<typeof DetailsIcon> = (args) => (
    <DetailsIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
