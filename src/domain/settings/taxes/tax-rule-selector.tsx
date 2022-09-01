import React, { useContext, useState } from 'react'
import Button from '../../../components/fundamentals/button'
import RadioGroup from '../../../components/organisms/radio-group'
import Modal from '../../../components/molecules/modal'
import { LayeredModalContext } from '../../../components/molecules/modal/layered-modal'
import { ProductSelector } from './product-selector'
import { ProductTypeSelector } from './product-type-selector'
import { ShippingOptionSelector } from './shipping-option-selector'

enum TaxRuleType {
    PRODUCTS = 'products',
    PRODUCT_TYPES = 'product_types',
    SHIPPING_OPTIONS = 'shipping_options',
}

type TaxRuleSelectorProps = {
    regionId: string
    onSubmit: (rule: any) => void
    selectedItems?: any
    isLargeModal?: boolean
    type?: TaxRuleType
    items?: string[]
}

type TaxRuleSet = {
    type: TaxRuleType
    items: string[]
}

const TaxRuleSelector: React.FC<TaxRuleSelectorProps> = ({
    regionId,
    type,
    items,
    onSubmit,
    isLargeModal = true,
}) => {
    const isLocked = type && items

    const { pop } = useContext(LayeredModalContext)
    const [selectedType, setSelectedType] = useState<string>(
        type ?? TaxRuleType.PRODUCTS
    )
    const [selectedRule, setSelectedRule] = useState<TaxRuleSet>({
        type: type ?? TaxRuleType.PRODUCTS,
        items: items ?? [],
    })

    const handleSubmit = () => {
        onSubmit(selectedRule)
        pop()
    }

    const handleTypeChange = (t: any) => {
        if (t !== selectedType) {
            setSelectedType(t)
            setSelectedRule({
                type: t,
                items: [],
            })
        }
    }

    const handleItemChanges = (items: any) => {
        setSelectedRule((prev) => {
            return {
                ...prev,
                items,
            }
        })
    }

    return (
        <>
            <Modal.Content isLargeModal={isLargeModal}>
                <div className="min-h-[680px]">
                    {!isLocked && (
                        <>
                            <div className="inter-base-semibold mb-large">
                                Type
                            </div>
                            <RadioGroup.Root
                                className="flex gap-base"
                                value={selectedType}
                                onValueChange={handleTypeChange}
                            >
                                <RadioGroup.Item
                                    className="flex-1"
                                    label={'Products'}
                                    description={'Select individual products'}
                                    value={TaxRuleType.PRODUCTS}
                                />
                                <RadioGroup.Item
                                    className="flex-1"
                                    label={'Product Types'}
                                    description={'Select product types'}
                                    value={TaxRuleType.PRODUCT_TYPES}
                                />
                                <RadioGroup.Item
                                    className="flex-1"
                                    label={'Shipping Options'}
                                    description={'Select shipping options'}
                                    value={TaxRuleType.SHIPPING_OPTIONS}
                                />
                            </RadioGroup.Root>
                        </>
                    )}
                    {selectedType === TaxRuleType.PRODUCTS && (
                        <ProductSelector
                            items={selectedRule.items}
                            onChange={handleItemChanges}
                        />
                    )}
                    {selectedType === TaxRuleType.PRODUCT_TYPES && (
                        <ProductTypeSelector
                            items={selectedRule.items}
                            onChange={handleItemChanges}
                        />
                    )}
                    {selectedType === TaxRuleType.SHIPPING_OPTIONS && (
                        <ShippingOptionSelector
                            regionId={regionId}
                            items={selectedRule.items}
                            onChange={handleItemChanges}
                        />
                    )}
                </div>
            </Modal.Content>
            <Modal.Footer isLargeModal={isLargeModal}>
                <div className="flex w-full justify-end gap-x-xsmall">
                    <Button
                        variant="ghost"
                        size="small"
                        className="w-[112px]"
                        onClick={() => pop()}
                    >
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        className="w-[112px]"
                        size="small"
                        onClick={handleSubmit}
                    >
                        Add
                    </Button>
                </div>
            </Modal.Footer>
        </>
    )
}

export default TaxRuleSelector