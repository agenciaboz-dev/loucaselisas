import { Box } from "@mantine/core"
import React, { useEffect } from "react"
import { User } from "../../../types/server/class"
import { useHeader } from "../../../hooks/useHeader"
import { Header } from "../../../components/Header"

interface PanelCreatorProps {
    user: User
}

export const PanelCreator: React.FC<PanelCreatorProps> = ({ user }) => {
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
