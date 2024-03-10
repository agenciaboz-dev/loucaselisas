import { Button, ButtonProps, SxProps } from "@mui/material"
import React from "react"
import { colors } from "../styles/colors"

interface ButtonLisasProps extends ButtonProps {
    invert?: boolean
}

export const ButtonLisas: React.FC<ButtonLisasProps> = ({ invert, children, ...props }) => {
    const button_style: SxProps = {
        padding: "3vw",
        borderRadius: "8vw",
        backgroundColor: invert ? colors.primary : colors.secondary,
        color: invert ? colors.secondary : colors.primary,
        textTransform: "none",
    }
    return (
        <Button {...props} sx={{ ...button_style, ...props.sx }}>
            {children}
        </Button>
    )
}
