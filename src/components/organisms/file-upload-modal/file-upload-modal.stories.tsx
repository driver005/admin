import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import FileUploadModal from '.'

export default {
    title: 'Organisms/FileUploadModal',
    component: FileUploadModal,
} as ComponentMeta<typeof FileUploadModal>

const Template: ComponentStory<typeof FileUploadModal> = (args) => (
    <FileUploadModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
    filetypes: ['.png', '.jpeg'],
    setFiles: () => {},
    handleClose: () => {},
}
