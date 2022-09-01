import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import StatusSelector from '.'

export default {
    title: 'Molecules/StatusSelector',
    component: StatusSelector,
} as ComponentMeta<typeof StatusSelector>

const Template: ComponentStory<typeof StatusSelector> = (args) => (
    <StatusSelector {...args} />
)

export const Default = Template.bind({})
Default.args = {
    isDraft: true,
    activeState: 'Active',
    draftState: 'Draft',
    onChange: () => {}
}
