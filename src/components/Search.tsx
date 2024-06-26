import React from "react"
import { Box, TextField, useTheme } from "@mui/material"
import { searchField } from "../styles/textField"
import { PiListThin } from "react-icons/pi"
import { CiSearch } from "react-icons/ci"
interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
    const colors = useTheme().palette
    return (
        <Box sx={{}}>
            <TextField
                sx={{ ...searchField, bgcolor: " rgba(236, 230, 240, 1)", borderRadius: "6vw" }}
                value={"  Buscar cursos"}
                InputProps={{
                    startAdornment: <PiListThin color={colors.primary.main} style={{ width: "6vw", height: "6vw" }} />,
                    endAdornment: <CiSearch color={colors.primary.main} style={{ width: "6vw", height: "6vw" }} />,
                }}
            />
        </Box>
    )
}
