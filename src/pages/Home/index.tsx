import { Box, SxProps } from "@mui/material"
import React from "react"
import Logo from "../../assets/Logo/logo.png"
import { colors } from "../../styles/colors"
import { ButtonLisas } from "../../components/ButtonLisas"
import { useNavigate } from "react-router-dom"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()

    const button_style: SxProps = { fontSize: "3.5vw", width: "60%" }
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                bgcolor: colors.primary,
                padding: "4vw",
                justifyContent: "center",
                alignItems: "center",
                gap: "6vw",
            }}
        >
            <img src={Logo} style={{ width: "85vw", height: "85vw" }} />
            <Box sx={{ width: "100%", p: "3vw", gap: "5vw", alignItems: "center" }}>
                <ButtonLisas sx={button_style} onClick={() => navigate("/login")}>
                    Entrar
                </ButtonLisas>
                <p
                    style={{ color: colors.secondary, fontSize: "3.2vw", textDecoration: "underline" }}
                    onClick={() => navigate("/signup")}
                >
                    Criar Conta
                </p>
            </Box>
        </Box>
    )
}
