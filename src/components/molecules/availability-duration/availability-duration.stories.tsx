import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import AvailabilityDuration from '.'

export default {
    title: 'Molecules/AvailabilityDuration',
    component: AvailabilityDuration,
} as ComponentMeta<typeof AvailabilityDuration>

const Template: ComponentStory<typeof AvailabilityDuration> = (args) => (
    <AvailabilityDuration {...args} />
)

export const Default = Template.bind({})
Default.args = {
    value: 'P1Y2M4DT20H44M12.67S',
    onChange: () => {}
}
