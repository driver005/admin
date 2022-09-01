export const getProductStatusVariant = (title: string) => {
    switch (title) {
        case 'proposed':
            return 'warning'
        case 'published':
            return 'success'
        case 'rejected':
            return 'danger'
        case 'draft':
        default:
            return 'default'
    }
}
