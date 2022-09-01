import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Input from '.'
import Tooltip from '../../atoms/tooltip'
import AlertIcon from '../../fundamentals/icons/alert-icon'

export default {
    title: 'Molecules/Input',
    component: Input,
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
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'First name',
    placeholder: 'LeBron James',
    type: 'text'
}

export const Required = Template.bind({})
Required.args = {
    label: 'Email',
    required: true,
    placeholder: 'lebron@james.com',
    type: 'text'
}

export const WithInfoTooltip = Template.bind({})
WithInfoTooltip.args = {
    label: 'Default',
    tooltipContent: 'This is a tooltip',
    type: 'text'
}

export const WithCustomTooltip = Template.bind({})
WithCustomTooltip.args = {
    label: 'Tricky',
    tooltip: (
        <Tooltip
            content={'Changing this might cause bad luck'}
            className="text-rose-50"
            side="right"
            align="end"
        >
            <AlertIcon size={16} className="flex text-rose-50" />
        </Tooltip>
    ),
    type: 'text'
}
