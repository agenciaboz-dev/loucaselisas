import React, { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { User } from "../../types/server/class"
import { Panel } from "../Panel"
import { Profile } from "../Profile"
import { Box, Tab, Tabs } from "@mui/material"

interface AdminProps {
    user: User
}

type tab_index = 1 | 2 | 3 | 5 | 6

export const Admin: React.FC<AdminProps> = ({ user }) => {
    const navigate = useNavigate()

    const [currentTab, setCurrentTab] = useState<tab_index>(1)

    const tab_navigation_enum = {
        [1]: "/admin",
        [2]: "/admin/cursos",
        [3]: "/admin/cursos",
        [4]: "/admin/cursos",
        [5]: "/admin/cursos",
        [6]: "/admin/cursos",
    }

    useEffect(() => {
        navigate(tab_navigation_enum[currentTab])
    }, [currentTab])

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Tabs
                    variant="scrollable"
                    scrollButtons={true}
                    aria-label="scrollable prevent tabs example"
                    sx={{ width: "100%" }}
                    value={currentTab}
                    onChange={(_, value) => setCurrentTab(value)}
                >
                    <Tab label="Resumo" value={1} sx={{ textTransform: "none" }} />
                    <Tab label="Cursos" value={2} sx={{ textTransform: "none" }} />
                    <Tab label="Lições" value={3} sx={{ textTransform: "none" }} />
                    <Tab label="Aprovar" value={4} sx={{ textTransform: "none" }} />
                    <Tab label="Grupos" value={5} sx={{ textTransform: "none" }} />
                    <Tab label="Usuários" value={6} sx={{ textTransform: "none" }} />
                </Tabs>
            </Box>

            <Routes>
                <Route index element={<Panel user={user} />} />
                <Route path="/home" element={<Panel user={user} />} />
                <Route path="/account" element={<Profile user={user} />} />
            </Routes>
        </>
    )
}
