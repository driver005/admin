import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CollapsibleTree from '.'

export default {
    title: 'Molecules/CollapsibleTree',
    component: CollapsibleTree,
} as ComponentMeta<typeof CollapsibleTree>

const Template: ComponentStory<typeof CollapsibleTree> = (args) => (
    <CollapsibleTree {...args}>
        <CollapsibleTree.Parent>
            <span>Collapsible tree</span>
        </CollapsibleTree.Parent>
        <CollapsibleTree.Content>
            <span>Collapsible tree content</span>
        </CollapsibleTree.Content>
    </CollapsibleTree>
)

export const Default = Template.bind({})
Default.args = {

}
