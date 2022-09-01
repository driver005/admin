import { navigate } from 'gatsby'
import { useAdminCreateProduct } from 'medusa-react'
import useNotification from '../../../hooks/use-notification'
import { getErrorMessage } from '../../../utils/error-messages'

const useCopyProduct = () => {
    const notification = useNotification()
    const createProduct = useAdminCreateProduct()

    const handleCopyProduct = async (product: any) => {
        const copy: any = {
            title: `${product.title} copy`,
            description: `${product.description}`,
            handle: `${product.handle}-copy`,
        }

        copy.options = product.options.map((po: any) => ({
            title: po.title,
        }))

        copy.variants = product.variants.map((pv: any) => ({
            title: pv.title,
            inventory_quantity: pv.inventory_quantity,
            prices: pv.prices.map((price: any) => {
                const p: any = {
                    amount: price.amount,
                }
                if (price.region_id) {
                    p.region_id = price.region_id
                }
                if (price.currency_code) {
                    p.currency_code = price.currency_code
                }

                return p
            }),
            options: pv.options.map((pvo: any) => ({ value: pvo.value })),
        }))

        if (product.type) {
            copy.type = {
                id: product.type.id,
                value: product.type.value,
            }
        }

        if (product.collection_id) {
            copy.collection_id = product.collection_id
        }

        if (product.tags) {
            copy.tags = product.tags.map(({ id, value }: any) => ({ id, value }))
        }

        if (product.thumbnail) {
            copy.thumbnail = product.thumbnail
        }

        try {
            const data = await createProduct.mutateAsync(copy)
            const newProduct = data?.product
            if (newProduct) {
                navigate(`/a/products/${newProduct.id}`)
                notification('Success', 'Created a new product', 'success')
            }
        } catch (err) {
            notification('Error', getErrorMessage(err), 'error')
        }
    }

    return handleCopyProduct
}

export default useCopyProduct
