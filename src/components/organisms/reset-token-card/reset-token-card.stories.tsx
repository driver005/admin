import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ResetTokenCard from '.'

export default {
    title: 'Organisms/ResetTokenCard',
    component: ResetTokenCard,
} as ComponentMeta<typeof ResetTokenCard>

const Template: ComponentStory<typeof ResetTokenCard> = (args) => (
    <ResetTokenCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    goBack: () => {}
}
