import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import toast from 'react-hot-toast'
import TableToasterContainer from '.'
import Button from '../../fundamentals/button'

export default {
    title: 'Molecules/TableToasterContainer',
    component: TableToasterContainer,
} as ComponentMeta<typeof TableToasterContainer>

const Template: ComponentStory<typeof TableToasterContainer> = (args) => (
    <Button
        onClick={() => {
            toast.custom(
                (t) => (
                    <TableToasterContainer {...args} toast={t}>
                        <span>Toast</span>
                    </TableToasterContainer>
                ),
                {
                    position: 'bottom-center',
                    duration: 5000,
                }
            )
        }}
        variant={'primary'}
    >
        Show notification
    </Button>
)

export const Default = Template.bind({})
Default.args = {

}
