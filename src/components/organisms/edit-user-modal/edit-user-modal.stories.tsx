import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import EditUserModal from '.'

export default {
    title: 'Organisms/EditUserModal',
    component: EditUserModal,
} as ComponentMeta<typeof EditUserModal>

const Template: ComponentStory<typeof EditUserModal> = (args) => (
    <EditUserModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
    user: {
        email: 'jon@doe.com',
        first_name: 'Jon',
        last_name: 'Doe',
        id: '1'
    },
    handleClose: () => {},
    onSubmit: () => {},
}
