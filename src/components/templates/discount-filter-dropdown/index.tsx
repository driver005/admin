import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import FilterDropdownContainer from '../../../components/molecules/filter-dropdown/container'
import FilterDropdownItem from '../../../components/molecules/filter-dropdown/item'
import SaveFilterItem from '../../../components/molecules/filter-dropdown/save-field'
import TabFilter from '../../../components/molecules/filter-tab'
import PlusIcon from '../../fundamentals/icons/plus-icon'

const dynamicFilters = ['normal', 'dynamic']

const dateFilters = [
    'is in the last',
    'is older than',
    'is between',
    'is after',
    'is before',
    'is equal to',
]

interface DiscountFiltersProps {
    tabs?: any
    activeTab: any
    onTabClick?: any
    onSaveTab?: any
    onRemoveTab?: any
    filters: any
    submitFilters: any
    clearFilters: any
}

const DiscountFilters: React.FC<DiscountFiltersProps> = ({
    tabs,
    activeTab,
    onTabClick,
    onSaveTab,
    onRemoveTab,
    filters,
    submitFilters,
    clearFilters,
}) => {
    const [tempState, setTempState] = useState(filters)
    const [name, setName] = useState('')

    const handleRemoveTab = (val: any) => {
        if (onRemoveTab) {
            onRemoveTab(val)
        }
    }

    const handleSaveTab = () => {
        if (onSaveTab) {
            onSaveTab(name, tempState)
        }
    }

    const handleTabClick = (tabName: string) => {
        if (onTabClick) {
            onTabClick(tabName)
        }
    }

    useEffect(() => {
        setTempState(filters)
    }, [filters])

    const onSubmit = () => {
        submitFilters(tempState)
    }

    const onClear = () => {
        clearFilters()
    }

    const setSingleFilter = (filterKey: any, filterVal: any) => {
        setTempState((prevState: any) => ({
            ...prevState,
            [filterKey]: filterVal,
        }))
    }

    const numberOfFilters = Object.entries(filters).reduce(
        (acc: any, [key, value]: any) => {
            if (value?.open) {
                acc = acc + 1
            }
            return acc
        },
        0
    )

    return (
        <div className="flex space-x-1">
            <FilterDropdownContainer
                submitFilters={onSubmit}
                clearFilters={onClear}
                triggerElement={
                    <button
                        className={clsx(
                            'flex rounded-rounded items-center space-x-1 focus-visible:outline-none focus-visible:shadow-input focus-visible:border-violet-60'
                        )}
                    >
                        <div className="flex rounded-rounded items-center bg-grey-5 border border-grey-20 inter-small-semibold px-2 h-6">
                            Filters
                            <div className="text-grey-40 ml-1 flex items-center rounded">
                                <span className="text-violet-60 inter-small-semibold">
                                    {numberOfFilters ? numberOfFilters : '0'}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center rounded-rounded bg-grey-5 border border-grey-20 inter-small-semibold p-1">
                            <PlusIcon size={14} />
                        </div>
                    </button>
                }
            >
                <FilterDropdownItem
                    filterTitle="Types"
                    options={dynamicFilters}
                    filters={tempState.isDynamic.filter}
                    open={tempState.isDynamic.open}
                    setFilter={(val: any) => setSingleFilter('isDynamic', val)}
                />
                {/* Backend support missing
        <FilterDropdownItem
          filterTitle="Date"
          options={dateFilters}
          filters={tempState.date.filter}
          open={tempState.date.open}
          setFilter={(val) => setSingleFilter("date", val)}
      /> */}
                <SaveFilterItem
                    saveFilter={handleSaveTab}
                    name={name}
                    setName={setName}
                />
            </FilterDropdownContainer>
            {tabs &&
                tabs.map((t: any) => (
                    <TabFilter
                        key={t.value}
                        onClick={() => handleTabClick(t.value)}
                        label={t.label}
                        isActive={activeTab === t.value}
                        removable={!!t.removable}
                        onRemove={() => handleRemoveTab(t.value)}
                    />
                ))}
        </div>
    )
}

export default DiscountFilters
