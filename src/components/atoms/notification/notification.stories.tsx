import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import toast from 'react-hot-toast'
import Notification from '.'
import Button from '../../fundamentals/button'
export default {
    title: 'Atoms/Notification',
    component: Notification,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['success', 'warning', 'error', 'info'],
            },
        },
    },
} as ComponentMeta<typeof Notification>

const Template: ComponentStory<typeof Notification> = (args) => (
    <div className="h-[200px] w-[750px]">
        <Button
            onClick={() => {
                toast.custom(
                    (t) => (
                        <Notification
                            {...args}
                            toast={t}
                        />
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

    </div>
)

export const Default = Template.bind({})
Default.args = {
    message: 'Add info',
    title: 'Info',
    type: 'info'
}



