import { Button, ButtonProps, CircularProgress, SxProps } from "@mui/material"
import React from "react"
import { colors } from "../styles/colors"

interface ButtonLisasProps extends ButtonProps {
    invert?: boolean
    loading?: boolean
}

export const ButtonLisas: React.FC<ButtonLisasProps> = ({ invert,loading, children, ...props }) => {
    const button_style: SxProps = {
        padding: "3vw",
        borderRadius: "8vw",
        textTransform: "none",
    }
    return (
        <Button {...props} sx={{ ...button_style, ...props.sx }}>
            {loading ? <CircularProgress size='1.5rem' color="secondary" /> : children}
        </Button>
    )
}
