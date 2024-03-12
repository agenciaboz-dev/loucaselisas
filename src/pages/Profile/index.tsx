import React, { useEffect } from "react"
import { useHeader } from "../../hooks/useHeader"
import { User } from "../../types/server/class"
import { Box } from "@mui/material"
import { Header } from "../../components/Header"

interface ProfileProps {
    user: User
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
    const header = useHeader()

    useEffect(() => {
        header.setTitle(user.name)
    }, [])
    return (
        <Box>
            <Header />
        </Box>
    )
}
