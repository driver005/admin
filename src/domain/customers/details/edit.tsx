import { useAdminUpdateCustomer } from 'medusa-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../../components/fundamentals/button'
import InputField from '../../../components/molecules/input'
import Modal from '../../../components/molecules/modal'
import useNotification from '../../../hooks/use-notification'
import { getErrorMessage } from '../../../utils/error-messages'

interface EditCustomerModal {
    handleClose: any
    customer: any
}

const EditCustomerModal: React.FC<EditCustomerModal> = ({ handleClose, customer }) => {
    const { register, reset, handleSubmit } = useForm()

    const notification = useNotification()

    const updateCustomer = useAdminUpdateCustomer(customer.id)

    const submit = (data: any) => {
        updateCustomer.mutate(data, {
            onSuccess: () => {
                handleClose()
                notification(
                    'Success',
                    'Successfully updated customer',
                    'success'
                )
            },
            onError: (err) => {
                handleClose()
                notification('Error', getErrorMessage(err), 'error')
            },
        })
    }

    useEffect(() => {
        reset({
            first_name: customer.first_name || '',
            last_name: customer.last_name || '',
            email: customer.email,
            phone: customer.phone || '',
        })
    }, [])

    return (
        <Modal handleClose={handleClose}>
            <Modal.Body>
                <Modal.Header handleClose={handleClose}>
                    <span className="inter-xlarge-semibold">
                        Customer Details
                    </span>
                </Modal.Header>
                <Modal.Content>
                    <div className="inter-base-semibold text-grey-90 mb-4">
                        General
                    </div>
                    <div className="w-full flex mb-4 space-x-2">
                        <InputField
                            label="First Name"
                            placeholder="Lebron"
                            {...register('first_name')}
                        />
                        <InputField
                            label="Last Name"
                            placeholder="James"
                            {...register('last_name')}
                        />
                    </div>
                    <div className="inter-base-semibold text-grey-90 mb-4">
                        Contact
                    </div>
                    <div className="flex space-x-2">
                        <InputField
                            label="Email"
                            disabled
                            {...register('email')}
                        />
                        <InputField
                            label="Phone number"
                            placeholder="+45 42 42 42 42"
                            {...register('phone')}
                        />
                    </div>
                </Modal.Content>
                <Modal.Footer>
                    <div className="w-full flex justify-end">
                        <Button
                            variant="ghost"
                            size="small"
                            onClick={handleClose}
                            className="mr-2"
                        >
                            Cancel
                        </Button>
                        <Button
                            loading={updateCustomer.isLoading}
                            variant="primary"
                            className="min-w-[100px]"
                            size="small"
                            onClick={handleSubmit(submit)}
                        >
                            Save
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
    )
}

export default EditCustomerModal
