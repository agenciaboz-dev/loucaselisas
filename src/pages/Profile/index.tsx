import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { Perfil } from "./Perfil"
import { User } from "../../types/server/class"
import { ListCards } from "./Cards/ListCards"
import { AddCard } from "./Cards/AddCard"
import { Subscription} from "./Subscription"

interface ProfileProps {
    user: User
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
    return (
        <ReactRoutes>
            <Route index element={<Perfil user={user} />} />
            <Route path="/" element={<Perfil user={user} />} />
            <Route path="/cards" element={<ListCards user={user} />} />
            <Route path="/add-card" element={<AddCard  user={user} />} />
            <Route path="/subscription" element={<Subscription   />} />
           
        </ReactRoutes>
    )
}
