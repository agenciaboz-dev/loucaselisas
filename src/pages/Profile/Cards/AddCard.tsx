import React, { useEffect, useState } from "react"
import { User, UserForm } from "../../../types/server/class"
import { ButtonLisas } from "../../../components/ButtonLisas"
import { useNavigate } from "react-router-dom"
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { ArrowLeftIcon } from "@mui/x-date-pickers"
import { useFormik } from "formik"
import { TextFieldLisas } from "../../../components/TextFieldLisas"
import MaskedInputNando from "../../../components/MaskedNando"
import { useCardNumberMask } from "burgos-masks"
import MaskedInput from "../../../components/MaskedInput"
import { PaymentCardForm } from "../../../types/server/class/PaymentCard"
import { useIo } from "../../../hooks/useIo"
import { useUser } from "../../../hooks/useUser"
import { useSnackbar } from "burgos-snackbar"

interface AddCardProps {
    user: User
}

export const AddCard: React.FC<AddCardProps> = ({ user }) => {
    const navigate = useNavigate()
    const mask = useCardNumberMask()
    const io = useIo()
    const [loading, setLoading] = useState(false)
    const { setUser } = useUser()
    const { snackbar } = useSnackbar()

    const formik = useFormik<PaymentCardForm>({
        initialValues: {
            cvc: "",
            number: "",
            owner: "",
            type: "credit",
            validity: "",
        },

        onSubmit: (values) => {
            if (loading) return
            console.log(values)
            setLoading(true)
            const data: Partial<UserForm> & { id: string } = {
                id: user.id,
                payment_cards: [...user.payment_cards, values],
            }
            io.emit("user:update", data)
        },
    })

    useEffect(() => {
        io.on("user:update", (user: User) => {
            setLoading(false)
            setUser(user)
            snackbar({ severity: "success", text: "Cartão cadastrado com sucesso" })
            navigate("/account/cards")
        })
        io.on("user:update:error", (error: string) => {
            setLoading(false)
            snackbar({ severity: "error", text: error })
        })
        return () => {
            io.off("user:update")
            io.off("user:update:error")
        }
    }, [])

    return (
        <Box sx={{ width: "100%", height: "100%", flexDirection: "column", p: "4vw" }}>
            <Box sx={{ width: "100%", flex: 1, alignItems: "center", gap: "3vw" }}>
                <ButtonLisas
                    sx={{
                        alignItems: "center",
                        gap: "2vw",
                        alignSelf: "flex-start",
                        justifyContent: "start",
                        width: "100%",
                        fontSize: "0.9rem",
                        p: 0,
                    }}
                    onClick={() => navigate("/account/cards")}
                >
                    <ArrowLeftIcon />
                    <p style={{ fontSize: "1.1rem" }}>Cartões de pagamentos salvos</p>
                </ButtonLisas>

                <form onSubmit={formik.handleSubmit}>
                    <Box
                        sx={{
                            width: "100%",
                            p: "6vw",
                            borderRadius: "2vw",
                            gap: "4vw",
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            bgcolor: "#F8F8F8",
                        }}
                    >
                        <TextFieldLisas
                            name="owner"
                            label="Nome no cartão"
                            placeholder="Nome no cartão"
                            value={formik.values.owner}
                            onChange={formik.handleChange}
                        />

                        <TextFieldLisas
                            InputProps={{
                                inputComponent: MaskedInputNando,
                                inputProps: { mask: mask },
                                inputMode: "numeric",
                            }}
                            name="number"
                            label="Número do cartão"
                            placeholder="0000 0000 0000 0000"
                            value={formik.values.number}
                            onChange={formik.handleChange}
                        />

                        <Box sx={{ flexDirection: "row", gap: "4vw" }}>
                            <TextFieldLisas
                                InputProps={{
                                    inputComponent: MaskedInput,
                                    inputProps: { mask: "00/00" },
                                    inputMode: "numeric",
                                }}
                                name="validity"
                                label="Validade"
                                placeholder="00/00"
                                value={formik.values.validity}
                                onChange={formik.handleChange}
                                sx={{ width: "30vw", fontSize: "1.1rem" }}
                            />

                            <TextFieldLisas
                                InputProps={{
                                    inputComponent: MaskedInput,
                                    inputProps: { mask: "000" },
                                    inputMode: "numeric",
                                }}
                                name="cvc"
                                label="CVC"
                                placeholder="000"
                                value={formik.values.cvc}
                                onChange={formik.handleChange}
                                sx={{ width: "20vw", fontSize: "1.1rem" }}
                            />
                            <RadioGroup name="type" value={formik.values.type} onChange={formik.handleChange}>
                                <FormControlLabel control={<Radio value={"debit"} />} label="Débito" />
                                <FormControlLabel control={<Radio value={"credit"} />} label="Crédito" />
                            </RadioGroup>
                        </Box>
                    </Box>

                    <ButtonLisas
                        type="submit"
                        loading={loading}
                        invert
                        variant="contained"
                        fullWidth
                        sx={{
                            fontSize: "1.1rem",
                        }}
                    >
                        Salvar Perfil
                    </ButtonLisas>
                </form>
            </Box>
        </Box>
    )
}
