import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ActivityCard from '.'

export default {
    title: 'Molecules/ActivityCard',
    component: ActivityCard,
} as ComponentMeta<typeof ActivityCard>

const Template: ComponentStory<typeof ActivityCard> = (args) => (
    <ActivityCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    title: 'Activity',
    shouldShowStatus: true,
    date: new Date(),
}
