import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Section from '.'

export default {
    title: 'Molecules/Section',
    component: Section,
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = (args) => (
    <Section {...args}>
        <span>Section</span>
    </Section>
)

export const Default = Template.bind({})
Default.args = {
    title: 'Default',
    description: 'Add Description',
    tooltip: 'Tooltip'
}
