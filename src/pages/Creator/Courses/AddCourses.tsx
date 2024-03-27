import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { useFormik } from "formik"
import { TextFieldLisas } from "../../../components/TextFieldLisas"
import { CourseForm } from "../../../types/server/class/Course"
import { Avatar } from "@files-ui/react"
import { ButtonLisas } from "../../../components/ButtonLisas"
import { useIo } from "../../../hooks/useIo"
import { User } from "../../../types/server/class"
import { useUser } from "../../../hooks/useUser"
import { useSnackbar } from "burgos-snackbar"
import { useNavigate } from "react-router-dom"

interface AddCoursesProps {
    user: User
}

export const AddCourses: React.FC<AddCoursesProps> = ({ user }) => {
    //gerar numero aleatório, deve ser excluido depois
    function getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const numeroAleatorio = getRandomNumber(1, 1000)
    //gerar numero aleatório, deve ser excluido depois

    const io = useIo()
    const [loading, setLoading] = useState(false)
    const { setUser } = useUser()
    const { snackbar } = useSnackbar()
    const navigate = useNavigate()
    const [image, setImage] = useState<File>()

    const formik = useFormik<CourseForm>({
        initialValues: {
            description: "",
            language: "",
            lessons: [],
            categories: [],
            creators: [],
            gallery: {
                images: [],
                name: "",
                videos: [],
            },
            name: "",
            owner_id: "",
            published: "",
            recorder: "",
            cover: [],
        },

        onSubmit: (values) => {
            if (!user.creator) return
            if (loading) return
            console.log(values)
            setLoading(true)
            const data: CourseForm = {
                description: values.description,
                language: values.language,
                lessons: [],
                categories: values.categories,
                creators: values.creators,
                gallery: {
                    images: [],
                    name: "",
                    videos: [],
                },
                name: `curso teste ${numeroAleatorio}`,
                owner_id: user.creator.id,
                published: "",
                recorder: values.recorder,
                cover: undefined,
            }

            //  if (image) {
            //    const data  = {
            //      image: {
            //        file: image,
            //        name: image.name,
            //      },
            //      id: user.id,
            //    };
            //    io.emit("course:new", data);
            //  }

            io.emit("course:new", data)
        },
    })

    useEffect(() => {
        io.on("course:new", (user: User) => {
            setLoading(false)
            setUser(user)
            snackbar({ severity: "success", text: "curso cadastrado com sucesso" })
            //navigate("/account")
        })
        io.on("course:new:error", (error: string) => {
            setLoading(false)
            snackbar({ severity: "error", text: error })
            console.log(error)
        })
        return () => {
            io.off("course:new")
            io.off("course:new:error")
        }
    }, [])

    return (
        <Box sx={{ padding: "5vw" }}>
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{ gap: "4vw" }}>
                    <TextFieldLisas
                        name="recorder"
                        label="gravadora"
                        placeholder="gravadora"
                        value={formik.values.recorder}
                        onChange={formik.handleChange}
                    />
                    {/* <TextFieldLisas
                        name="creators"
                        label="participantes"
                        placeholder="participantes"
                        value={formik.values.creators}
                        onChange={formik.handleChange}
                    /> */}
                    <TextFieldLisas
                        name="language"
                        label="idioma"
                        placeholder="idioma"
                        value={formik.values.language}
                        onChange={formik.handleChange}
                    />
                    {/* <TextFieldLisas
                        name="categories"
                        label="categoria"
                        placeholder="categoria"
                        value={formik.values.categories}
                        onChange={formik.handleChange}
                    /> */}
                    {/* <TextFieldLisas
                        name="categories"
                        label="categoria-secundaria"
                        placeholder="categoria-secundaria"
                        value={formik.values.categories}
                        onChange={formik.handleChange}
                    /> */}
                    {/* <Box gap="2vw" alignItems="center">
                        imagem da capa
                        <Avatar
                            src={
                                image ||
                                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                            }
                            onChange={(file) => setImage(file)}
                            style={{ width: "23vw", height: "23vw", alignSelf: "center" }}
                            emptyLabel="enviar capa"
                            changeLabel="trocar capa"
                        />
                    </Box> */}
                    <TextFieldLisas
                        name="description"
                        label="descrição"
                        placeholder="descrição"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
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
                        Salvar Curso
                    </ButtonLisas>
                </Box>
            </form>
        </Box>
    )
}
