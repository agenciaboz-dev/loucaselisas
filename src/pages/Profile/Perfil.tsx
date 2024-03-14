import { Avatar, Box } from "@mui/material"
import React from "react"
import { colors } from "../../styles/colors"
import { User } from "../../types/server/class"
import { ButtonLisas } from "../../components/ButtonLisas"
import { CiCreditCard2 } from "react-icons/ci"
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers"
import { Navigate, useNavigate } from "react-router-dom"

interface PerfilProps {
    user: User
}

export const Perfil: React.FC<PerfilProps> = ({ user }) => {
    const navigate = useNavigate()

    return (
        <Box sx={{ width: 1, flex: 1, flexDirection: "column" }}>
            <Box sx={{ width: 1, height: 1, padding: "3vw" }}>
                <Box sx={{ width: 1, height: 1, padding: "1vw", alignItems: "center" }}>
                    <Box sx={{ width: 1, height: "45vw", borderRadius: "3vw", bgcolor: colors.terciary }}></Box>
                    <Avatar src="" sx={{ width: "30vw", height: "30vw", position: "absolute", top: "45vw" }} />
                    <Box sx={{ gap: "8vw" }}>
                        <p
                            style={{
                                paddingTop: "12vw",
                                textAlign: "justify",
                                fontSize: "0.9rem",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 2, // Define o número de linhas
                                WebkitBoxOrient: "vertical",
                                maxWidth: "400px",
                            }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                        </p>
                        <Box
                            sx={{
                                border: "1px solid black",
                                width: "100%",
                                height: "fit-content",
                                p: "4vw",
                                borderRadius: "4vw",
                                gap: "2vw",
                            }}
                        >
                            <p style={{ fontSize: "0.8rem" }}>Seu plano</p>
                            <p style={{ fontSize: "1.5rem" }}>Free</p>
                            <ButtonLisas variant="outlined" sx={{ fontWeight: "600" }}>
                                {" "}
                                Conhecer outros planos
                            </ButtonLisas>
                        </Box>

                        <Box sx={{ gap: "5vw" }}>
                            <Box sx={{ gap: "1vw" }}>
                                <p style={{ fontSize: "1.3rem", marginBottom: "2vw", fontWeight: "500" }}>Conta</p>

                                <ButtonLisas
                                    
                                    sx={{
                                        border: "1px solid #000",
                                        alignItems: "center",
                                        gap: "2vw",
                                        alignSelf: "flex-start",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        fontSize: "1.1rem",
                                        p: "0",
                                        fontWeight: "400",
                                    }}
                                    onClick={() => navigate("/account/subscription")}
                                >
                                    Gerenciar seu plano
                                    <ArrowRightIcon />
                                </ButtonLisas>

                                <ButtonLisas
                                    sx={{
                                        alignItems: "center",
                                        gap: "2vw",
                                        alignSelf: "flex-start",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        fontSize: "1.1rem",
                                        p: "0",
                                        fontWeight: "400",
                                    }}
                                    onClick={() => navigate("/account/cards")}
                                >
                                    Histórico do pedido
                                    <ArrowRightIcon />
                                </ButtonLisas>
                            </Box>

                            <Box sx={{ gap: "1vw" }}>
                                <p style={{ fontSize: "1.3rem", marginBottom: "2vw", fontWeight: "500" }}>Pagamento</p>

                                <ButtonLisas
                                    sx={{
                                        alignItems: "center",
                                        gap: "2vw",
                                        alignSelf: "flex-start",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        fontSize: "1.1rem",
                                        p: "0",
                                        fontWeight: "400",
                                    }}
                                    onClick={() => navigate("/account/cards")}
                                >
                                    Histórico do pedido
                                    <ArrowRightIcon />
                                </ButtonLisas>

                                <ButtonLisas
                                    sx={{
                                        alignItems: "center",
                                        gap: "2vw",
                                        alignSelf: "flex-start",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        fontSize: "1.1rem",
                                        p: "0",
                                        fontWeight: "400",
                                    }}
                                    onClick={() => navigate("/account/cards")}
                                >
                                    Cartões de pagamentos salvos
                                    <ArrowRightIcon />
                                </ButtonLisas>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
