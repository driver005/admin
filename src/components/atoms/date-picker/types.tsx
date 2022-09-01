import { InputHeaderProps } from '../../fundamentals/input/input-header'

export type DateTimePickerProps = {
    date: Date
    onSubmitDate: (newDate: Date) => void
} & InputHeaderProps
