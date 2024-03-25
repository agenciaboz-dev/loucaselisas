import React, { useEffect } from "react"
import { colors } from "../../styles/colors"
import { Box, TextField } from "@mui/material"
import Logo from "../../assets/Logo/logo.webp"
import { useFormik } from "formik"
import { LoginForm } from "../../types/frontend/LoginForm"
import { useIo } from "../../hooks/useIo"
import { User } from "../../types/server/class"
import { useUser } from "../../hooks/useUser"
import { useSnackbar } from "burgos-snackbar"
import { textField } from "../../styles/textField"
import { ButtonLisas } from "../../components/ButtonLisas"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { useGoogleLogin } from "@react-oauth/google"
import { GoogleLogin } from "@react-oauth/google"

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    const io = useIo()
    const navigate = useNavigate()
    const { setUser } = useUser()
    const { snackbar } = useSnackbar()

    const formik_login = useFormik<LoginForm>({
        initialValues: { login: "", password: "" },
        onSubmit: (values) => {
            io.emit("user:login", values)
            console.log({ form: values })
        },
    })

    useEffect(() => {
        io.on("user:login", (data: User) => {
            if (data) {
                console.log({ User: data })
                setUser(data)
                snackbar({ severity: "success", text: "Você está logado!" })
                navigate(data.admin ? "/admin" : data.student ? "/student" : data.creator ? "/creator" : "/student")
            } else {
                snackbar({ severity: "error", text: "Não foi possível fazer login" })
            }
        })

        io.on("user:login:error", (error) => {
            snackbar({ severity: "error", text: "Algo deu errado!" })
        })

        return () => {
            io.off("user:login")
        }
    }, [])

    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                bgcolor: colors.secondary,
                padding: "4vw",
                justifyContent: "center",
                alignItems: "center",
                gap: "6vw",
            }}
        >
            <img
                src={Logo}
                style={{ width: "68vw", height: "68vw", filter: "invert(1)" }}
                onClick={() => navigate("/home")}
            />
            <p>Entre na sua conta</p>

            <form onSubmit={formik_login.handleSubmit}>
                <Box sx={{ width: "90%", alignItems: "center" }}>
                    <Box sx={{ width: "100%", gap: "3vw", alignItems: "center" }}>
                        <TextField
                            label="CPF ou E-mail"
                            placeholder="CPF ou E-mail"
                            name="login"
                            value={formik_login.values.login}
                            onChange={formik_login.handleChange}
                            sx={{ ...textField, width: "100%" }}
                            required
                        />
                        <TextField
                            label="Senha"
                            placeholder="Senha"
                            name="password"
                            type="password"
                            value={formik_login.values.password}
                            onChange={formik_login.handleChange}
                            sx={{ ...textField, width: "100%" }}
                            required
                        />
                    </Box>
                    <ButtonLisas
                        sx={{ fontSize: "3vw", textDecoration: "underline", alignSelf: "end" }}
                        onClick={() => navigate("/signup")}
                    >
                        Cadastre-se
                    </ButtonLisas>
                </Box>
                <Box sx={{ width: "100%", alignItems: "center", gap: "2vw" }}>
                    <ButtonLisas sx={{ fontSize: "3.5vw", width: "60%" }} variant='contained' type="submit">
                        Entrar
                    </ButtonLisas>
                    <ButtonLisas
                        sx={{ fontSize: "3.5vw", width: "60%", gap: "2vw" }}
                        variant="outlined"
                        // onClick={() => login()}
                    >
                        <FcGoogle style={{ width: "5vw", height: "5vw" }} />
                        Entrar com o google
                    </ButtonLisas>
                    {/* <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            console.log(credentialResponse)
                        }}
                        onError={() => {
                            console.log("Login Failed")
                        }}
                        useOneTap
                    /> */}
                </Box>
            </form>
        </Box>
    )
}
