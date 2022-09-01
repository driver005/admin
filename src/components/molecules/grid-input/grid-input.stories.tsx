import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import GridInput from '.'

export default {
    title: 'Molecules/GridInput',
    component: GridInput,
} as ComponentMeta<typeof GridInput>

const Template: ComponentStory<typeof GridInput> = (args) => (
    <GridInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
    value: 1000
}
