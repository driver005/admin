import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SigninInput from '.'

export default {
    title: 'Molecules/SigninInput',
    component: SigninInput,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: [
                    "button",
                    "checkbox",
                    "color",
                    "date",
                    "datetime-local",
                    "email",
                    "file",
                    "hidden",
                    "image",
                    "month",
                    "number",
                    "password",
                    "radio",
                    "range",
                    "reset",
                    "search",
                    "submit",
                    "tel",
                    "text",
                    "time",
                    "url",
                    "week",
                ],
            },
        },
    }
} as ComponentMeta<typeof SigninInput>

const Template: ComponentStory<typeof SigninInput> = (args) => (
    <SigninInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
    placeholder: 'Enter',
    name: 'Default',
    required: false,
    type: 'text'
}
