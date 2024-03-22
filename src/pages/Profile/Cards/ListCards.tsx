import React from "react"
import { User } from "../../../types/server/class"
import { Box } from "@mui/material"
import { ButtonLisas } from "../../../components/ButtonLisas"
import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "@mui/x-date-pickers"
import { Card } from "../../../components/Card"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import { IoAdd } from "react-icons/io5"

interface ListCardsProps {
    user: User
}

export const ListCards: React.FC<ListCardsProps> = ({ user }) => {
    const navigate = useNavigate()

    return (
        <Box sx={{ width: "100%", flex: 1, flexDirection: "column", p: "4vw", overflowY: "auto" }}>
            <Box sx={{ width: "100%", flex: 1, alignItems: "center", gap: "5vw" }}>
                <ButtonLisas
                    sx={{
                        alignItems: "center",
                        gap: "2vw",
                        alignSelf: "flex-start",
                        justifyContent: "start",
                        width: "100%",
                        fontSize: "0.9rem",
                        p: 0,
                    }}
                    onClick={() => navigate("/account")}
                >
                    <ArrowLeftIcon />
                    <p style={{ fontSize: "1.1rem" }}>Cartões de pagamentos salvos</p>
                </ButtonLisas>

                {user.payment_cards.map((card) => (
                    <Card card={card} key={card.id} />
                ))}
                <ButtonLisas
                    sx={{
                        gap: "2vw",
                        position: "absolute",
                        bottom: "30vw",
                        p: "1vw",
                        borderRadius: "50%",
                        height: "14vw",
                        right:"7vw"
                    }}
                    variant="contained"
                    onClick={() => navigate("/account/add-card")}
                >
                    <IoAdd style={{ width: "8vw", height: "8vw" }} />
                </ButtonLisas>
            </Box>
        </Box>
    )
}
