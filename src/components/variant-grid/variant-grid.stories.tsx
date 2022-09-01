import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import VariantGrid from '.'

const product = {
    "id": "prod_01FG1BQYJW7DZJJ7K2J7GCG9PT",
    "created_at": "2021-09-20T10:24:05.994Z",
    "updated_at": "2021-09-20T10:24:05.994Z",
    "deleted_at": null,
    "title": "Medusa Water Bottle",
    "subtitle": "Medusa",
    "description": "Stylish water bottle from Medusa Commerce",
    "handle": "water-bottle",
    "is_giftcard": false,
    "status": "published",
    "thumbnail": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png",
    "profile_id": "sp_01FG1BKDX8T2509D0XQJ263HMN",
    "weight": null,
    "length": null,
    "height": null,
    "width": null,
    "hs_code": null,
    "origin_country": null,
    "mid_code": null,
    "material": null,
    "collection_id": null,
    "type_id": null,
    "discountable": true,
    "external_id": null,
    "metadata": null,
    "variants": [
        {
            "id": "variant_01FG1BQYKA5HC9EVA563Y4HYWJ",
            "created_at": "2021-09-20T10:24:05.994Z",
            "updated_at": "2021-09-20T11:01:43.781Z",
            "deleted_at": null,
            "title": "One Size",
            "product_id": "prod_01FG1BQYJW7DZJJ7K2J7GCG9PT",
            "sku": null,
            "barcode": null,
            "ean": null,
            "upc": null,
            "inventory_quantity": 97,
            "allow_backorder": false,
            "manage_inventory": true,
            "hs_code": null,
            "origin_country": null,
            "mid_code": null,
            "material": null,
            "weight": null,
            "length": null,
            "height": null,
            "width": null,
            "metadata": null,
            "prices": [
                {
                    "id": "ma_01FG1BQYKDTHAZH40JAGMG5260",
                    "created_at": "2021-09-20T10:24:05.994Z",
                    "updated_at": "2021-09-20T10:24:05.994Z",
                    "deleted_at": null,
                    "currency_code": "eur",
                    "amount": 2500,
                    "min_quantity": null,
                    "max_quantity": null,
                    "price_list_id": null,
                    "variant_id": "variant_01FG1BQYKA5HC9EVA563Y4HYWJ",
                    "region_id": null,
                    "price_list": null
                },
                {
                    "id": "ma_01FG1BQYKESYB7WWC7NZ4ZGADC",
                    "created_at": "2021-09-20T10:24:05.994Z",
                    "updated_at": "2021-09-20T10:24:05.994Z",
                    "deleted_at": null,
                    "currency_code": "usd",
                    "amount": 3000,
                    "min_quantity": null,
                    "max_quantity": null,
                    "price_list_id": null,
                    "variant_id": "variant_01FG1BQYKA5HC9EVA563Y4HYWJ",
                    "region_id": null,
                    "price_list": null
                },
                {
                    "id": "ma_01FG1BQYKG39YWVS16KHY7CPMA",
                    "created_at": "2021-09-20T10:24:05.994Z",
                    "updated_at": "2021-09-20T10:24:05.994Z",
                    "deleted_at": null,
                    "currency_code": "dkk",
                    "amount": 200,
                    "min_quantity": null,
                    "max_quantity": null,
                    "price_list_id": null,
                    "variant_id": "variant_01FG1BQYKA5HC9EVA563Y4HYWJ",
                    "region_id": null,
                    "price_list": null
                }
            ],
            "options": [
                {
                    "id": "optval_01FG1BQYKAN4Q450D2A418BSTC",
                    "created_at": "2021-09-20T10:24:05.994Z",
                    "updated_at": "2021-09-20T10:24:05.994Z",
                    "deleted_at": null,
                    "value": "One Size",
                    "option_id": "opt_01FG1BQYJZRHBZ9G0MAFAXNA30",
                    "variant_id": "variant_01FG1BQYKA5HC9EVA563Y4HYWJ",
                    "metadata": null
                },
                {
                    "id": "optval_01FG1BQYKABXE53HE0KP0E0ZHJ",
                    "created_at": "2021-09-20T10:24:05.994Z",
                    "updated_at": "2021-09-20T10:24:05.994Z",
                    "deleted_at": null,
                    "value": "Black",
                    "option_id": "opt_01FG1BQYJZT7F45B04T1TY05MY",
                    "variant_id": "variant_01FG1BQYKA5HC9EVA563Y4HYWJ",
                    "metadata": null
                }
            ],
            "original_price": null,
            "calculated_price": null,
            "original_price_incl_tax": null,
            "calculated_price_incl_tax": null,
            "original_tax": null,
            "calculated_tax": null,
            "tax_rates": null
        }
    ],
    "images": [
        {
            "id": "img_01FG1BQYJXYEF4VWKMJA14KDFK",
            "created_at": "2021-09-20T10:24:05.994Z",
            "updated_at": "2021-09-20T10:24:05.994Z",
            "deleted_at": null,
            "url": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png",
            "metadata": null
        }
    ],
    "options": [
        {
            "id": "opt_01FG1BQYJZRHBZ9G0MAFAXNA30",
            "created_at": "2021-09-20T10:24:05.994Z",
            "updated_at": "2021-09-20T10:24:05.994Z",
            "deleted_at": null,
            "title": "Size",
            "product_id": "prod_01FG1BQYJW7DZJJ7K2J7GCG9PT",
            "metadata": null
        },
        {
            "id": "opt_01FG1BQYJZT7F45B04T1TY05MY",
            "created_at": "2021-09-20T10:24:05.994Z",
            "updated_at": "2021-09-20T10:24:05.994Z",
            "deleted_at": null,
            "title": "Color",
            "product_id": "prod_01FG1BQYJW7DZJJ7K2J7GCG9PT",
            "metadata": null
        }
    ],
    "tags": [],
    "type": null,
    "collection": null
}

export default {
    title: 'Organisms/VariantGrid',
    component: VariantGrid,
} as ComponentMeta<typeof VariantGrid>

const Template: ComponentStory<typeof VariantGrid> = (args) => (
    <VariantGrid {...args} />
)

export const Default = Template.bind({})
Default.args = {
    edit: false,
    onVariantsChange: () => {},
    product: product,
    variants: product.variants,
}
