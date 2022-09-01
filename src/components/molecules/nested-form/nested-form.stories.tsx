import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import ConnectForm from '.'

export default {
    title: 'Molecules/ConnectForm',
    component: ConnectForm,
} as ComponentMeta<typeof ConnectForm>

const Template: ComponentStory<typeof ConnectForm> = (args) => {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => alert(`Greetings ${data.name}`))}>
                <ConnectForm {...args}>
                    {({ register }: any) => <input {...register("name", { required: true })} placeholder='Your Name' />}
                </ConnectForm>
                <button type="submit">
                    Submit
                </button>
            </form>
        </FormProvider>

    )
}

export const Default = Template.bind({})
Default.args = {
}
