import medusaRequest from './request'

const removeNullish = (obj: { [s: string]: unknown } | ArrayLike<unknown>) =>
    Object.entries(obj).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {})

const buildQueryFromObject = (search: object | null, prefix = '') =>
    Object.entries(search)
        .map(([key, value]) =>
            typeof value === 'object'
                ? buildQueryFromObject(value, key)
                : `${prefix ? `${prefix}[${key}]` : `${key}`}=${value}`
        )
        .join('&')

export default {
    returnReasons: {
        retrieve(id: any) {
            const path = `/admin/return-reasons/${id}`
            return medusaRequest('GET', path)
        },
        list() {
            const path = `/admin/return-reasons`
            return medusaRequest('GET', path)
        },
        create(payload: {} | undefined) {
            const path = `/admin/return-reasons`
            return medusaRequest('POST', path, payload)
        },
        update(id: any, payload: {} | undefined) {
            const path = `/admin/return-reasons/${id}`
            return medusaRequest('POST', path, payload)
        },
        delete(id: any) {
            const path = `/admin/return-reasons/${id}`
            return medusaRequest('DELETE', path)
        },
    },
    apps: {
        authorize(data: {} | undefined) {
            const path = `/admin/apps/authorizations`
            return medusaRequest('POST', path, data)
        },

        list() {
            const path = `/admin/apps`
            return medusaRequest('GET', path)
        },
    },
    auth: {
        session() {
            const path = `/admin/auth`
            return medusaRequest('GET', path)
        },
        authenticate(details: {} | undefined) {
            const path = `/admin/auth`
            return medusaRequest('POST', path, details)
        },
        deauthenticate(details: any) {
            const path = `/admin/auth`
            return medusaRequest('DELETE', path)
        },
    },
    notifications: {
        list(search = {}) {
            const params = Object.keys(search)
                .map((k) => `${k}=${search[k]}`)
                .join('&')
            const path = `/admin/notifications${params && `?${params}`}`
            return medusaRequest('GET', path)
        },
        resend(id: any, config: {} | undefined) {
            const path = `/admin/notifications/${id}/resend`
            return medusaRequest('POST', path, config)
        },
    },
    notes: {
        listByResource(resourceId: any) {
            const path = `/admin/notes?resource_id=${resourceId}`
            return medusaRequest('GET', path)
        },
        async create(resourceId: any, resourceType: any, value: any) {
            const path = `/admin/notes/`
            return medusaRequest('POST', path, {
                resource_id: resourceId,
                resource_type: resourceType,
                value,
            })
        },
        update(id: any, value: any) {
            const path = `/admin/notes/${id}`
            return medusaRequest('POST', path, { value })
        },
        delete(id: any) {
            const path = `/admin/notes/${id}`
            return medusaRequest('DELETE', path)
        },
    },

    customers: {
        retrieve(customerId: any) {
            const path = `/admin/customers/${customerId}`
            return medusaRequest('GET', path)
        },
        list(search = '') {
            const path = `/admin/customers${search}`
            return medusaRequest('GET', path)
        },
        update(customerId: any, update: {} | undefined) {
            const path = `/admin/customers/${customerId}`
            return medusaRequest('POST', path, update)
        },
    },
    store: {
        retrieve() {
            const path = `/admin/store`
            return medusaRequest('GET', path)
        },

        update(update: {} | undefined) {
            const path = `/admin/store`
            return medusaRequest('POST', path, update)
        },

        addCurrency(code: any) {
            const path = `/admin/store/currencies/${code}`
            return medusaRequest('POST', path)
        },

        removeCurrency(code: any) {
            const path = `/admin/store/currencies/${code}`
            return medusaRequest('DELETE', path)
        },

        listPaymentProviders() {
            const path = `/admin/store/payment-providers`
            return medusaRequest('GET', path)
        },
    },
    shippingProfiles: {
        list() {
            const path = `/admin/shipping-profiles`
            return medusaRequest('GET', path)
        },

        create(data: {} | undefined) {
            const path = `/admin/shipping-profiles`
            return medusaRequest('POST', path, data)
        },

        retrieve(profileId: any) {
            const path = `/admin/shipping-profiles/${profileId}`
            return medusaRequest('GET', path)
        },

        update(profileId: any, update: {} | undefined) {
            const path = `/admin/shipping-profiles/${profileId}`
            return medusaRequest('POST', path, update)
        },
    },

    giftCards: {
        create(giftCard: {} | undefined) {
            const path = `/admin/gift-cards`
            return medusaRequest('POST', path, giftCard)
        },

        retrieve(giftCardId: any) {
            const path = `/admin/gift-cards/${giftCardId}`
            return medusaRequest('GET', path)
        },

        list(search = {}) {
            const params = Object.keys(search)
                .map((k) => `${k}=${search[k]}`)
                .join('&')
            const path = `/admin/gift-cards${params && `?${params}`}`
            return medusaRequest('GET', path)
        },

        update(giftCardId: any, update: {} | undefined) {
            const path = `/admin/gift-cards/${giftCardId}`
            return medusaRequest('POST', path, update)
        },

        delete(giftCardId: any) {
            const path = `/admin/gift-cards/${giftCardId}`
            return medusaRequest('DELETE', path)
        },
    },

    variants: {
        list(search = {}) {
            const params = Object.keys(search)
                .map((k) => `${k}=${search[k]}`)
                .join('&')
            const path = `/admin/variants${params && `?${params}`}`
            return medusaRequest('GET', path)
        },
    },

    products: {
        create(product: {} | undefined) {
            const path = `/admin/products`
            return medusaRequest('POST', path, product)
        },

        retrieve(productId: any) {
            const path = `/admin/products/${productId}`
            return medusaRequest('GET', path)
        },

        update(productId: string, update: {} | undefined) {
            const path = `/admin/products/${productId}`
            return medusaRequest('POST', path, update)
        },

        delete(productId: any) {
            const path = `/admin/products/${productId}`
            return medusaRequest('DELETE', path)
        },

        list(search = {}) {
            const params = Object.keys(search)
                .map((k) => `${k}=${search[k]}`)
                .join('&')
            const path = `/admin/products${params && `?${params}`}`
            return medusaRequest('GET', path)
        },

        listTypes() {
            const path = `/admin/products/types`
            return medusaRequest('GET', path)
        },

        listTagsByUsage() {
            const path = `/admin/products/tag-usage`
            return medusaRequest('GET', path)
        },

        variants: {
            create(productId: any, variant: {} | undefined) {
                const path = `/admin/products/${productId}/variants`
                return medusaRequest('POST', path, variant)
            },

            retrieve(productId: any, variantId: any) {
                const path = `/admin/products/${productId}/variants/${variantId}`
                return medusaRequest('GET', path)
            },

            update(productId: any, variantId: any, update: {} | undefined) {
                const path = `/admin/products/${productId}/variants/${variantId}`
                return medusaRequest('POST', path, update)
            },

            delete(productId: any, variantId: any) {
                const path = `/admin/products/${productId}/variants/${variantId}`
                return medusaRequest('DELETE', path)
            },

            list(productId: any) {
                const path = `/admin/products/${productId}/variants`
                return medusaRequest('GET', path)
            },
        },

        options: {
            create(productId: any, option: {} | undefined) {
                const path = `/admin/products/${productId}/options`
                return medusaRequest('POST', path, option)
            },

            delete(productId: any, optionId: any) {
                const path = `/admin/products/${productId}/options/${optionId}`
                return medusaRequest('DELETE', path)
            },

            update(productId: any, optionId: any, update: {} | undefined) {
                const path = `/admin/products/${productId}/options/${optionId}`
                return medusaRequest('POST', path, update)
            },
        },
    },

    swaps: {
        retrieve(swapId: any) {
            const path = `/admin/swaps/${swapId}`
            return medusaRequest('GET', path)
        },

        update(orderId: any, update: {} | undefined) {
            const path = `/admin/orders/${orderId}`
            return medusaRequest('POST', path, update)
        },

        list(search = {}) {
            const params = Object.keys(search)
                .map((k) => {
                    if (search[k] === '' || search[k] === null) {
                        return null
                    }
                    return `${k}=${search[k]}`
                })
                .filter((s) => !!s)
                .join('&')
            const path = `/admin/swaps${params && `?${params}`}`
            return medusaRequest('GET', path)
        },
    },

    returns: {
        list(search = {}) {
            const clean = removeNullish(search)
            const params = Object.keys(clean)
                .map((k) => `${k}=${search[k]}`)
                .filter((s) => !!s)
                .join('&')
            const path = `/admin/returns${params && `?${params}`}`
            return medusaRequest('GET', path)
        },
    },

    collections: {
        create(payload: {} | undefined) {
            const path = `/admin/collections`
            return medusaRequest('POST', path, payload)
        },

        retrieve(id: any) {
            const path = `/admin/collections/${id}`
            return medusaRequest('GET', path)
        },

        list(search = {}) {
            const path = `/admin/collections`
            return medusaRequest('GET', path)
        },

        addProducts(id: string | undefined, payload: {} | undefined) {
            const path = `/admin/collections/${id}/products/batch`
            return medusaRequest('POST', path, payload)
        },

        removeProducts(id: string | undefined, payload: {} | undefined) {
            const path = `/admin/collections/${id}/products/batch`
            return medusaRequest('DELETE', path, payload)
        },
    },

    orders: {
        create(order: {} | undefined) {
            const path = `/admin/orders`
            return medusaRequest('POST', path, order)
        },

        async receiveReturn(returnId: any, payload: {} | undefined) {
            const path = `/admin/returns/${returnId}/receive`

            const received = await medusaRequest('POST', path, payload)

            let orderId
            if (received.data.return?.order_id) {
                orderId = received.data.return.order_id
            }

            if (received.data.return?.swap?.id) {
                orderId = received.data.return?.swap?.order_id
            }

            return this.retrieve(orderId)
        },

        cancelReturn(returnId: any) {
            const path = `/admin/returns/${returnId}/cancel`
            return medusaRequest('POST', path)
        },

        retrieve(orderId: any, search = {}) {
            const params = Object.keys(search)
                .map((k) => {
                    if (search[k] === '' || search[k] === null) {
                        return null
                    }
                    return `${k}=${search[k]}`
                })
                .filter((s) => !!s)
                .join('&')
            const path = `/admin/orders/${orderId}${params && `?${params}`}`
            return medusaRequest('GET', path)
        },

        update(orderId: any, update: {} | undefined) {
            const path = `/admin/orders/${orderId}`
            return medusaRequest('POST', path, update)
        },

        list(search = {}) {
            const clean = removeNullish(search)
            const params = Object.keys(clean)
                .map((k) => `${k}=${search[k]}`)
                .filter((s) => !!s)
                .join('&')

            const path = `/admin/orders${params && `?${params}`}`
            return medusaRequest('GET', path)
        },

        complete(orderId: any) {
            const path = `/admin/orders/${orderId}/complete`
            return medusaRequest('POST', path, {})
        },

        archive(orderId: any) {
            const path = `/admin/orders/${orderId}/archive`
            return medusaRequest('POST', path, {})
        },

        capturePayment(orderId: any) {
            const path = `/admin/orders/${orderId}/capture`
            return medusaRequest('POST', path, {})
        },

        createShipment(orderId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/shipment`
            return medusaRequest('POST', path, payload)
        },

        updateClaim(orderId: any, claimId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/claims/${claimId}`
            return medusaRequest('POST', path, payload)
        },

        createSwap(orderId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/swaps`
            return medusaRequest('POST', path, payload)
        },

        cancelSwap(orderId: any, swapId: any) {
            const path = `/admin/orders/${orderId}/swaps/${swapId}/cancel`
            return medusaRequest('POST', path)
        },

        createClaim(orderId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/claims`
            return medusaRequest('POST', path, payload)
        },

        cancelClaim(orderId: any, claimId: any) {
            const path = `/admin/orders/${orderId}/claims/${claimId}/cancel`
            return medusaRequest('POST', path)
        },

        fulfillClaim(orderId: any, claimId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/claims/${claimId}/fulfillments`
            return medusaRequest('POST', path, payload)
        },

        cancelClaimFulfillment(orderId: any, claimId: any, fulfillmentId: any) {
            const path = `/admin/orders/${orderId}/claims/${claimId}/fulfillments/${fulfillmentId}/cancel`
            return medusaRequest('POST', path)
        },

        createClaimShipment(orderId: any, cId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/claims/${cId}/shipments`
            return medusaRequest('POST', path, payload)
        },

        createSwapShipment(orderId: any, swapId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/swaps/${swapId}/shipments`
            return medusaRequest('POST', path, payload)
        },

        fulfillSwap(orderId: any, swapId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/swaps/${swapId}/fulfillments`
            return medusaRequest('POST', path, payload)
        },

        cancelSwapFulfillment(orderId: any, swapId: any, fulfillmentId: any) {
            const path = `/admin/orders/${orderId}/swaps/${swapId}/fulfillments/${fulfillmentId}/cancel`
            return medusaRequest('POST', path)
        },

        processSwapPayment(orderId: string, swapId: string) {
            const path = `/admin/orders/${orderId}/swaps/${swapId}/process-payment`
            return medusaRequest('POST', path)
        },

        createFulfillment(orderId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/fulfillment`
            return medusaRequest('POST', path, payload)
        },

        cancelFulfillment(orderId: any, fulfillmentId: any) {
            const path = `/admin/orders/${orderId}/fulfillments/${fulfillmentId}/cancel`
            return medusaRequest('POST', path)
        },

        refund(orderId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/refund`
            return medusaRequest('POST', path, payload)
        },

        requestReturn(orderId: any, payload: {} | undefined) {
            const path = `/admin/orders/${orderId}/return`
            return medusaRequest('POST', path, payload)
        },

        cancel(orderId: any) {
            const path = `/admin/orders/${orderId}/cancel`
            return medusaRequest('POST', path, {})
        },
    },

    shippingOptions: {
        create(shippingOption: {} | undefined) {
            const path = `/admin/shipping-options`
            return medusaRequest('POST', path, shippingOption)
        },

        retrieve(id: any) {
            const path = `/admin/shipping-options/${id}`
            return medusaRequest('POST', path)
        },

        delete(id: any) {
            const path = `/admin/shipping-options/${id}`
            return medusaRequest('DELETE', path)
        },

        list(search = {}) {
            const params = Object.keys(search)
                .map((k) => `${k}=${search[k]}`)
                .join('&')
            const path = `/admin/shipping-options${params && `?${params}`}`
            return medusaRequest('GET', path)
        },

        update(id: any, update: {} | undefined) {
            const path = `/admin/shipping-options/${id}`
            return medusaRequest('POST', path, update)
        },
    },

    discounts: {
        create(discount: {} | undefined) {
            const path = `/admin/discounts`
            return medusaRequest('POST', path, discount)
        },

        retrieve(discountId: any) {
            const path = `/admin/discounts/${discountId}`
            return medusaRequest('GET', path)
        },

        update(discountId: any, update: {} | undefined) {
            const path = `/admin/discounts/${discountId}`
            return medusaRequest('POST', path, update)
        },

        delete(discountId: any) {
            const path = `/admin/discounts/${discountId}`
            return medusaRequest('DELETE', path)
        },

        list(search = {}) {
            const params = buildQueryFromObject(search)
            const path = `/admin/discounts${params && `?${params}`}`
            return medusaRequest('GET', path)
        },

        retrieveByCode(code: any) {
            const path = `/admin/discounts/code/${code}`
            return medusaRequest('GET', path)
        },
    },

    regions: {
        list() {
            const path = `/admin/regions`
            return medusaRequest('GET', path)
        },

        retrieve(id: any) {
            const path = `/admin/regions/${id}`
            return medusaRequest('GET', path)
        },

        create(region: {} | undefined) {
            const path = `/admin/regions`
            return medusaRequest('POST', path, region)
        },

        update(id: any, region: {} | undefined) {
            const path = `/admin/regions/${id}`
            return medusaRequest('POST', path, region)
        },

        delete(id: any) {
            const path = `/admin/regions/${id}`
            return medusaRequest('DELETE', path)
        },

        fulfillmentOptions: {
            list(regionId: any) {
                const path = `/admin/regions/${regionId}/fulfillment-options`
                return medusaRequest('GET', path)
            },
        },
    },

    uploads: {
        create(files: any[]) {
            const formData = new FormData()
            for (const f of files) {
                formData.append('files', f)
            }

            return medusaRequest('POST', '/admin/uploads', formData)
        },
    },

    draftOrders: {
        create(draftOrder: {} | undefined) {
            const path = `/admin/draft-orders`
            return medusaRequest('POST', path, draftOrder)
        },

        addLineItem(draftOrderId: any, line: {} | undefined) {
            const path = `/admin/draft-orders/${draftOrderId}/line-items`
            return medusaRequest('POST', path, line)
        },

        updateLineItem(draftOrderId: any, lineId: any, line: {} | undefined) {
            const path = `/admin/draft-orders/${draftOrderId}/line-items/${lineId}`
            return medusaRequest('POST', path, line)
        },

        deleteLineItem(draftOrderId: any, lineId: any) {
            const path = `/admin/draft-orders/${draftOrderId}/line-items/${lineId}`
            return medusaRequest('DELETE', path)
        },

        retrieve(id: any) {
            const path = `/admin/draft-orders/${id}`
            return medusaRequest('GET', path)
        },

        delete(id: any) {
            const path = `/admin/draft-orders/${id}`
            return medusaRequest('DELETE', path)
        },

        update(id: any, payload: {} | undefined) {
            const path = `/admin/draft-orders/${id}`
            return medusaRequest('POST', path, payload)
        },

        registerSystemPayment(id: any) {
            const path = `/admin/draft-orders/${id}/pay`
            return medusaRequest('POST', path)
        },

        list(search: any = {}) {
            const params = Object.keys(search)
                .map((k) => {
                    if (search[k] === '' || search[k] === null) {
                        return null
                    }
                    return `${k}=${search[k]}`
                })
                .filter((s) => !!s)
                .join('&')
            const path = `/admin/draft-orders${params && `?${params}`}`
            return medusaRequest('GET', path)
        },
    },
    invites: {
        create(data: {} | undefined) {
            const path = `/admin/invites`
            return medusaRequest('POST', path, data)
        },
        resend(inviteId: any) {
            const path = `/admin/invites/${inviteId}/resend`
            return medusaRequest('POST', path)
        },
        delete(inviteId: any) {
            const path = `/admin/invites/${inviteId}`
            return medusaRequest('DELETE', path)
        },
        list() {
            const path = `/admin/invites`
            return medusaRequest('GET', path)
        },
        accept(data: {} | undefined) {
            const path = `/admin/invites/accept`
            return medusaRequest('POST', path, data)
        },
    },
    users: {
        resetPasswordToken(data: {} | undefined) {
            const path = `/admin/users/password-token`
            return medusaRequest('POST', path, data)
        },
        resetPassword(data: {} | undefined) {
            const path = `/admin/users/reset-password`
            return medusaRequest('POST', path, data)
        },

        list() {
            const path = `/admin/users`
            return medusaRequest('GET', path)
        },

        retrieve(userId: any) {
            const path = `/admin/users/${userId}`
            return medusaRequest('GET', path)
        },

        update(userId: string, data: {} | undefined) {
            const path = `/admin/users/${userId}`
            return medusaRequest('POST', path, data)
        },

        delete(userId: any) {
            const path = `/admin/users/${userId}`
            return medusaRequest('DELETE', path)
        },
    },
}
