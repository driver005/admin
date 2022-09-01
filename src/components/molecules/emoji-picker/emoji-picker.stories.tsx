import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import EmojiPicker from '.'

export default {
    title: 'Molecules/EmojiPicker',
    component: EmojiPicker,
} as ComponentMeta<typeof EmojiPicker>

const Template: ComponentStory<typeof EmojiPicker> = (args) => (
    <EmojiPicker {...args} />
)

export const Default = Template.bind({})
Default.args = {
    onEmojiClick: () => {}
}
