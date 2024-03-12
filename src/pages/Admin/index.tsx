import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { User } from "../../types/server/class"
import { Panel } from "../Panel"

interface AdminProps {
    user: User
}

export const Admin: React.FC<AdminProps> = ({ user }) => {
    return (
        <ReactRoutes>
            <Route index element={<Panel user={user} />} />
            <Route path="/home" element={<Panel user={user} />} />
        </ReactRoutes>
    )
}
