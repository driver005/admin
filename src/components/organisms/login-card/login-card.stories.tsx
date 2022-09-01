import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import LoginCard from '.'

export default {
    title: 'Organisms/LoginCard',
    component: LoginCard,
} as ComponentMeta<typeof LoginCard>

const Template: ComponentStory<typeof LoginCard> = (args) => (
    <LoginCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    toResetPassword: () => {}
}
