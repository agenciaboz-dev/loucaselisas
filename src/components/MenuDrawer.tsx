import React, { useEffect } from "react"
import { Avatar, Box, Drawer, IconButton, MenuItem, SxProps, useRadioGroup, useTheme } from "@mui/material"
import { useUser } from "../hooks/useUser"
import { useNavigationList } from "../hooks/useNavigationList"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useNavigate } from "react-router-dom"
import Ios from "../assets/icons/ios-settings.svg"
import avatar from "../assets/logo/Avatar.png"

import LogoutIcon from "@mui/icons-material/Logout"
import { useMenuDrawer } from "../hooks/useMenuDrawer"

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const colors = useTheme().palette
    const navigationItems = useNavigationList()
    const admDrawerItems = navigationItems.admin.drawer

    const navigate = useNavigate()

    const menu = useMenuDrawer()
    const { user, logout } = useUser()

    const iconStyle: SxProps = {
        width: "5vw",
        height: "auto",
        color: colors.primary.main,
    }

    const iconButtonStyle: SxProps = {
        height: "9vw",
        width: "9vw",
        padding: "1.5vw",
        color: colors.secondary.main,
        alignSelf: "end",
    }

    const menuItemStyle: SxProps = {
        fontSize: "1.2rem",
        height: "fit-content",
        alignItems: "center",
        padding: "0 4vw",
        color: colors.primary.main,
    }

    const handleClose = () => {
        menu.setOpen(false)
    }

    return (
        <Drawer
            anchor={"left"}
            open={menu.open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    padding: "6vw 3vw",
                    width: "75vw",
                    height: "100%",

                    overflowX: "hidden",
                    backgroundColor: colors.background.paper,
                    justifyContent: "space-between",
                },
            }}
            // ModalProps={{ BackdropProps: { sx: backdropStyle } }}
            keepMounted
        >
            <Box sx={{ height: "100%" }}>
                <Box sx={{ width: "100%", padding: "2vw", gap: "5vw", height: "100%" }}>
                    <Box sx={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ alignItems: "center", gap: "4vw", flexDirection: "row" }}>
                            <Avatar sx={{ width: "15vw", height: "15vw", alignSelf: "center" }} />
                            <Box
                                sx={{
                                    color: "primary.main",
                                }}
                            >
                                <p style={{ fontSize: "1.1rem" }}>@{user?.username}</p>
                                <p style={{ fontSize: "0.8rem" }}>{user?.name}</p>
                            </Box>
                        </Box>
                        <IconButton color="default" sx={iconButtonStyle} onClick={handleClose}>
                            <KeyboardBackspaceIcon sx={iconStyle} />
                        </IconButton>
                    </Box>
                    <Box sx={{ justifyContent: "space-between", height: "100%" }}>
                        <Box sx={{ flexDirection: "column", paddingTop: "4vw", alignItems: "flex-start" }}>
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
                </Box>
                {/*  */}
                <Box sx={{ alignItems: "flex-start", p: "2vw" }}>
                    <IconButton
                        onClick={() => {
                            logout()
                            menu.toggle()
                        }}
                    >
                        <LogoutIcon />
                    </IconButton>
                </Box>
            </Box>
        </Drawer>
    )
}
