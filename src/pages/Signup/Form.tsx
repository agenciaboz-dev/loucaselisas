import React from "react"
import { User, UserForm } from "../../types/server/class"
import { Box, MenuItem, TextField, ThemeProvider, createTheme } from "@mui/material"
import { LocalizationProvider, MobileDatePicker, ptBR } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import dayjs from "dayjs"
import { FiAtSign } from "react-icons/fi"
import { textField } from "../../styles/textField"

import MaskedInputNando from "../../components/MaskedNando"
import { useCpfMask, usePhoneMask } from "burgos-masks"
import { useEstadosBrasil } from "../../hooks/useEstadosBrasil"
import { usePronoun } from "../../hooks/usePronoun"
import { colors } from "../../styles/colors"
import { TextFieldLisas } from "../../components/TextFieldLisas"

interface FormProps {
    values: UserForm
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
    return (
        <Box sx={{ width: "100%", gap: "2vw", alignItems: "center", justifyContent: "center" }}>
            <TextFieldLisas
                label="Nome"
                placeholder="Nome"
                name="name"
                value={values.name}
                onChange={handleChange}
                sx={{ width: "100%" }}
                required
            />
            <Box sx={{ flexDirection: "row", gap: "2vw", width: "100%" }}>
                <TextFieldLisas
                    label="CPF"
                    placeholder="CPF"
                    name="cpf"
                    value={values.cpf}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                    InputProps={{
                        //@ts-ignore
                        inputComponent: MaskedInputNando,
                        inputProps: { mask: useCpfMask, inputMode: "numeric" },
                    }}
                    required
                />

                <TextFieldLisas
                    label="Telefone"
                    placeholder="Telefone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                    InputProps={{
                        //@ts-ignore
                        inputComponent: MaskedInputNando,
                        inputProps: { mask: usePhoneMask, inputMode: "numeric" },
                    }}
                    required
                />
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
            <TextFieldLisas
                label="E-mail"
                placeholder="E-mail"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                sx={{ width: "100%" }}
                required
            />
            <Box sx={{ flexDirection: "row", gap: "2vw", width: "100%" }}>
                <TextFieldLisas
                    label="Username"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                    required
                />
                <TextFieldLisas
                    label="Senha"
                    placeholder="Senha"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                    required
                />
            </Box>
            <Box sx={{ flexDirection: "row", gap: "2vw", width: "100%" }}>
                <TextFieldLisas
                    label="Instagram"
                    placeholder="nomedeusuario"
                    name="instagram"
                    value={values.instagram}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                    InputProps={{ startAdornment: <FiAtSign /> }}
                />
                <TextFieldLisas
                    label="Tiktok"
                    placeholder="nomeusuario"
                    name="tiktok"
                    value={values.tiktok}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                    InputProps={{ startAdornment: <FiAtSign /> }}
                />
            </Box>
            <TextFieldLisas
                label="Profissão"
                placeholder="Profissão"
                name="profession"
                value={values.profession}
                onChange={handleChange}
                sx={{ width: "100%" }}
            />
        </Box>
    )
}
