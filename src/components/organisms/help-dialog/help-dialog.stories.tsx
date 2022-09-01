import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import MailDialog from '.'

export default {
    title: 'Organisms/MailDialog',
    component: MailDialog,
} as ComponentMeta<typeof MailDialog>

const Template: ComponentStory<typeof MailDialog> = (args) => (
    <MailDialog {...args} />
)

export const Default = Template.bind({})
Default.args = {
    onDismiss: () => {}
}
