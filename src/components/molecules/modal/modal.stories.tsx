import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import Modal from '.'
import Button from '../../fundamentals/button'
import InputField from '../input'
import FocusModal from './focus-modal'
import LayeredModal, { LayeredModalContext, LayeredModalProvider } from './layered-modal'
import SteppedModal, { SteppedContext } from './stepped-modal'

export default {
    title: 'Molecules/Modal',
    component: FocusModal,
} as ComponentMeta<typeof FocusModal>

const FocusModalTemplate: ComponentStory<typeof FocusModal> = (args) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            {open && (
                <FocusModal>
                    <FocusModal.Header>
                        <span>Test header</span>
                        <span onClick={() => setOpen(false)}>
                            Click to close
                        </span>
                    </FocusModal.Header>
                    <FocusModal.Main>{args.children}</FocusModal.Main>
                </FocusModal>
            )}
            <Button
                size="small"
                variant="primary"
                onClick={() => setOpen(true)}
            >
                Open Modal
            </Button>
        </div>
    )
}

const FocusModalBasicTemplate: ComponentStory<typeof FocusModal> = (args) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            {open && (
                <FocusModal.BasicFocusModal
                    onSubmit={() => setOpen(false)}
                    handleClose={() => setOpen(false)}
                >
                    {args.children}
                </FocusModal.BasicFocusModal>
            )}
            <Button
                size="small"
                variant="primary"
                onClick={() => setOpen(true)}
            >
                Open Modal
            </Button>
        </div>
    )
}

const Test = ({ number }: { number: number }) => {
    const { enableNextPage, disableNextPage } = React.useContext(SteppedContext)

    useEffect(() => {
        disableNextPage()

    }, [])

    return (
        <div>
            <div>Step {number}</div>
            <button onClick={() => {
                enableNextPage()
            }}>Enable</button>
        </div>
    )
}

const SteppedModalTemplate: ComponentStory<typeof SteppedModal> = (args) => {
    return (
        <div>Under development</div>
    )
}

const LayeredModalTemplate: ComponentStory<typeof LayeredModal> = (args) => {
    const layeredContext = React.useContext(LayeredModalContext)

    const [open, setOpen] = useState(false)
    return (
        <LayeredModalProvider>
            {open && (
                <LayeredModal context={layeredContext} handleClose={() => setOpen(false)}>
                    <Modal.Body>
                        <Modal.Header handleClose={() => setOpen(false)}>
                            <h2>Claim Details</h2>
                        </Modal.Header>
                        <Modal.Content>
                            <div>
                                Content
                            </div>

                        </Modal.Content>
                    </Modal.Body>
                    <Modal.Footer>
                        <span>Footer</span>
                    </Modal.Footer>
                </LayeredModal>
            )}
            <Button
                size="small"
                variant="primary"
                onClick={() => setOpen(true)}
            >
                Open Modal
            </Button>
        </LayeredModalProvider>
    )
}

const Block: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-full h-[100px] my-4 bg-grey-10 rounded-rounded">
        {children}
    </div>
)

export const StandardFocusModal = FocusModalTemplate.bind({})
StandardFocusModal.args = {
    children: (
        <div className="mt-24">
            <h1 className="inter-xlarge-semibold mb-8">Title</h1>
            <span className="inter-base-semibold mb-4">Subtitle</span>
            <InputField label={'Input label'} />
        </div>
    ),
}

export const OverflowFocusModal = FocusModalTemplate.bind({})
OverflowFocusModal.args = {
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Block>
            <span className="inter-base-regular">{i}</span>
        </Block>
    )),
}

export const BasicFocusModal = FocusModalBasicTemplate.bind({})
BasicFocusModal.args = {
    children: (
        <div className="mt-24">
            <h1 className="inter-xlarge-semibold mb-8">Title</h1>
            <span className="inter-base-semibold mb-4">Subtitle</span>
            <InputField label={'Input label'} />
        </div>
    ),
}

export const BasicFocusModalOverflow = FocusModalBasicTemplate.bind({})
BasicFocusModalOverflow.args = {
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Block key={i}>
            <span className="inter-base-regular">{i}</span>
        </Block>
    )),
}

export const SteppedModalDefault = SteppedModalTemplate.bind({})
SteppedModalDefault.args = {
}
export const LayeredModalDefault = LayeredModalTemplate.bind({})
LayeredModalDefault.args = {
}
