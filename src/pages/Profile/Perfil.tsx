import { Avatar, Box } from "@mui/material"
import React from "react"
import { colors } from "../../styles/colors"
import { User } from "../../types/server/class"
import { ButtonLisas } from "../../components/ButtonLisas"

interface PerfilProps {
    user: User
}

export const Perfil: React.FC<PerfilProps> = ({ user }) => {
    return (
        <Box sx={{ width: "100%", flex: 1, flexDirection: "column" }}>
            <Box sx={{ width: "100%", height: "100%", padding: "3vw" }}>
                <Box sx={{ width: "100%", height: "100%", padding: "1vw", alignItems: "center" }}>
                    <Box sx={{ width: "100%", height: "45vw", borderRadius: "3vw", bgcolor: colors.terciary }}></Box>
                    <Avatar src="" sx={{ width: "30vw", height: "30vw", position: "absolute", top: "50vw" }} />
                    <Box sx={{ gap: "8vw" }}>
                        <p
                            style={{
                                paddingTop: "12vw",
                                textAlign: "justify",
                                fontSize: "0.9rem",
                                textOverflow: "ellipsis",
                                whiteSpace: "break-spaces",
                            }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.{" "}
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
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
