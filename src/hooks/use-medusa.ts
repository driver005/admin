import { useContext, useEffect, useState } from 'react'
import { CacheContext } from '../context/cache'
import Medusa from '../services/api'
import useNotification from './use-notification'

const getCacheKey = (endpoint: any, subcomponent: any, query: any) => {
    if (!query) {
        if (subcomponent.list) {
            return `${endpoint}.list`
        } else {
            return `${endpoint}.retrieve`
        }
    } else if (query.id) {
        return `${endpoint}.retrieve.${query.id}`
    } else if (!query.id) {
        return `${endpoint}.list.${JSON.stringify(query.search)}`
    }
}

const useMedusa = (endpoint: string, query?: any) => {
    const subcomponent = Medusa[endpoint]
    if (!subcomponent) {
        throw Error(`Endpoint: "${endpoint}", does not exist`)
    }

    const cacheKey: any = getCacheKey(endpoint, subcomponent, query)
    const { cache, setCache }: any = useContext(CacheContext)

    const [hasCache] = useState(!!cache[cacheKey])
    const [isLoading, setLoading] = useState(true)
    const [isReloading, setReloading] = useState(false)
    const [didFail, setDidFail] = useState(false)
    const [result, setResult] = useState(hasCache ? cache[cacheKey] : {})

    const fetchData = async (refresh: boolean, query: any) => {
        if (refresh) {
            setReloading(true)
        } else {
            setLoading(true)
        }
        try {
            if (!query) {
                if (subcomponent.list) {
                    const { data }: any = await subcomponent.list()
                    setResult(data)
                    setLoading(false)
                    setReloading(false)
                } else {
                    const { data }: any = await subcomponent.retrieve()
                    setResult(data)
                    setLoading(false)
                    setReloading(false)
                }
            } else if (query.id) {
                const { data }: any = await subcomponent.retrieve(query.id)
                setResult(data)
                setLoading(false)
                setReloading(false)
            } else if (!query.id) {
                if (cache[cacheKey]) {
                    setResult(cache[cacheKey])
                    setLoading(false)
                }
                const { data }: any = await subcomponent.list(query.search)
                setCache(cacheKey, data)
                setResult(data)
            }
            setLoading(false)
            setReloading(false)
        } catch (error) {
            setDidFail(true)
            setLoading(false)
            setReloading(false)
        }
    }

    const notification = useNotification()

    useEffect(() => {
        fetchData(false, query)
    }, [])

    const value = {
        ...result,
        refresh: (query: any) => fetchData(true, query),
        hasCache,
        isLoading,
        isReloading,
        notification,
        didFail,
    }

    if (subcomponent.update && query && query.id) {
        value.update = (updateData: any) =>
            subcomponent.update(query.id, updateData).then(({ data }: any) => {
                setResult(data)
            })
    }

    if (subcomponent.delete && query && query.id) {
        value.delete = () => subcomponent.delete(query.id)
    }

    switch (endpoint) {
        case 'orders':
            if (query && query.id) {
                value.capturePayment = () => {
                    return subcomponent
                        .capturePayment(query.id)
                        .then(({ data }: any) => {
                            setResult(data)
                        })
                }

                value.archive = () => {
                    return subcomponent
                        .archive(query.id)
                        .then(({ data }: any) => {
                            setResult(data)
                        })
                }

                value.complete = () => {
                    return subcomponent
                        .complete(query.id)
                        .then(({ data }: any) => {
                            setResult(data)
                        })
                }

                value.refund = (payload: any) => {
                    return subcomponent
                        .refund(query.id, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.updateClaim = (claimId: any, payload: any) => {
                    return subcomponent
                        .updateClaim(query.id, claimId, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.createShipment = (payload: any) => {
                    return subcomponent
                        .createShipment(query.id, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.processSwapPayment = (swapId: any) => {
                    return subcomponent
                        .processSwapPayment(query.id, swapId)
                        .then(({ data }: any) => setResult(data))
                }

                value.createSwapShipment = (swapId: any, payload: any) => {
                    return subcomponent
                        .createSwapShipment(query.id, swapId, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.createClaimShipment = (claim: any, payload: any) => {
                    return subcomponent
                        .createClaimShipment(query.id, claim, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.createSwap = (payload: any) => {
                    return subcomponent
                        .createSwap(query.id, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.cancelSwap = (swap: {
                    return_order: { id: any }
                    id: any
                }) => {
                    return subcomponent
                        .cancelReturn(swap.return_order.id)
                        .then(({ data }: any) => {
                            subcomponent.cancelSwap(query.id, swap.id)
                            return data
                        })
                        .then(({ data }: any) => setResult(data))
                }

                value.createClaim = (payload: any) => {
                    return subcomponent
                        .createClaim(query.id, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.cancelClaim = (claimId: any) => {
                    return subcomponent
                        .cancelClaim(query.id, claimId)
                        .then(({ data }: any) => setResult(data))
                }

                value.fulfillSwap = (swapId: any, payload: any) => {
                    return subcomponent
                        .fulfillSwap(query.id, swapId, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.cancelSwapFulfillment = (
                    swapId: any,
                    fulfillmentId: any
                ) => {
                    return subcomponent
                        .cancelSwapFulfillment(query.id, swapId, fulfillmentId)
                        .then(({ data }: any) => setResult(data))
                }

                value.fulfillClaim = (claimId: any, payload: any) => {
                    return subcomponent
                        .fulfillClaim(query.id, claimId, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.cancelClaimFulfillment = (
                    claimId: any,
                    fulfillmentId: any
                ) => {
                    return subcomponent
                        .cancelClaimFulfillment(
                            query.id,
                            claimId,
                            fulfillmentId
                        )
                        .then(({ data }: any) => setResult(data))
                }

                value.createFulfillment = (payload: any) => {
                    return subcomponent
                        .createFulfillment(query.id, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.cancelFulfillment = (fulfillmentId: any) => {
                    return subcomponent
                        .cancelFulfillment(query.id, fulfillmentId)
                        .then(({ data }: any) => setResult(data))
                }

                value.requestReturn = (payload: any) => {
                    return subcomponent
                        .requestReturn(query.id, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.receiveReturn = (returnId: any, payload: any) => {
                    return subcomponent
                        .receiveReturn(returnId, payload)
                        .then(({ data }: any) => setResult(data))
                }

                value.cancelReturn = (returnId: any) => {
                    return subcomponent
                        .cancelReturn(returnId)
                        .then(({ data }: any) => setResult(data))
                }

                value.cancel = () => {
                    return subcomponent
                        .cancel(query.id)
                        .then(({ data }: any) => setResult(data))
                }
            }
            break
        case 'store':
            value.update = (updateData: any) => {
                return subcomponent.update(updateData).then(({ data }: any) => {
                    setResult(data)
                })
            }
            value.addCurrency = (code: any) =>
                subcomponent.addCurrency(code).then(({ data }: any) => {
                    setResult(data)
                })
            value.removeCurrency = (code: any) =>
                subcomponent.removeCurrency(code).then(({ data }: any) => {
                    setResult(data)
                })
            break
        case 'products':
            if (query && query.id) {
                const variantMethods = {
                    create: (variant: any) => {
                        return subcomponent.variants
                            .create(query.id, variant)
                            .then(({ data }: any) => {
                                setResult(data)
                            })
                    },
                    retrieve: (variantId: any) => {
                        return subcomponent.variants
                            .retrieve(query.id, variantId)
                            .then(({ data }: any) => {
                                setResult(data)
                            })
                    },
                    update: (variantId: any, update: any) => {
                        return subcomponent.variants
                            .update(query.id, variantId, update)
                            .then(({ data }: any) => {
                                setResult(data)
                            })
                    },
                    delete: (variantId: any) => {
                        return subcomponent.variants
                            .delete(query.id, variantId)
                            .then(({ data }: any) => {
                                setResult(data)
                            })
                    },
                    list: () => {
                        return subcomponent.variants.delete(query.id)
                    },
                }
                value.variants = variantMethods

                const optionMethods = {
                    create: (option: any) => {
                        return subcomponent.options
                            .create(query.id, option)
                            .then(({ data }: any) => {
                                setResult(data)
                            })
                    },
                    update: (optionId: any, update: any) => {
                        return subcomponent.options
                            .update(query.id, optionId, update)
                            .then(({ data }: any) => {
                                setResult(data)
                            })
                    },
                    delete: (optionId: any) => {
                        return subcomponent.options
                            .delete(query.id, optionId)
                            .then(({ data }: any) => {
                                setResult(data)
                            })
                    },
                }
                value.options = optionMethods
            }
            break
        case 'regions':
            value.fulfillmentOptions = subcomponent.fulfillmentOptions
            break
        default:
            break
    }

    return value
}

export default useMedusa
