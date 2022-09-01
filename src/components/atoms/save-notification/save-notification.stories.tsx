import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import toast from 'react-hot-toast'
import SaveNotification from '.'
import Button from '../../fundamentals/button'
import ErrorState from './error-state'
import SavingState from './saving-state'
import SuccessState from './success-state'
export default {
    title: 'Atoms/SaveNotification',
    component: SaveNotification,
} as ComponentMeta<typeof SaveNotification>

const SaveNotificationTemplate: ComponentStory<typeof SaveNotification> = (args) => (
    <div className="h-[200px] w-[750px]">
        <Button
            onClick={() => {
                toast.custom(
                    (t) => (
                        <SaveNotification
                            toast={t}
                            onSave={() => new Promise((resolve, reject) => {
                                resolve()
                            })}
                            reset={() => {}} />
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

const ErrorStateTemplate: ComponentStory<typeof ErrorState> = (args) => (
    <div className="h-[200px] w-[750px]">
        <Button
            onClick={() => {
                toast.custom(
                    (t) => (
                        <ErrorState
                            toast={t}
                            onDismiss={() => toast.dismiss(t.id)}
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

const SavingStateTemplate: ComponentStory<typeof SavingState> = (args) => (
    <div className="h-[200px] w-[750px]">
        <Button
            onClick={() => {
                toast.custom(
                    (t) => (
                        <SavingState
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

const SuccessStateTemplate: ComponentStory<typeof SuccessState> = (args) => (
    <div className="h-[200px] w-[750px]">
        <Button
            onClick={() => {
                toast.custom(
                    (t) => (
                        <SuccessState
                            toast={t}
                            onDismiss={() => toast.dismiss(t.id)}
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


export const SaveNotificationExample = SaveNotificationTemplate.bind({})
SaveNotificationExample.args = {
}

export const ErrorStateExample = ErrorStateTemplate.bind({})
ErrorStateExample.args = {
}

export const SavingStateExample = SavingStateTemplate.bind({})
SavingStateExample.args = {
}

export const SuccessStateExample = SuccessStateTemplate.bind({})
SuccessStateExample.args = {
}



