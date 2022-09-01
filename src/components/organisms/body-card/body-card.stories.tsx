import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import BodyCard from '.'

export default {
    title: 'Organisms/BodyCard',
    component: BodyCard,
} as ComponentMeta<typeof BodyCard>

const Template: ComponentStory<typeof BodyCard> = (args) => (
    <BodyCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    title: 'Default',
    subtitle: 'Add info'
}
