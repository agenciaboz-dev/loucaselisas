import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { User } from "../../types/server/class"

interface StudentProps {user:User}

export const Student: React.FC<StudentProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route />
        </ReactRoutes>
    )
}
