import { Box, Avatar as Image } from "@mui/material"
import React, { useState } from "react"
import { colors } from "../../styles/colors"
import { User } from "../../types/server/class"
import { ButtonLisas } from "../../components/ButtonLisas"
import { CiCreditCard2 } from "react-icons/ci"
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers"
import { Navigate, useNavigate } from "react-router-dom"
import { Avatar } from "@files-ui/react"
import profile from "../../assets/pessoa.jpeg"
import cover from "../../assets/cover.jpg"

interface PerfilProps {
    user: User
}

export const Perfil: React.FC<PerfilProps> = ({ user }) => {
    const navigate = useNavigate()
    const [image, setImage] = useState("")

    return (
        <Box sx={{ width: 1, flexDirection: "column", overflowY: "auto" }}>
            <Box sx={{ width: 1, height: 0.9, padding: "3vw" }}>
                <Box sx={{ width: 1, padding: "1vw", alignItems: "center" }}>
                    <Image
                        src={cover}
                        sx={{ width: 1, height: "35vw", borderRadius: "3vw", bgcolor: colors.terciary }}
                    ></Image>
                    <Image
                        src={profile}
                        variant="circular"
                        sx={{ width: "30vw", height: "30vw", position: "relative", bottom: "20vw" }}
                    />

                    <Box sx={{ gap: "6vw", position: "relative", bottom: "18vw" }}>
                        <Box sx={{ alignItems: "center", gap: "2vw" }}>
                            <p style={{ fontSize: "1.5rem" }}>@{user.username}</p>
                            <p
                                style={{
                                    // paddingTop: "14vw",
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
                                pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </p>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: "fit-content",
                                p: "4vw",
                                borderRadius: "4vw",
                                gap: "2vw",
                                bgcolor: "#F8F8F8",
                            }}
                        >
                            <Box sx={{}}>
                                <p style={{ fontSize: "0.8rem" }}>Seu plano</p>
                                <p style={{ fontSize: "1.5rem" }}>Premium</p>
                            </Box>
                            <ButtonLisas sx={{ fontWeight: "600", bgcolor: "#66625D", p: "1vw", color: colors.secondary }}>
                                {" "}
                                Conhecer outros planos
                            </ButtonLisas>
                        </Box>

                        <Box sx={{ gap: "5vw" }}>
                            <Box sx={{ gap: "1vw" }}>
                                <p style={{ fontSize: "1.2rem", marginBottom: "2vw", fontWeight: "500" }}>Conta</p>

                                <ButtonLisas
                                    sx={{
                                        alignItems: "center",
                                        gap: "2vw",
                                        alignSelf: "flex-start",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        fontSize: "1rem",
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
                                        fontSize: "1rem",
                                        p: "0",
                                        fontWeight: "400",
                                    }}
                                    onClick={() => navigate("/account/update-profile")}
                                >
                                    Editar perfil
                                    <ArrowRightIcon />
                                </ButtonLisas>
                            </Box>

                            <Box sx={{ gap: "1vw" }}>
                                <p style={{ fontSize: "1.2rem", marginBottom: "2vw", fontWeight: "500" }}>Pagamento</p>

                                <ButtonLisas
                                    sx={{
                                        alignItems: "center",
                                        gap: "2vw",
                                        alignSelf: "flex-start",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        fontSize: "1rem",
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
                                        fontSize: "1rem",
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
