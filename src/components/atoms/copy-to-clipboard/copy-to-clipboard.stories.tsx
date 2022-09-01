import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CopyToClipboard from '.'


export default {
    title: 'Atoms/CopyToClipboard',
    component: CopyToClipboard,
} as ComponentMeta<typeof CopyToClipboard>

const Template: ComponentStory<typeof CopyToClipboard> = (args) => (
    <div className="h-large w-[750px]">
        <CopyToClipboard {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = {
    value: 'Test',
    displayValue: 'Test',
    successDuration: 3000,
    showValue: true,
    iconSize: 20,
}

