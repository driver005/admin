import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Spinner from '.'


export default {
    title: 'Atoms/Spinner',
    component: Spinner,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['large', 'medium', 'small'],
            },
        },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
    },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => (
    <div className="h-[50px] w-[750px]">
        <span>Primary spinner not visible due to border color</span>
        <Spinner {...args} />
    </div>
)

export const PrimarySpinner = Template.bind({})
PrimarySpinner.args = {
    size: 'large',
    variant: 'primary'
}

export const SecondarySpinner = Template.bind({})
SecondarySpinner.args = {
    size: 'large',
    variant: 'secondary'
}

