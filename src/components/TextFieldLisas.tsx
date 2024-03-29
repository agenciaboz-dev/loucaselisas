import { TextField, TextFieldProps } from "@mui/material"
import React from "react"
import { textField } from "../styles/textField"

export const TextFieldLisas: React.FC<TextFieldProps> = ({ ...props }) => {
    return <TextField {...props} sx={{ ...textField, ...props.sx }} />
}

