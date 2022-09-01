import React from 'react'
import Checkbox, { CheckboxProps } from '../components/atoms/checkbox'
import Table from '../components/molecules/table'

type IndeterminateCheckboxProps = CheckboxProps & {
    indeterminate: any
}

const IndeterminateCheckbox = React.forwardRef<
    HTMLInputElement,
    IndeterminateCheckboxProps
>(({ indeterminate, label, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef: any = ref || defaultRef

    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
        <div onClickCapture={(e) => e.stopPropagation()}>
            <Checkbox
                className="justify-center"
                label={label ? label : ''}
                ref={resolvedRef}
                {...rest}
            />
        </div>
    )
})

export const useSelectionColumn = () => {
    return {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }: any) => (
            <Table.Cell className="text-center">
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </Table.Cell>
        ),
    }
}
