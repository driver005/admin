import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import FeatureToggle from '.'
import { FeatureFlagProvider } from '../../../context/feature-flag'

export default {
    title: 'Fundamentals/FeatureToggle',
    component: FeatureToggle,
} as ComponentMeta<typeof FeatureToggle>

const Template: ComponentStory<typeof FeatureToggle> = (args) => (
    <FeatureFlagProvider>
        <FeatureToggle {...args}>
            <span>Feature</span>
        </FeatureToggle>
    </FeatureFlagProvider>
)

export const Success = Template.bind({})
Success.args = {
    featureFlag: 'sales_channels',
    showOnlyWhenDisabled: false
}
