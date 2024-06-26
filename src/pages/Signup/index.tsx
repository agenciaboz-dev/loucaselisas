import { Box, MenuItem, TextField, ThemeProvider, createTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
import Logo from "../../assets/Logo/logo.webp"
import { textField } from "../../styles/textField"
import { useIo } from "../../hooks/useIo"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"
import { useSnackbar } from "burgos-snackbar"
import { useFormik } from "formik"
import { User, UserForm } from "../../types/server/class"
import { ButtonLisas } from "../../components/ButtonLisas"

import MaskedInputNando from "../../components/MaskedNando"
import { useCpfMask, usePhoneMask } from "burgos-masks"

import { useEstadosBrasil } from "../../hooks/useEstadosBrasil"
import { usePronoun } from "../../hooks/usePronoun"

import { LocalizationProvider, MobileDatePicker, ptBR } from "@mui/x-date-pickers"
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs"
import { useDataHandler } from "../../hooks/useDataHandler"
import { Form } from "./Form"

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
    const io = useIo()
    const navigate = useNavigate()
    const { unmask } = useDataHandler()
    const { setUser } = useUser()
    const { snackbar } = useSnackbar()

    const [pickDate, setPickDate] = useState<Dayjs | null>(null)

    const formik_signup = useFormik<UserForm>({
        initialValues: {
            username: "",
            email: "",
            password: "",
            name: "",
            cpf: "",
            birth: "",
            phone: "",
            pronoun: "",
            uf: "",
            bio: "",
            instagram: "",
            tiktok: "",
            profession: "",
            student: true,
            cover: null,
            creator: null,
            google_id: null,
            google_token: null,
            image: null,
            payment_cards: [],
        },
        onSubmit: (values) => {
            const data = {
                ...values,
                cpf: unmask(values.cpf || ""),
                birth: dayjs(pickDate).valueOf().toString(),
                phone: unmask(values.phone || ""),
            }
            io.emit("user:signup", data)
            console.log({ form: data })
        },
    })

    useEffect(() => {
        io.on("user:signup", (data: User) => {
            console.log({ User: data })
            // setUser(data)
            snackbar({ severity: "success", text: "Cadastro realizado com sucesso!" })
            navigate(data.admin ? "/admin" : data.creator ? "/creator" : "/login")
        })

        return () => {
            io.off("user:signup")
        }
    }, [])

    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                bgcolor: "secondary.main",
                justifyContent: "center",
                alignItems: "center",
                gap: "5vw",
                padding: "2vw",
                overflowY: "auto",
            }}
        >
            <img src={Logo} style={{ width: "45vw", height: "45vw", filter: "invert(1)" }} onClick={() => navigate("/home")} />
            <p style={{ marginLeft: "7vw", alignSelf: "flex-start" }}>Cadastre seus dados</p>

            <form onSubmit={formik_signup.handleSubmit}>
                <Box sx={{ width: "90%", alignItems: "center" }}>
                    <Form values={formik_signup.values} handleChange={formik_signup.handleChange} pickDate={pickDate} setPickDate={setPickDate} />
                </Box>
                <Box sx={{ width: "100%", alignItems: "center" }}>
                    <ButtonLisas sx={{ fontSize: "3.5vw", width: "50%" }} invert type="submit">
                        Cadastrar
                    </ButtonLisas>
                    <ButtonLisas sx={{ fontSize: "3vw", textDecoration: "underline" }} onClick={() => navigate("/home")}>
                        Voltar
                    </ButtonLisas>
                </Box>
            </form>
        </Box>
    )
}
