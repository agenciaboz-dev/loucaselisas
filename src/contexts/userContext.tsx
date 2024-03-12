import { createContext, useState } from "react"
import React from "react"
import { User } from "../types/server/class"
import { useNavigate } from "react-router-dom"
import { useSnackbar } from "burgos-snackbar"
import { useMenuDrawer } from "../hooks/useMenuDrawer"

interface UserContextValue {
    user: User | null
    setUser: (value: User | null) => void
    logout: () => void
}

interface UserProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<UserContextValue>({} as UserContextValue)

export default UserContext

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const navigate = useNavigate()
    const { snackbar } = useSnackbar()

    const [user, setUser] = useState<User | null>(null)

    const logout = () => {
        setUser(null)
        navigate("/login")
        snackbar({ severity: "info", text: "Desconectado!" })
    }

    return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>
}
