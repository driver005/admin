import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import toast from 'react-hot-toast'
import FormErrorToaster from '.'
import Button from '../../fundamentals/button'

export default {
    title: 'Molecules/FormErrorToaster',
    component: FormErrorToaster,
} as ComponentMeta<typeof FormErrorToaster>

const Template: ComponentStory<typeof FormErrorToaster> = (args) => (
    <Button
        onClick={() => {
            toast.custom(
                (t) => (
                    <FormErrorToaster {...args} toast={t} />
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
    title: 'Error',
    message: 'Add Error'
}
