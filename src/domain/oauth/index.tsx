import qs from 'query-string'
import React from 'react'
import Button from '../../components/fundamentals/button'
import Medusa from '../../services/api'

const Oauth = ({ app_name }: any) => {
    const { code, state } = qs.parse(location.search)
    return (
        <>
            <div>{app_name}</div>
            <Button
                onClick={() => Medusa.apps.authorize({
                    application_name: app_name,
                    code,
                    state,
                })}
                variant={'primary'}
            >
                Complete Installation
            </Button>
        </>
    )
}

export default Oauth
