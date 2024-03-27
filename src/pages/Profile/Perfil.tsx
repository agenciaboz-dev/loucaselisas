import { Box, Avatar as Image } from "@mui/material"
import React, { useState } from "react"
import { colors } from "../../styles/colors"
import { User } from "../../types/server/class"
import { ButtonLisas } from "../../components/ButtonLisas"
import { ArrowRightIcon } from "@mui/x-date-pickers"
import { useNavigate } from "react-router-dom"

import { GoNote } from "react-icons/go"
import { IoLogoInstagram, IoLogoTiktok, IoWalletOutline } from "react-icons/io5"
import { CiCreditCard1, CiEdit } from "react-icons/ci"
import { BsClockHistory } from "react-icons/bs"

interface PerfilProps {
    user: User
}

export const Perfil: React.FC<PerfilProps> = ({ user }) => {
    const navigate = useNavigate()
    const [image, setImage] = useState("")
    const [expanded, setExpanded] = useState(false)

    return (
        <Box sx={{ width: 1, flex: 1, flexDirection: "column", overflowY: "auto" }}>
            <Box sx={{ width: 1, height: 0.9, padding: "3vw" }}>
                <Box sx={{ width: 1, padding: "1vw", alignItems: "center" }}>
                    <Image
                        src={user.cover || ""}
                        sx={{ width: 1, height: "35vw", borderRadius: "3vw", bgcolor: colors.terciary }}
                    ></Image>
                    <Image
                        src={user.image || ""}
                        variant="circular"
                        sx={{ width: "25vw", height: "25vw", position: "relative", bottom: "15vw" }}
                    />
                    <Box
                        sx={{
                            flexDirection: "row",
                            width: 1,
                            justifyContent: "space-between",
                            position: "relative",
                            bottom: "23vw",
                            p: "0 1vw 0 1vw",
                        }}
                    >
                        <Box sx={{ flexDirection: "row", alignItems: "center", gap: "1vw" }}>
                            <IoLogoInstagram style={{ width: "4vw", height: "4vw" }} />
                            <p style={{ fontSize: "0.9rem" }}>@{user.instagram}</p>
                        </Box>
                        <Box sx={{ flexDirection: "row", alignItems: "center", gap: "1vw" }}>
                            <IoLogoTiktok />
                            <p style={{ fontSize: "0.9rem" }}>@{user.tiktok}</p>
                        </Box>
                    </Box>

                    <Box sx={{ gap: "6vw", position: "relative", bottom: "13vw" }}>
                        <Box sx={{ alignItems: "center", gap: "2vw" }}>
                            <p style={{ fontSize: "1.5rem" }}>{user.name}</p>
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
                            <p
                                style={{
                                    textDecoration: "underline",
                                    fontSize: "0.8rem",
                                    alignSelf: "end",
                                    marginRight: "1vw",
                                }}
                                onClick={() => {}}
                            >
                                Ler mais
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
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box sx={{}}>
                                <p style={{ fontSize: "0.8rem" }}>Seu plano</p>
                                <p style={{ fontSize: "1.5rem" }}>Premium</p>
                            </Box>
                            <ButtonLisas
                                sx={{
                                    width: 0.65,
                                    height: "9vw",
                                    fontWeight: "600",
                                    bgcolor: "#66625D",
                                    padding: "1vw",
                                    color: colors.secondary,
                                    fontSize: "0.9rem",
                                    gap: "1.5vw",
                                }}
                            >
                                <GoNote /> Conhecer outros planos
                            </ButtonLisas>
                        </Box>

                        <Box sx={{ gap: "5vw", p: "2vw" }}>
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
                                    <Box
                                        sx={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "2vw",
                                            alignSelf: "flex-start",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <GoNote />
                                        Gerenciar seu plano
                                    </Box>
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
                                    <Box
                                        sx={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "2vw",
                                            alignSelf: "flex-start",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <CiEdit />
                                        Editar perfil
                                    </Box>
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
                                    onClick={() => navigate("/account/payments-history")}
                                >
                                    {" "}
                                    <Box
                                        sx={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "2vw",
                                            alignSelf: "flex-start",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <BsClockHistory />
                                        Histórico do pedido
                                    </Box>
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
                                    <Box
                                        sx={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "2vw",
                                            alignSelf: "flex-start",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <IoWalletOutline />
                                        Cartões de pagamentos salvos
                                    </Box>
                                    <ArrowRightIcon />
                                </ButtonLisas>
                                <ButtonLisas onClick={()=> navigate("/account/add-courses")}> Adicionar cursos</ButtonLisas>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
