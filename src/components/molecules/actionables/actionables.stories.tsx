import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Actionables from '.'
import AlertIcon from '../../fundamentals/icons/alert-icon'
import BackIcon from '../../fundamentals/icons/back-icon'
import RefreshIcon from '../../fundamentals/icons/refresh-icon'

export default {
    title: 'Molecules/Actionables',
    component: Actionables,
} as ComponentMeta<typeof Actionables>

const Template: ComponentStory<typeof Actionables> = (args) => (
    <Actionables {...args} />
)

export const Default = Template.bind({})
Default.args = {
    actions: [
        {
            icon: <BackIcon size={20} />,
            label: 'Request Return',
            onClick: () => {},
        },
        {
            icon: <RefreshIcon size={20} />,
            label: 'Register Exchange',
            onClick: () => {},
        },
        {
            icon: <AlertIcon size={20} />,
            label: 'Register Claim',
            onClick: () => {},
        },
    ],
    forceDropdown: false,
}
