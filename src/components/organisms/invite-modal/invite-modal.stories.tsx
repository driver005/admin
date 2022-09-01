import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import InviteModal from '.'

export default {
    title: 'Organisms/InviteModal',
    component: InviteModal,
} as ComponentMeta<typeof InviteModal>

const Template: ComponentStory<typeof InviteModal> = (args) => (
    <InviteModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
    handleClose: () => {}
}
