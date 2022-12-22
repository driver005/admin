import { medusaUrl } from "../../../services/config"
import { Sentry } from "../../../sentry"
import { Route, Router, useLocation, useNavigate } from "react-router-dom"
import React from "react"

const SentryRoute = () => {
    const location = useLocation()
    const organisation = "Yeet"
    const project = "react"

    return (
        <Sentry path="/" baseUrl={medusaUrl} organisation={organisation} project={project} location={location} />
    )
}

export default SentryRoute