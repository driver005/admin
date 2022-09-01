import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Timeline from '.'

export default {
    title: 'Organisms/Timeline',
    // component: Timeline,
} as ComponentMeta<typeof Timeline>

const Template: ComponentStory<typeof Timeline> = (args) => (
    // <Timeline {...args} />
    <div>Under development</div>
)

export const Default = Template.bind({})
Default.args = {
    // orderId: 'order_01FG1DWV8Y6K4K72KBR6KA74DN'
}
