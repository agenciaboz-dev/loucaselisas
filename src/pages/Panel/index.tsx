import React, { useEffect } from "react"
import { User } from "../../types/server/class"
import { useHeader } from "../../hooks/useHeader"
import { Header } from "../../components/Header"
import { Box, Button } from "@mui/material"
import { ButtonLisas } from "../../components/ButtonLisas"
import ThumbCourses from "../../components/panel/ThumbCourses"
import { useArray } from "../../hooks/useArray"
import { Search } from "../../components/Search"
import { IoIosMenu } from "react-icons/io"
import { CardCourse } from "../../components/CardCourse"
interface PanelProps {
    user: User
}

const button_style = {
    width: "30vw",
    p: "1vw 0",
    flexShrink: 0,
}

const box_container_courses_style = {
    width: "100vw",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "row",
    gap: "2vw",
    overflowX: "scroll",
    padding: "0 4vw",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
    "&::-webkit-scrollbar": {
        width: "0",
        height: "0",
    },
}
export const Panel: React.FC<PanelProps> = ({ user }) => {
    const { newArray } = useArray()
    const chips = newArray(3)
    return (
        <Box sx={{ width: "100%", flex: 1, flexDirection: "column", p: "4vw" }}>
            <Box sx={{ width: "100%", alignItems: "center", gap: "3vw" }}>
                <Box sx={box_container_courses_style}>
                    {chips.map((item) => (
                        <ButtonLisas variant="outlined" sx={button_style}>
                            Filtro
                        </ButtonLisas>
                    ))}
                </Box>
                <Box sx={box_container_courses_style}>
                    {chips.map((item) => (
                        <ThumbCourses />
                    ))}
                </Box>
                <Box sx={{ width: 1, gap: "4vw", overflowY: "auto" }}>
                    <Box sx={{ gap: "2vw" }}>
                        <p style={{ fontSize: "1.2rem" }}>Explorar</p>
                        <Search />
                    </Box>
                    <Box sx={{ gap: "0vw", overflowY: "auto" }}>
                        {chips.map((item) => (
                            <CardCourse />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
