export default function (provider: string) {
    switch (provider) {
        case 'primecargo':
            return {
                label: 'Prime Cargo',
                value: 'primecargo',
            }
        case 'manual':
            return {
                label: 'Manual',
                value: 'manual',
            }
        case 'webshipper':
            return {
                label: 'Webshipper',
                value: 'webshipper',
            }
        default:
            return {
                label: provider,
                value: provider,
            }
    }
}
