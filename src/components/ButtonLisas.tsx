import { Button, ButtonProps, SxProps } from "@mui/material"
import React from "react"
import { colors } from "../styles/colors"

export const ButtonLisas: React.FC<ButtonProps> = (props) => {
    const button_style: SxProps = {
        padding: "3vw",
        borderRadius: "8vw",
        backgroundColor: "#fff",
        color: colors.primary,
        textTransform: "none",
       
    }
    return <Button {...props} sx={{ ...button_style, ...props.sx }}></Button>
}
