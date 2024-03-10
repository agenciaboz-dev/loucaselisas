import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { User } from "./types/server/class"
import { useNavigationList } from "./hooks/useNavigationList"
import { BottomNavigation } from "./components/BottomNavigation"
import { Admin } from "./pages/Admin"
import { Student } from "./pages/Student"
import { Creator } from "./pages/Creator"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { useUser } from "./hooks/useUser"

interface RoutesProps {}

const AdminRoutes: React.FC<{ user: User }> = ({ user }) => {
    const bottomMenu = useNavigationList()

    return (
        <>
            <BottomNavigation section={bottomMenu.admin} />
            <ReactRoutes>
                <Route path="/admin/*" element={<Admin user={user} />} />
            </ReactRoutes>
        </>
    )
}

const UserRoutes: React.FC<{ user: User }> = ({ user }) => {
    const bottomMenu = useNavigationList()
    return (
        <>
            <BottomNavigation section={user.student ? bottomMenu.student : bottomMenu.creator} />
            <ReactRoutes>
                {user.student ? (
                    <Route path="/student/*" element={<Student user={user} />} />
                ) : (
                    <Route path="/creator/*" element={<Creator user={user} />} />
                )}
            </ReactRoutes>
        </>
    )
}

const UnauthenticatedRoutes = () => (
    <ReactRoutes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Home />} />
    </ReactRoutes>
)

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user } = useUser()

    return user ? user.admin ? <AdminRoutes user={user} /> : <UserRoutes user={user} /> : <UnauthenticatedRoutes />
}
