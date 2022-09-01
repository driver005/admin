import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FulfillmentStatus, OrderStatus, PaymentStatus, RefundStatus, ReturnStatus } from '.'

export default {
    title: 'Molecules/Status',
    argTypes: {
        paymentStatus: {
            control: {
                type: 'select',
                options: [
                    'captured',
                    'awaiting',
                    'not_paid',
                    'canceled',
                    'requires_action',
                ]
            },
        },
        orderStatus: {
            control: {
                type: 'select',
                options: [
                    'completed',
                    'pending',
                    'canceled',
                    'requires_action',
                ]
            },
        },
        fulfillmentStatus: {
            control: {
                type: 'select',
                options: [
                    'shipped',
                    'fulfilled',
                    'canceled',
                    'partially_fulfilled',
                ]
            },
        },
        returnStatus: {
            control: {
                type: 'select',
                options: [
                    'received',
                    'requested',
                    'canceled',
                    'requires_action',
                ]
            },
        },
        refundStatus: {
            control: {
                type: 'select',
                options: [
                    'na',
                    'not_refunded',
                    'refunded',
                ]
            },
        },
    }
} as ComponentMeta<any>

const PaymentStatusTemplate: ComponentStory<typeof PaymentStatus> = (args) => (
    <PaymentStatus {...args} />
)

const OrderStatusTemplate: ComponentStory<typeof OrderStatus> = (args) => (
    <OrderStatus {...args} />
)

const FulfillmentStatusTemplate: ComponentStory<typeof FulfillmentStatus> = (args) => (
    <FulfillmentStatus {...args} />
)

const ReturnStatusTemplate: ComponentStory<typeof ReturnStatus> = (args) => (
    <ReturnStatus {...args} />
)

const RefundStatusTemplate: ComponentStory<typeof RefundStatus> = (args) => (
    <RefundStatus {...args} />
)

export const PaymentStatusTemplateDefault = PaymentStatusTemplate.bind({})
PaymentStatusTemplateDefault.args = {
    paymentStatus: 'captured'
}
export const OrderStatusTemplateDefault = OrderStatusTemplate.bind({})
OrderStatusTemplateDefault.args = {
    orderStatus: 'shipped'
}
export const FulfillmentStatusTemplateDefault = FulfillmentStatusTemplate.bind({})
FulfillmentStatusTemplateDefault.args = {
    fulfillmentStatus: 'shipped'
}
export const ReturnStatusTemplateDefault = ReturnStatusTemplate.bind({})
ReturnStatusTemplateDefault.args = {
    returnStatus: 'received'
}
export const RefundStatusTemplateDefault = RefundStatusTemplate.bind({})
RefundStatusTemplateDefault.args = {
    refundStatus: 'na'
}
