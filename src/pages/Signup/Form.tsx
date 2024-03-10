import React from "react"
import { User } from "../../types/server/class"
import { Box, MenuItem, TextField, ThemeProvider, createTheme } from "@mui/material"
import { LocalizationProvider, MobileDatePicker, ptBR } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import dayjs from "dayjs"

import { textField } from "../../styles/textField"

import MaskedInputNando from "../../components/MaskedNando"
import { useCpfMask, usePhoneMask } from "burgos-masks"
import { useEstadosBrasil } from "../../hooks/useEstadosBrasil"
import { usePronoun } from "../../hooks/usePronoun"
import { colors } from "../../styles/colors"

interface FormProps {
    values: Partial<User>
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
    pickDate: dayjs.Dayjs | null
    setPickDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
}

const newTheme = (theme: any) =>
    createTheme({
        ...theme,
        components: {
            MuiPickersToolbar: {
                styleOverrides: {
                    root: {
                        color: "#fff",

                        borderWidth: 0,
                        backgroundColor: colors.primary,
                    },
                },
            },
            MuiPickersMonth: {
                styleOverrides: {
                    monthButton: {
                        borderRadius: 20,
                        borderWidth: 0,
                        border: "0px solid",
                    },
                },
            },
            MuiPickersDay: {
                styleOverrides: {
                    root: {
                        color: colors.primary,
                        borderRadius: 20,
                        borderWidth: 0,
                    },
                },
            },
        },
    })
export const Form: React.FC<FormProps> = ({ values, handleChange, pickDate, setPickDate }) => {
    const estados = useEstadosBrasil()
    const pronoun = usePronoun()

    return (
        <Box sx={{ width: "100%", gap: "2vw", alignItems: "center", justifyContent: "center" }}>
            <TextField
                label="Nome"
                placeholder="Nome"
                name="name"
                value={values.name}
                onChange={handleChange}
                sx={{ ...textField, width: "100%" }}
                required
            />
            <Box sx={{ flexDirection: "row", gap: "2vw" }}>
                <TextField
                    label="CPF"
                    placeholder="CPF"
                    name="cpf"
                    value={values.cpf}
                    onChange={handleChange}
                    sx={{ ...textField, width: "100%" }}
                    InputProps={{
                        inputComponent: MaskedInputNando,
                        inputProps: { mask: useCpfMask, inputMode: "numeric" },
                    }}
                    required
                />

                <TextField
                    select
                    onChange={handleChange}
                    label="UF"
                    name="uf"
                    sx={{
                        ...textField,
                        width: "100%",
                    }}
                    value={values.uf}
                    InputProps={{
                        sx: {
                            ...textField,
                        },
                    }}
                    SelectProps={{
                        MenuProps: {
                            MenuListProps: { sx: { width: "100%", maxHeight: "80vw", overflowY: "auto" } },
                        },
                    }}
                    required
                >
                    <MenuItem
                        value={0}
                        sx={{
                            display: "none",
                        }}
                    />
                    {estados.map((estado) => (
                        <MenuItem
                            key={estado.value}
                            value={estado.value}
                            sx={{
                                width: "100%",
                            }}
                        >
                            {estado.value}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
            >
                <DemoContainer components={["MobileDatePicker"]} sx={{ width: "100%" }}>
                    <ThemeProvider theme={newTheme}>
                        <MobileDatePicker
                            sx={{ ...textField }}
                            format="DD/MM/YYYY"
                            value={pickDate}
                            onChange={(newDate) => {
                                if (newDate !== null) {
                                    setPickDate(newDate)
                                }
                            }}
                            timezone="system"
                        />
                    </ThemeProvider>
                </DemoContainer>
            </LocalizationProvider>
            <TextField
                label="E-mail"
                placeholder="E-mail"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                sx={{ ...textField, width: "100%" }}
                required
            />
            <Box sx={{ flexDirection: "row", gap: "2vw" }}>
                <TextField
                    label="Username"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    sx={{ ...textField, width: "100%" }}
                    required
                />
                <TextField
                    label="Senha"
                    placeholder="Senha"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    sx={{ ...textField, width: "100%" }}
                    required
                />
            </Box>
            <Box sx={{ flexDirection: "row", gap: "3vw" }}>
                <TextField
                    label="Telefone"
                    placeholder="Telefone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    sx={{ ...textField, width: "100%" }}
                    InputProps={{
                        inputComponent: MaskedInputNando,
                        inputProps: { mask: usePhoneMask, inputMode: "numeric" },
                    }}
                    required
                />
                <TextField
                    select
                    onChange={handleChange}
                    label="Pronome"
                    name="pronoun"
                    sx={{
                        ...textField,
                        width: "100%",
                    }}
                    value={values.pronoun}
                    InputProps={{
                        sx: {
                            ...textField,
                        },
                    }}
                    SelectProps={{
                        MenuProps: {
                            MenuListProps: { sx: { width: "100%", maxHeight: "80vw", overflowY: "auto" } },
                        },
                    }}
                    required
                >
                    <MenuItem
                        value={0}
                        sx={{
                            display: "none",
                        }}
                    />
                    {pronoun.map((pronoun) => (
                        <MenuItem
                            key={pronoun.value}
                            value={pronoun.value}
                            sx={{
                                width: "100%",
                            }}
                        >
                            {pronoun.value}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
        </Box>
    )
}
