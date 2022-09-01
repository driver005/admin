import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ExportModal from '.'

export default {
    title: 'Organisms/ExportModal',
    component: ExportModal,
} as ComponentMeta<typeof ExportModal>

const Template: ComponentStory<typeof ExportModal> = (args) => (
    <ExportModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
    loading: false,
    title: 'Default',
    handleClose: () => {},
    onSubmit: () => {},
}
