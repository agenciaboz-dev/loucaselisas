import { Avatar, Box, IconButton, Paper, SxProps } from "@mui/material"
import { useUser } from "../hooks/useUser"
import { useNavigate } from "react-router-dom"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useHeader } from "../hooks/useHeader"

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
                position: "fixed",
                top: 0,
                ...style,
            }}
        >
            <Box sx={{ flexDirection: "row", alignItems: "center" }}>
                <IconButton
                    color="primary"
                    onClick={() => (!back ? menuDrawer.toggle() : navigate(`${location}`))}
                ></IconButton>
                <p style={{ color: "#fff" }}>{header.title}</p>
            </Box>
            {/* <IconButton color="primary" onClick={notifications.toggle}> */}
            <Box style={{ flexDirection: "row", gap: "4vw", alignItems: "center" }}>
                <Avatar
                    // src={user?.image}
                    style={{ color: "#fff", width: "8vw", height: "8vw" }}
                    onClick={() => {
                        menuDrawer.toggle()
                        console.log("abriu")
                    }}
                />
            </Box>
        </Paper>
    )
}
