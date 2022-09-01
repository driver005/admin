import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CollectionModal from '.'

export default {
    title: 'Templates/CollectionModal',
    component: CollectionModal,
} as ComponentMeta<typeof CollectionModal>

const Template: ComponentStory<typeof CollectionModal> = (args) => (
    <CollectionModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
    onClose: () => {},
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
}
