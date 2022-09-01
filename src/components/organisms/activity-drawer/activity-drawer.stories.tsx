import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ActivityDrawer from '.'

export default {
    title: 'Organisms/ActivityDrawer',
    component: ActivityDrawer,
} as ComponentMeta<typeof ActivityDrawer>

const Template: ComponentStory<typeof ActivityDrawer> = (args) => (
    <ActivityDrawer {...args} />
)

export const Default = Template.bind({})
Default.args = {
    onDismiss: () => {}
}
