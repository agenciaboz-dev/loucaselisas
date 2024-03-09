import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { User } from "../../types/server/class"

interface AdminProps {user:User}

export const Admin: React.FC<AdminProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route />
        </ReactRoutes>
    )
}
