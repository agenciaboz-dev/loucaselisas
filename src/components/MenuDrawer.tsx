import React, { useEffect } from "react"
import { Avatar, Box, Drawer, IconButton, MenuItem, SxProps, useRadioGroup } from "@mui/material"
import { useUser } from "../hooks/useUser"
import { useNavigationList } from "../hooks/useNavigationList"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useNavigate } from "react-router-dom"
import Ios from "../assets/icons/ios-settings.svg"
import avatar from "../assets/logo/Avatar.png"

import LogoutIcon from "@mui/icons-material/Logout"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { colors } from "../styles/colors"

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const navigationItems = useNavigationList()
    const admDrawerItems = navigationItems.admin.drawer

    const navigate = useNavigate()

    const { open, setOpen } = useMenuDrawer()
    const { user } = useUser()

    const iconStyle: SxProps = {
        width: "5vw",
        height: "auto",
        color: colors.primary,
    }

    const iconButtonStyle: SxProps = {
        height: "9vw",
        width: "9vw",
        padding: "1.5vw",
        color: "#fff",
        alignSelf: "end",
    }

    const menuItemStyle: SxProps = {
        fontSize: "1.2rem",
        height: "fit-content",
        alignItems: "center",
        padding: "0 4vw",
        color: colors.primary,
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer
            anchor={"left"}
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    padding: "6vw 3vw",
                    width: "75vw",
                    height: "100%",

                    overflowX: "hidden",
                    backgroundColor: colors.terciary,
                    justifyContent: "space-between",
                },
            }}
            // ModalProps={{ BackdropProps: { sx: backdropStyle } }}
            keepMounted
        >
            <Box>
                <Box sx={{ justifyContent: "space-between", width: "100%", padding: "4vw", gap: "5vw" }}>
                    <IconButton color="default" sx={iconButtonStyle} onClick={handleClose}>
                        <KeyboardBackspaceIcon sx={iconStyle} />
                    </IconButton>
                    <Box sx={{ alignItems: "center", gap: "4vw", flexDirection: "row" }}>
                        <Avatar sx={{ width: "15vw", height: "15vw", alignSelf: "center" }} />
                        <Box>
                            <p style={{ color: colors.primary, fontSize: "1.1rem" }}>@{user?.username}</p>
                            <p style={{ color: colors.primary, fontSize: "0.8rem" }}>{user?.name}</p>
                        </Box>
                    </Box>
                </Box>
                {/*  */}
                <Box sx={{ flexDirection: "column", paddingTop: "4vw" }}>
                    {admDrawerItems.map((menu) => (
                        <MenuItem
                            key={menu.location}
                            onClick={() => {
                                handleClose()
                                navigate(menu.location)
                            }}
                            sx={menuItemStyle}
                        >
                            {menu.icon}
                            {menu.title}
                        </MenuItem>
                    ))}
                </Box>
            </Box>
        </Drawer>
    )
}
