import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Badge from '.'


export default {
    title: 'Fundamentals/Badge',
    component: Badge,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'danger', 'success', 'warning', 'ghost', 'default'],
            },
        },
    },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
    <div className="h-[50px] w-[750px]">
        <span>Primary spinner not visible due to border color</span>
        <Badge {...args}>
            <span>Badge</span>
        </Badge>
    </div>
)

export const PrimaryBadge = Template.bind({})
PrimaryBadge.args = {
    variant: 'primary'
}

export const DangerBadge = Template.bind({})
DangerBadge.args = {
    variant: 'danger'
}

export const SuccessBadge = Template.bind({})
SuccessBadge.args = {
    variant: 'success'
}

export const WarningBadge = Template.bind({})
WarningBadge.args = {
    variant: 'warning'
}

export const GhostBadge = Template.bind({})
GhostBadge.args = {
    variant: 'ghost'
}

export const DefaultBadge = Template.bind({})
DefaultBadge.args = {
    variant: 'default'
}
