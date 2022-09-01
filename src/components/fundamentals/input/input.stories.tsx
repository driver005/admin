import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import InputContainer from './input-container'
import InputHeader from './input-header'

export default {
    title: 'Fundamentals/InputHelper',
} as ComponentMeta<any>

const InputContainerTemplate: ComponentStory<typeof InputContainer> = (args) => (
    <InputContainer {...args}>
        <span>Input</span>
    </InputContainer>
)

const InputHeaderTemplate: ComponentStory<typeof InputHeader> = (args) => (
    <InputHeader {...args} />
)

export const InputContainerDefault = InputContainerTemplate.bind({})
InputContainerDefault.args = {
}

export const InputHeaderDefault = InputHeaderTemplate.bind({})
InputHeaderDefault.args = {
    label: 'Default',
    required: false,
    tooltipContent: 'Tooltip'
}
