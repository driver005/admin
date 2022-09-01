import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import LoadingContainer from '.'

export default {
    title: 'Fundamentals/LoadingContainer',
    component: LoadingContainer,
} as ComponentMeta<typeof LoadingContainer>

const Template: ComponentStory<typeof LoadingContainer> = (args) => (
    <LoadingContainer {...args}>
        <span>Is loaded</span>
    </LoadingContainer>
)

export const Default = Template.bind({})
Default.args = {
    isLoading: true,
}
