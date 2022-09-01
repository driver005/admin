import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CustomerAvatarItem from '.'

export default {
    title: 'Molecules/CustomerAvatarItem',
    component: CustomerAvatarItem,
} as ComponentMeta<typeof CustomerAvatarItem>

const Template: ComponentStory<typeof CustomerAvatarItem> = (args) => (
    <CustomerAvatarItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
    customer: {
        first_name: 'Jon',
        last_name: 'Doe'
    }
}
