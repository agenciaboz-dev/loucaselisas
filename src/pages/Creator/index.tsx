import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { User } from "../../types/server/class"
import { Panel } from "../Panel"

interface CreatorProps {
    user: User
}

export const Creator: React.FC<CreatorProps> = ({ user }) => {
    return (
        <ReactRoutes>
            <Route index element={<Panel user={user} />} />
            <Route path="/home" element={<Panel user={user} />} />
        </ReactRoutes>
    )
}
