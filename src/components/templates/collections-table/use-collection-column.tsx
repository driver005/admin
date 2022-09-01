import moment from 'moment'
import React, { useMemo } from 'react'
import Tooltip from '../../atoms/tooltip'

const useCollectionTableColumn = () => {
    const columns = useMemo(
        () => [
            {
                Header: 'Title',
                accessor: 'title',
                Cell: ({ row: { original } }: any) => {
                    return (
                        <div className="flex items-center">
                            {original.title}
                        </div>
                    )
                },
            },
            {
                Header: 'Handle',
                accessor: 'handle',
                Cell: ({ cell: { value } }: any) => <div>/{value}</div>,
            },
            {
                Header: 'Created At',
                accessor: 'created_at',
                Cell: ({ cell: { value } }: any) => (
                    <Tooltip
                        content={moment(value).format('DD MMM YYYY hh:mm A')}
                    >
                        {moment(value).format('DD MMM YYYY')}
                    </Tooltip>
                ),
            },
            {
                Header: 'Updated At',
                accessor: 'updated_at',
                Cell: ({ cell: { value } }: any) => (
                    <Tooltip
                        content={moment(value).format('DD MMM YYYY hh:mm A')}
                    >
                        {moment(value).format('DD MMM YYYY')}
                    </Tooltip>
                ),
            },
            {
                Header: 'Products',
                accessor: 'products',
                Cell: ({ cell: { value } }: any) => {
                    return <div>{value?.length || '-'}</div>
                },
            },
        ],
        []
    )

    return [columns]
}

export default useCollectionTableColumn
