import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import BatchJobFileCard from '.'

export default {
    title: 'Molecules/BatchJobFileCard',
    component: BatchJobFileCard,
} as ComponentMeta<typeof BatchJobFileCard>

const Template: ComponentStory<typeof BatchJobFileCard> = (args) => (
    <BatchJobFileCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    fileName: 'Image',
}
