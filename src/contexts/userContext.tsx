import { createContext, useEffect, useState } from "react"
import React from "react"
import { User } from "../types/server/class"
import { useNavigate } from "react-router-dom"
import { useSnackbar } from "burgos-snackbar"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useIo } from "../hooks/useIo"

interface UserContextValue {
    user: User | null
    setUser: (value: User | null) => void
    logout: () => void
    list: User[]
}

interface UserProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<UserContextValue>({} as UserContextValue)

export default UserContext

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const io = useIo()
    const navigate = useNavigate()
    const { snackbar } = useSnackbar()

    const [user, setUser] = useState<User | null>(null)
    const [list, setList] = useState<User[]>([])

    const replaceUser = (user: User) => {
        setList((list) => [...list.filter((item) => item.id !== user.id), user])
    }
    const logout = () => {
        setUser(null)
        navigate("/login")
        snackbar({ severity: "info", text: "Desconectado!" })
    }

    useEffect(() => {
        io.on("user:update", (data: User) => {
            if (user?.id === data.id) setUser(data)
            if (user?.admin) replaceUser(data)
        })

        return () => {
            io.off("user:update")
        }
    }, [user])

    return <UserContext.Provider value={{ user, setUser, logout, list }}>{children}</UserContext.Provider>
}
