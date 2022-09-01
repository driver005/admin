import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import DeletePrompt from '.'

export default {
    title: 'Organisms/DeletePrompt',
    component: DeletePrompt,
} as ComponentMeta<typeof DeletePrompt>

const Template: ComponentStory<typeof DeletePrompt> = (args) => (
    <DeletePrompt {...args} />
)

export const Default = Template.bind({})
Default.args = {
    handleClose: () => {},
    onDelete: () => new Promise<void>((resolve, reject) => resolve())
}
