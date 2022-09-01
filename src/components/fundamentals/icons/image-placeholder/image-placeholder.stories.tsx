import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ImagePlaceholder from '.'

export default {
    title: 'Fundamentals/Icons/ImagePlaceholder',
    component: ImagePlaceholder,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['24', '20', '16'],
            },
        },
    },
} as ComponentMeta<typeof ImagePlaceholder>

const Template: ComponentStory<typeof ImagePlaceholder> = (args) => (
    <ImagePlaceholder {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
    size: '24',
    color: 'currentColor',
}
