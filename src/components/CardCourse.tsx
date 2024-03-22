import React from "react"
import { Avatar, Box } from "@mui/material"
import course from "../assets/course.jpeg"

interface CardCourseProps {}

export const CardCourse: React.FC<CardCourseProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "row", p: "2vw", gap: "4vw" }}>
            <Avatar
                variant="rounded"
                src={course}
                style={{ width: "22vw", height: "22vw", alignSelf: "center", borderRadius: "5vw" }}
            />
            <Box sx={{ gap: "0.8vw" }}>
                <p style={{ fontWeight: "600", fontSize: "1rem" }}>Curso 1</p>
                <p
                    style={{
                        fontSize: "0.8rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2, // Define o número de linhas
                        WebkitBoxOrient: "vertical",
                        maxWidth: "400px",
                    }}
                >
                    Facilisi etiam dignissim diam quis enim lobortis. Gravida arcu ac tortor dignissim convallis aenean et.
                    Bibendum enim facilisis gravida neque convallis. Malesuada fames ac turpis egestas integer.
                </p>
                <p style={{ fontSize: "0.8rem", color: "rgba(153, 153, 153, 1)" }}>8 vídeos</p>
            </Box>
        </Box>
    )
}
