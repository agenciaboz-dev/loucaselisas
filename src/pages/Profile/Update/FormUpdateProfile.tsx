import { Box, IconButton, MenuItem } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import { TextFieldLisas } from "../../../components/TextFieldLisas"
import { ButtonLisas } from "../../../components/ButtonLisas"
import { usePronoun } from "../../../hooks/usePronoun"
import { useEstadosBrasil } from "../../../hooks/useEstadosBrasil"
import { User, UserForm } from "../../../types/server/class"
import { useIo } from "../../../hooks/useIo"
import { useUser } from "../../../hooks/useUser"
import { useSnackbar } from "burgos-snackbar"
import { useNavigate } from "react-router-dom"
import { Avatar, Dropzone } from "@files-ui/react"
import media from "../../../assets/media.png"
import { UserImageForm } from "../../../types/server/class/User"
import { FcAddImage } from "react-icons/fc"
import { FiMoreHorizontal } from "react-icons/fi"
import { IoAddCircle, IoAddCircleOutline, IoTrash, IoTrashOutline } from "react-icons/io5"

interface FormUpdateProfileProps {
    user: User
}

export const FormUpdateProfile: React.FC<FormUpdateProfileProps> = ({ user }) => {
    const pronouns = usePronoun()
    const estados = useEstadosBrasil()
    const [loading, setLoading] = useState(false)
    const io = useIo()
    const { setUser } = useUser()
    const { snackbar } = useSnackbar()
    const navigate = useNavigate()
    const [image, setImage] = useState<File>()
    const [cover, setCover] = useState<File>()

    const formik = useFormik<Partial<UserForm>>({
        initialValues: {
            ...user,
            image: null,
            cover: null,
            student: !!user.student,
        },

        onSubmit: (values) => {
            if (loading) return
            console.log(values)
            setLoading(true)
            const data: Partial<UserForm> & { id: string } = {
                id: user.id,
                name: values.name,
                username: values.username,
                email: values.email,
                password: values.password,
                pronoun: values.pronoun,
                birth: values.birth,
                uf: values.uf,
                phone: values.phone,
                profession: values.profession,
                instagram: values.instagram,
                tiktok: values.tiktok,
            }
            if (image) {
                const data: UserImageForm = {
                    image: {
                        file: image,
                        name: image.name,
                    },
                    id: user.id,
                }
                io.emit("user:image:update", data)
            }
            if (cover) {
                const data: UserImageForm = {
                    cover: {
                        file: cover,
                        name: cover.name,
                    },
                    id: user.id,
                }
                io.emit("user:image:update", data)
            }
            io.emit("user:update", data)
        },
    })

    useEffect(() => {
        io.on("user:update", (user: User) => {
            setLoading(false)
            setUser(user)
            snackbar({ severity: "success", text: "Usuário atualizado com sucesso" })
            // navigate("/account")
        })
        io.on("user:update:error", (error: string) => {
            setLoading(false)
            snackbar({ severity: "error", text: error })
            console.log(error)
        })
        return () => {
            io.off("user:update")
            io.off("user:update:error")
        }
    }, [])

    return (
        <Box sx={{ overflowY: "auto", gap: "2vw" }}>
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{ width: 1, gap: "vw" }}>
                    <p style={{ paddingLeft: "2vw", fontSize: "0.9rem", color: "#808080" }}>Imagem de perfil</p>
                    <Box
                        sx={{
                            width: 1,
                            borderRadius: "3vw",
                            p: "3vw",
                            flexDirection: "row",
                            gap: "2vw",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Avatar
                            src={
                                image ||
                                user.image ||
                                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                            }
                            variant="circle"
                            onChange={(file) => setImage(file)}
                            style={{ width: "23vw", height: "23vw", alignSelf: "center" }}
                            emptyLabel="enviar imagem"
                            changeLabel="trocar imagem"
                        />
                        <Box sx={{ flexDirection: "column", width: 0.7, gap: "2vw" }}>
                            <Box sx={{ flexDirection: "row", width: 1, justifyContent: "space-between" }}>
                                <ButtonLisas
                                    variant="contained"
                                    sx={{
                                        gap: "2vw",
                                        bgcolor: "rgba(102, 98, 93, 1)",
                                        width: "83%",
                                        p: "0vw",
                                        fontSize: "1rem",
                                    }}
                                >
                                    <IoAddCircleOutline style={{ width: "5vw", height: "5vw" }} />
                                    Inserir Foto
                                </ButtonLisas>
                                <IconButton sx={{ bgcolor: "rgba(230, 225, 220, 1)" }}>
                                    <IoTrashOutline style={{ width: "5vw", height: "5vw" }} />
                                </IconButton>
                            </Box>
                            <Box sx={{ fontSize: "0.7rem", width: 1, textAlign: "center", color: "#808080" }}>
                                tamanho padrão recomendado é de 256x256 pixels JPG ou PNG
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: 1, gap: "vw" }}>
                    <p style={{ paddingLeft: "2vw", fontSize: "0.9rem", color: "#808080" }}>Imagem de capa</p>
                    <Box
                        sx={{
                            width: 1,
                            borderRadius: "3vw",
                            p: "3vw",
                            flexDirection: "row",
                            gap: "2vw",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Avatar
                            src={
                                cover ||
                                user.cover ||
                                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                            }
                            onChange={(file) => setCover(file)}
                            style={{ width: "23vw", height: "23vw", alignSelf: "center" }}
                            emptyLabel="enviar imagem"
                            changeLabel="trocar imagem"
                        />
                        <Box sx={{ flexDirection: "column", width: 0.7, gap: "2vw" }}>
                            <Box sx={{ flexDirection: "row", width: 1, justifyContent: "space-between" }}>
                                <ButtonLisas
                                    variant="contained"
                                    sx={{
                                        gap: "2vw",
                                        bgcolor: "rgba(102, 98, 93, 1)",
                                        width: "83%",
                                        p: "0vw",
                                        fontSize: "1rem",
                                    }}
                                >
                                    <IoAddCircleOutline style={{ width: "5vw", height: "5vw" }} />
                                    Inserir Foto
                                </ButtonLisas>
                                <IconButton sx={{ bgcolor: "rgba(230, 225, 220, 1)" }}>
                                    <IoTrashOutline style={{ width: "5vw", height: "5vw" }} />
                                </IconButton>
                            </Box>
                            <Box sx={{ fontSize: "0.7rem", width: 1, textAlign: "center", color: "#808080" }}>
                                tamanho padrão recomendado é de 256x256 pixels JPG ou PNG
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ gap: "6vw", pb: "2vw", bgcolor: "rgba(248, 248, 248, 1)", p: "4vw" }}>
                    <Box sx={{ gap: "4vw" }}>
                        <TextFieldLisas
                            name="name"
                            label="Nome"
                            placeholder="Nome "
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        <TextFieldLisas
                            name="username"
                            label="Nome de usuário"
                            placeholder="Nome de usuário"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        <TextFieldLisas
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Digite o seu email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <TextFieldLisas
                            type="password"
                            name="password"
                            label="Nova senha"
                            placeholder="Digite a nova senha"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <Box sx={{ flexDirection: "row", gap: "3vw" }}>
                            <TextFieldLisas
                                select
                                name="pronoun"
                                label="Pronome"
                                placeholder="Pronome"
                                value={formik.values.pronoun}
                                onChange={formik.handleChange}
                                sx={{
                                    flex: 1,
                                    borderRadius: "5vw",
                                }}
                                InputProps={{
                                    sx: {
                                        height: "9.7vw",
                                    },
                                }}
                            >
                                {pronouns.map((pronoun) => (
                                    <MenuItem key={pronoun.value} value={pronoun.value}>
                                        {pronoun.label}
                                    </MenuItem>
                                ))}
                            </TextFieldLisas>
                            <TextFieldLisas
                                name="birth"
                                label="Data de Nascimento"
                                placeholder="Data de Nascimento"
                                value={formik.values.birth}
                                onChange={formik.handleChange}
                                sx={{ flex: "1.5" }}
                            />
                        </Box>
                        <TextFieldLisas
                            select
                            name="uf"
                            label="Estado"
                            placeholder="UF"
                            value={formik.values.uf}
                            onChange={formik.handleChange}
                            InputProps={{
                                sx: {
                                    height: "9.7vw",
                                },
                            }}
                        >
                            {estados.map((estado) => (
                                <MenuItem key={estado.id} value={estado.value}>
                                    {estado.label}
                                </MenuItem>
                            ))}
                        </TextFieldLisas>
                        <Box sx={{ flexDirection: "row", gap: "3vw" }}>
                            <TextFieldLisas
                                name="phone"
                                label="Telefone"
                                placeholder="Telefone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                sx={{ flex: 1 }}
                            />
                            <TextFieldLisas
                                name="profession"
                                label="Profissões"
                                placeholder="Profissão"
                                value={formik.values.profession || ""}
                                onChange={formik.handleChange}
                                sx={{ flex: 1 }}
                            />
                        </Box>
                        <Box sx={{ flexDirection: "row", gap: "3vw" }}>
                            <TextFieldLisas
                                name="instagram"
                                label="Instagram"
                                placeholder="Instagram"
                                value={formik.values.instagram || ""}
                                onChange={formik.handleChange}
                                InputProps={{ startAdornment: "@" }}
                            />
                            <TextFieldLisas
                                name="tiktok"
                                label="Tik Tok"
                                placeholder="Tik Tok"
                                value={formik.values.tiktok || ""}
                                onChange={formik.handleChange}
                                InputProps={{ startAdornment: "@" }}
                            />
                        </Box>
                    </Box>
                </Box>
                <ButtonLisas
                    type="submit"
                    variant="contained"
                    sx={{
                        gap: "2vw",
                        fontSize: "1rem",
                        width: 0.95,
                        alignSelf: "center",
                    }}
                >
                    Salvar Perfil
                </ButtonLisas>
            </form>
        </Box>
    )
}
