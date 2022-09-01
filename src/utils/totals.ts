const computeShippingTotal = (shipping_methods: any[]) => {
    if (!shipping_methods) {
        return 0
    }
    return shipping_methods.reduce(
        (acc: any, method: any) => acc + method.price,
        0
    )
}

const computeSubtotal = (items: any[]) => {
    if (!items) {
        return 0
    }
    return items.reduce(
        (acc: number, item: any) => acc + item.unit_price * item.quantity,
        0
    )
}

export { computeShippingTotal, computeSubtotal }
