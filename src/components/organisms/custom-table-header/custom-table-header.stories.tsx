import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import TableViewHeader from '.'

export default {
    title: 'Organisms/TableViewHeader',
    component: TableViewHeader,
} as ComponentMeta<typeof TableViewHeader>

const Template: ComponentStory<typeof TableViewHeader> = (args) => (
    <TableViewHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
    views: ['discounts']
}
