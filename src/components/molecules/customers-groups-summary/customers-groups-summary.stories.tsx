import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CustomersGroupsSummary from '.'

export default {
    title: 'Molecules/CustomersGroupsSummary',
    component: CustomersGroupsSummary,
} as ComponentMeta<typeof CustomersGroupsSummary>

const Template: ComponentStory<typeof CustomersGroupsSummary> = (args) => (
    <CustomersGroupsSummary {...args} />
)

export const Default = Template.bind({})
Default.args = {
}
