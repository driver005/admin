import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import Metadata from '.'

export default {
    title: 'Organisms/Metadata',
    component: Metadata,
} as ComponentMeta<typeof Metadata>

const Template: ComponentStory<typeof Metadata> = (args) => {
    const [metadata, setMetadata]: any = useState([])
    return (
        <div className="max-w-md">
            <Metadata {...args}
                metadata={metadata}
                setMetadata={setMetadata}
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
}
