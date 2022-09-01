import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import RawJSON from '.'

export default {
    title: 'Organisms/RawJSON',
    component: RawJSON,
} as ComponentMeta<typeof RawJSON>

const Template: ComponentStory<typeof RawJSON> = (args) => (
    <RawJSON {...args} />
)

export const Default = Template.bind({})
Default.args = {
    data: {
        'user': {
            'name': 'User',
            'phone': '',
            'street': '',
        }
    },
    title: 'User'
}
