import { adminUserKeys } from 'medusa-react'
import React, { useReducer } from 'react'
import Medusa from '../services/api'
import { queryClient } from '../services/config'

export const defaultAccountContext = {
    isLoggedIn: false,
    id: '',
    name: '',
    first_name: '',
    last_name: '',
    email: '',
}

interface AccCtxProps {
    isLoggedIn: boolean
    id: string
    name: string
    first_name: string
    last_name: string
    email: string
    [key: string]: any
}

export const AccountContext = React.createContext<AccCtxProps>(defaultAccountContext)

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'userAuthenticated':
            return {
                ...state,
                isLoggedIn: true,
                id: action.payload.id,
                email: action.payload.email,
                first_name: action.payload?.first_name,
                last_name: action.payload?.last_name,
            }
        case 'updateUser':
            return {
                ...state,
                ...action.payload,
            }
        case 'userLoggedOut':
            return defaultAccountContext
        case 'userLoggedIn':
            return {
                ...state,
                isLoggedIn: true,
                id: action.payload.id,
                email: action.payload.email,
                first_name: action.payload?.first_name,
                last_name: action.payload?.last_name,
            }
        default:
            return state
    }
}

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultAccountContext)

    return (
        <AccountContext.Provider
            value={{
                ...state,
                session: async () => {
                    console.log('test')
                    const { data } = await Medusa.auth.session()
                    dispatch({
                        type: 'userAuthenticated',
                        payload: data.user,
                    })
                    return data
                },

                handleUpdateUser: async (id: any, user: any) => {
                    const { data } = await Medusa.users.update(id, user)
                    queryClient.invalidateQueries(adminUserKeys.all)
                    dispatch({ type: 'updateUser', payload: data.user })
                },

                handleLogout: async (details: any) => {
                    await Medusa.auth.deauthenticate(details)
                    dispatch({ type: 'userLoggedOut' })
                    return null
                },

                handleLogin: async (details: any) => {
                    const { data } = await Medusa.auth.authenticate(details)
                    dispatch({
                        type: 'userLoggedIn',
                        payload: data.user,
                    })
                    return data
                },
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}
