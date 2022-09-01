import { ComponentMeta, ComponentStory, Story } from '@storybook/react'
import React, { useState } from 'react'
import NumberScroller from '.'


export default {
    title: 'Atoms/NumberScroller',
    component: NumberScroller,
} as ComponentMeta<typeof NumberScroller>

const Template: ComponentStory<typeof NumberScroller> = (args) => {
    const [selected, setSelected]: any = useState(1)
    return (
        <div className="h-[350px] w-[750px]">
            <NumberScroller {...args} selected={selected} onSelect={setSelected} />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    numbers: [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ],
}

