import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import TimePicker from './time-picker'
import DatePicker from './date-picker'

export default {
    title: 'Atoms/DateTimePicker',
    component: DatePicker,
} as ComponentMeta<typeof DatePicker>

const DatePickertemplate: ComponentStory<typeof DatePicker> = (args) => (
    <div className="h-[200px] w-[750px]">
        <DatePicker {...args} />
    </div>
)

const TimePickertemplate: ComponentStory<typeof TimePicker> = (args) => (
    <div className="h-[200px] w-[750px]">
        <TimePicker {...args} />
    </div>
)

export const DatePickerExample = DatePickertemplate.bind({})
DatePickerExample.args = {
    date: new Date('01/20/2022'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmitDate: (date: any) => {},
}

export const TimePickerExample = TimePickertemplate.bind({})
TimePickerExample.args = {
    date: new Date('01/20/2022'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmitDate: (date: any) => {},
}
