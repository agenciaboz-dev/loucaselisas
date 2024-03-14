import { Avatar, Box, IconButton, Paper, SxProps } from "@mui/material"
import { useUser } from "../hooks/useUser"
import { useNavigate } from "react-router-dom"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useHeader } from "../hooks/useHeader"
import { TextFieldLisas } from "./TextFieldLisas"
import { CiBellOn } from "react-icons/ci"
import { PiArrowLeftThin } from "react-icons/pi"

interface HeaderProps {
    back?: boolean
    location?: string
    style?: SxProps
}

export const Header: React.FC<HeaderProps> = ({ back, location, style }) => {
    const header = useHeader()
    const menuDrawer = useMenuDrawer()
    const navigate = useNavigate()
    const { user } = useUser()

    const iconStyle: SxProps = {
        width: "7vw",
        height: "auto",
        color: "#fff",
    }

    return (
        <Paper
            elevation={0}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                padding: "4vw",
                fontSize: "5vw",
                fontWeight: "bold",
                background: "transparent",
                borderRadius: 0,
            }}
        >
            <Box
                style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: "4vw",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {back ? (
                    <IconButton sx={{ bgcolor: "#D9D9D9" }} onClick={() => navigate(location ? location : "/")}>
                        <PiArrowLeftThin />
                    </IconButton>
                ) : (
                    <Avatar
                        src={user?.image || ""}
                        style={{ color: "#fff", width: "10vw", height: "10vw" }}
                        onClick={() => {
                            menuDrawer.toggle()
                        }}
                    />
                )}
                <p style={{ fontWeight: "400", fontSize: "1.2rem", width: "100%" }}>{user?.name}</p>
                <IconButton sx={{ bgcolor: "#D9D9D9" }}>
                    <CiBellOn />
                </IconButton>
            </Box>
        </Paper>
    )
}
