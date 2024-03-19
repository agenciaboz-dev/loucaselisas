import { Box, MenuItem, } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import { TextFieldLisas } from '../../../components/TextFieldLisas'
import { ButtonLisas,  } from '../../../components/ButtonLisas'
import { usePronoun } from '../../../hooks/usePronoun'
import { useEstadosBrasil } from '../../../hooks/useEstadosBrasil'
import { User, UserForm } from '../../../types/server/class'
import { useIo } from '../../../hooks/useIo'
import { useUser } from '../../../hooks/useUser'
import { useSnackbar } from 'burgos-snackbar'
import { useNavigate } from 'react-router-dom'
import { Avatar, Dropzone,  } from '@files-ui/react'
import media from "../../../assets/media.png"

interface FormUpdateProfileProps {
    user:User
}

export const FormUpdateProfile:React.FC<FormUpdateProfileProps> = ({user}) => {

    const pronouns = usePronoun()
    const estados = useEstadosBrasil()
    const [loading, setLoading] = useState(false)
    const io = useIo()
    const {setUser} = useUser()
    const { snackbar } = useSnackbar()
    const navigate = useNavigate()
    const [image, setImage] = useState<File>()


    const formik = useFormik<UserForm>({
        initialValues: {
            ...user,
            image: null,
            cover: null,
            student: !!user.student

                },

        onSubmit : values => {
            if (loading) return
            console.log (values)
            setLoading(true)
            const data: Partial<UserForm> & {id:string} = {
                id: user.id,
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
                image: image ? {
                    file: image,
                    name: image.name,
                }
                : undefined,
            }
            io.emit("user:update", data)
        }

    });

    useEffect(()=>{
        io.on('user:update', (user:User)=>{
            setLoading(false)
            setUser(user)
            snackbar({severity:"success", text:"Usuário atualizado com sucesso"})
            navigate ("/account")
        })
        io.on( "user:update:error", (error:string)=> {
            setLoading(false)
            snackbar({severity:"error", text:error})
        })
        return ()=> {
            io.off("user:update")
            io.off("user:update:error")
        } 
    }, [])

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{width:1, }}>
                <p style={{paddingLeft:"2vw",fontSize: "0.9rem", color:"#808080"}}>Imagem de capa</p>
                        <Box sx={{ width:1, borderRadius:"3vw", p:"3vw", flexDirection:"collumn", gap:"2vw", alignItems:"center", border:"0.5vw dashed #000"}}>
                        <Avatar 
                                src={
                                    image || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                                }
                                variant="circle"
                                onChange={(file) => setImage(file)}
                                style={{ width: "20vw", height: "20vw", alignSelf: "center" }}
                                emptyLabel="enviar imagem"
                                changeLabel="trocar imagem"
                            />
                            <p style={{fontSize: "0.9rem"}}>Selecione um arquivo para fazer upload</p>
                        </Box>
                <Box sx={{fontSize: "0.9rem", width:1, textAlign:"center", color:"#808080" }}>*informações e restrições de envio de imagem*</Box>
                
            </Box>

            

            <Box sx={{gap:"3vw"}}>
                <TextFieldLisas 
                    name='username' 
                    label='Nome de usuário' 
                    placeholder='Nome de usuário'
                    value={formik.values.username} 
                    onChange={formik.handleChange} 
                />
                <TextFieldLisas 
                    type='email'
                    name='email' 
                    label='Email' 
                    placeholder='Digite o seu email'
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                />
                <TextFieldLisas 
                    type='password'
                    name='password' 
                    label='Nova senha' 
                    placeholder='Digite a nova senha'
                    value={formik.values.password} 
                    onChange={formik.handleChange} 
                />
                <Box sx={{flexDirection:"row", gap: "2vw"}}>
                    <TextFieldLisas
                        select
                        name='pronoun' 
                        label='Pronome' 
                        placeholder='Pronome'
                        value={formik.values.pronoun} 
                        onChange={formik.handleChange}
                        sx={{   
                            flex:1,
                            borderRadius: "5vw"
                        }} 
                    >
                        {pronouns.map((pronoun)=>(
                            <MenuItem key={pronoun.value} value={pronoun.value}>
                                {pronoun.label}
                            </MenuItem>
                        ))}
                    </TextFieldLisas>
                    <TextFieldLisas 
                        name='birth' 
                        label='Data de Nascimento' 
                        placeholder='Data de Nascimento'
                        value={formik.values.birth} 
                        onChange={formik.handleChange} 
                        sx={{flex: "1.5"}}
                    />
                </Box>
                <TextFieldLisas 
                    select
                    name='uf' 
                    label='Estado' 
                    placeholder='UF'
                    value={formik.values.uf} 
                    onChange={formik.handleChange} 
                >
                    {estados.map((estado)=>(
                        <MenuItem key={estado.id} value={estado.value}>
                            {estado.label}
                        </MenuItem>
                    ))}
                </TextFieldLisas>

                <Box sx={{flexDirection:"row", gap: "2vw"}}>
                    <TextFieldLisas 
                        name='phone' 
                        label='Telefone' 
                        placeholder='Telefone'
                        value={formik.values.phone} 
                        onChange={formik.handleChange} 
                        sx={{flex: 1}}
                    />
                    <TextFieldLisas 
                        name='profession' 
                        label='Profissões' 
                        placeholder='Profissão'
                        value={formik.values.profession || ""} 
                        onChange={formik.handleChange} 
                        sx={{flex: 1}}
                    />
                </Box>
                <Box sx={{flexDirection:"row", gap:"2vw"}}>
                    <TextFieldLisas 
                        name='instagram' 
                        label='Instagram' 
                        placeholder='Instagram'
                        value={formik.values.instagram || ""} 
                        onChange={formik.handleChange} 
                    />
                    <TextFieldLisas 
                        name='tiktok' 
                        label='Tik Tok' 
                        placeholder='Tik Tok'
                        value={formik.values.tiktok || ""} 
                        onChange={formik.handleChange} 
                    />
                </Box>
            </Box>

            <ButtonLisas
                type='submit'
                invert
                fullWidth
                sx={{
                    alignItems: "center",
                    gap: "2vw",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                }}
            >
                Salvar Perfil    
            </ButtonLisas>  
        </form>
    )
}
