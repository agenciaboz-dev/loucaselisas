import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { User } from "../../types/server/class"
import { PanelCreator } from "./Panel"

interface CreatorProps {
    user: User
}

export const Creator: React.FC<CreatorProps> = ({ user }) => {
    return (
        <ReactRoutes>
            <Route index element={<PanelCreator user={user} />} />
            <Route path="/home" element={<PanelCreator user={user} />} />
        </ReactRoutes>
    )
}
