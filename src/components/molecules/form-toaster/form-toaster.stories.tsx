import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import toast from 'react-hot-toast'
import FormToasterContainer from '.'
import Button from '../../fundamentals/button'

export default {
    title: 'Molecules/FormToasterContainer',
    component: FormToasterContainer,
} as ComponentMeta<typeof FormToasterContainer>

const Template: ComponentStory<typeof FormToasterContainer> = (args) => (
    <Button
        onClick={() => {
            toast.custom(
                (t) => (
                    <FormToasterContainer {...args} toast={t}>
                        <FormToasterContainer.Actions>
                            <FormToasterContainer.ActionButton
                                onClick={() => {}}
                            >
                                Save
                            </FormToasterContainer.ActionButton>
                            <FormToasterContainer.DiscardButton onClick={() => {}}>
                                Discard
                            </FormToasterContainer.DiscardButton>
                        </FormToasterContainer.Actions>
                    </FormToasterContainer>
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
    isLoading: false,
}
