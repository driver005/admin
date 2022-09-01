import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import TagGrid from '.'

export default {
    title: 'Molecules/TagGrid',
    component: TagGrid,
    argTypes: {
        badgeVariant: {
            control: {
                type: 'select',
                options: ['primary', 'danger', 'success', 'warning', 'default'],
            },
        }
    }
} as ComponentMeta<typeof TagGrid>

const Template: ComponentStory<typeof TagGrid> = (args) => (
    <TagGrid {...args} />
)

export const Default = Template.bind({})
Default.args = {
    tags: ['Jon', 'Test', 'Default'],
    badgeVariant: 'danger'
}
