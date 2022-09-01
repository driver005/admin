import { RouteComponentProps, Router, useLocation } from '@reach/router'
import { navigate } from 'gatsby'
import { useAdminCreateBatchJob, useAdminCreateCollection } from 'medusa-react'
import React, { useEffect, useState } from 'react'
import Button from '../../components/fundamentals/button'
import ExportIcon from '../../components/fundamentals/icons/export-icon'
import PlusIcon from '../../components/fundamentals/icons/plus-icon'
import BodyCard from '../../components/organisms/body-card'
import TableViewHeader from '../../components/organisms/custom-table-header'
import ExportModal from '../../components/organisms/export-modal'
import AddCollectionModal from '../../components/templates/collection-modal'
import CollectionsTable from '../../components/templates/collections-table'
import ProductTable from '../../components/templates/product-table'
import useNotification from '../../hooks/use-notification'
import useToggleState from '../../hooks/use-toggle-state'
import { getErrorMessage } from '../../utils/error-messages'
import EditProductPage from './edit'
import NewProductPage from './new'

const VIEWS = ['products', 'collections']

const ProductIndex: React.FC<RouteComponentProps> = () => {
    const location = useLocation()
    const [view, setView] = useState('products')

    const createBatchJob = useAdminCreateBatchJob()

    const notification = useNotification()

    const createCollection = useAdminCreateCollection()

    useEffect(() => {
        if (location.search.includes('?view=collections')) {
            setView('collections')
        }
    }, [location])

    useEffect(() => {
        location.search = ''
    }, [view])

    const CurrentView = () => {
        switch (view) {
            case 'products':
                return <ProductTable />
            default:
                return <CollectionsTable />
        }
    }

    const CurrentAction = () => {
        switch (view) {
            case 'products':
                return (
                    <div className="flex space-x-2">
                        <Button
                            variant="secondary"
                            size="small"
                            onClick={() => openExportModal()}
                        >
                            <ExportIcon size={20} />
                            Export Products
                        </Button>
                        <Button
                            variant="secondary"
                            size="small"
                            onClick={() => navigate(`/a/products/new`)}
                        >
                            <PlusIcon size={20} />
                            New Product
                        </Button>
                    </div>
                )
            default:
                return (
                    <div className="flex space-x-2">
                        <Button
                            variant="secondary"
                            size="small"
                            onClick={() =>
                                setShowNewCollection(!showNewCollection)
                            }
                        >
                            <PlusIcon size={20} />
                            New Collection
                        </Button>
                    </div>
                )
        }
    }

    const [showNewCollection, setShowNewCollection] = useState(false)
    const {
        open: openExportModal,
        close: closeExportModal,
        state: exportModalOpen,
    } = useToggleState(false)

    const handleCreateCollection = async (data: any, colMetadata: any) => {
        const metadata = colMetadata
            .filter((m: any) => m.key && m.value) // remove empty metadata
            .reduce((acc: any, next: any) => {
                return {
                    ...acc,
                    [next.key]: next.value,
                }
            }, {})

        await createCollection.mutateAsync(
            { ...data, metadata },
            {
                onSuccess: ({ collection }) => {
                    notification(
                        'Success',
                        'Successfully created collection',
                        'success'
                    )
                    navigate(`/a/collections/${collection.id}`)
                    setShowNewCollection(false)
                },
                onError: (err) =>
                    notification('Error', getErrorMessage(err), 'error'),
            }
        )
    }

    const handleCreateExport = () => {
        const reqObj: any = {
            type: 'product-export',
            context: {},
        }

        createBatchJob.mutate(reqObj, {
            onSuccess: () => {
                notification(
                    'Success',
                    'Successfully initiated export',
                    'success'
                )
            },
            onError: (err) => {
                notification('Error', getErrorMessage(err), 'error')
            },
        })

        closeExportModal()
    }

    return (
        <>
            <div className="flex flex-col grow h-full">
                <div className="w-full flex flex-col grow">
                    <BodyCard
                        forceDropdown={false}
                        customActionable={CurrentAction()}
                        customHeader={
                            <TableViewHeader
                                views={VIEWS}
                                setActiveView={setView}
                                activeView={view}
                            />
                        }
                    >
                        <CurrentView />
                    </BodyCard>
                </div>
            </div>
            {showNewCollection && (
                <AddCollectionModal
                    onClose={() => setShowNewCollection(!showNewCollection)}
                    onSubmit={handleCreateCollection}
                />
            )}
            {exportModalOpen && (
                <ExportModal
                    title="Export Products"
                    handleClose={() => closeExportModal()}
                    onSubmit={handleCreateExport}
                    loading={createBatchJob.isLoading}
                />
            )}
        </>
    )
}

const Products = () => {
    return (
        <Router>
            <ProductIndex path="/" />
            <EditProductPage path=":id" />
            <NewProductPage path="new" />
        </Router>
    )
}

export default Products