import React from "react"
import { Box, Paper } from "@mui/material"
import { PaymentCard } from "../types/server/class/PaymentCard"

interface CardProps {
    card: PaymentCard
}

export const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <Paper
            elevation={4}
            sx={{
                boxShadow: "rgba(100, 100, 1, 0.15) 0px 7px 29px 0px",
                bgcolor: "#F8F8F8",
                width: "100%",
                height: "fit-content",
                p: "4vw",
                borderRadius: "2vw",
                gap: "2vw",
            }}
        >
            <Box>
                <p style={{ fontSize: "1.3rem" }}>{card.number}</p>
                <p style={{ fontSize: "1rem", color: "#808080" }}>Numero do cartão</p>
            </Box>
            <Box sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", margin: "2vw 0" }}>
                    <p style={{ fontSize: "1.3rem" }}>{card.owner}</p>
                    <p style={{ fontSize: "1rem", marginBottom: "2vw", color: "#808080" }}>Nome</p>
                </Box>
                <Box sx={{ display: "flex", margin: "2vw 0" }}>
                    <p style={{ fontSize: "1.3rem" }}>{card.validity}</p>
                    <p style={{ fontSize: "1rem", marginBottom: "2vw", color: "#808080" }}>Val.</p>
                </Box>
            </Box>
        </Paper>
    )
}
