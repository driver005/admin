import { navigate } from 'gatsby'
import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/account'

const PrivateRoute = ({ component: Component, location, ...rest }: any) => {
    const [loading, setLoading] = useState(false)
    const account = useContext(AccountContext)

    if (account.isLoggedIn) {
        return <Component {...rest} />
    } else if (!loading) {
        account
            .session()
            .then((_data: any) => {
                setLoading(false)
            })
            .catch((_err: any) => {
                console.log(_err)
                navigate('/login')
            })
    }
    return <div>
        {'Loading...'}
    </div>
}

export default PrivateRoute
