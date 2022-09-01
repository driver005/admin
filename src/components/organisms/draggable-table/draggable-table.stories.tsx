import { ComponentStory, storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import DraggableTable from '.'

storiesOf('Organisms/DraggableTable', module).add('Default', () => {
    const [entities, setEntities] = useState([
        {
            id: '1',
            role: 'member',
        },
        {
            id: '2',
            role: 'member',
        },
        {
            id: '3',
            role: 'member',
        },
        {
            id: '4',
            role: 'member',
        },
        {
            id: '5',
            role: 'member',
        },
        {
            id: '6',
            role: 'member',
        },
        {
            id: '7',
            role: 'member',
        },
    ])

    const columns = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'Role',
            accessor: 'role',
        },
    ]

    return (
        <DraggableTable
            entities={entities}
            setEntities={setEntities}
            columns={columns}
        />
    )
})

const Template: ComponentStory<typeof DraggableTable> = (args) => (
    <div className="h-large w-large">
        <DraggableTable {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
