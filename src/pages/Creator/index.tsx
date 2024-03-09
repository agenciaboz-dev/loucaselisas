import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { User } from "../../types/server/class"

interface CreatorProps {user:User}

export const Creator: React.FC<CreatorProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route />
        </ReactRoutes>
    )
}
