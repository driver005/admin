import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import TextInput from '.'

export default {
    title: 'Atoms/TextInput',
    component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
    placeholder: 'Search anything...',
}
