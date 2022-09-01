import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useContext } from 'react'
import BatchJobActivityList from '.'
import { PollingContext, PollingProvider } from '../../../context/polling'

export default {
    title: 'Organisms/BatchJobActivityList',
    component: BatchJobActivityList,
} as ComponentMeta<typeof BatchJobActivityList>

const Template: ComponentStory<typeof BatchJobActivityList> = (args) => {
    const { batchJobs, hasPollingError } = useContext(PollingContext)
    return (
        <PollingProvider>
            {!hasPollingError ? <BatchJobActivityList {...args} batchJobs={batchJobs} /> : <div>Polling error</div>}
        </PollingProvider>
    )
}

export const Default = Template.bind({})
Default.args = {
}
