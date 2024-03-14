import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { User } from "../../types/server/class"
import { Panel } from "../Panel"
import { Profile } from "../Profile"

interface StudentProps {
    user: User
}

export const Student: React.FC<StudentProps> = ({ user }) => {
    return (
        <ReactRoutes>
            <Route index element={<Panel user={user} />} />
            <Route path="/home" element={<Panel user={user} />} />
            <Route path="/account" element={<Profile user={user} />} />
        </ReactRoutes>
    )
}
