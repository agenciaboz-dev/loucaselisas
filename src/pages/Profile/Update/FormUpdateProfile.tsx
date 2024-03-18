import { Box, MenuItem, Select } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import { TextFieldLisas } from '../../../components/TextFieldLisas'
import { ButtonLisas,  } from '../../../components/ButtonLisas'
import { useEstadosBrasil } from '../../../hooks/useEstadosBrasil'
import { User, UserForm } from '../../../types/server/class'
import { useIo } from '../../../hooks/useIo'
import { useUser } from '../../../hooks/useUser'
import { useSnackbar } from 'burgos-snackbar'
import { useNavigate } from 'react-router-dom'

interface FormUpdateProfileProps {
    user:User
}

export const FormUpdateProfile:React.FC<FormUpdateProfileProps> = ({user}) => {

    const estados = useEstadosBrasil()
    const [loading, setLoading] = useState(false)
    const io = useIo()
    const {setUser} = useUser()
    const { snackbar } = useSnackbar()
    const navigate = useNavigate()


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
                tiktok: values.tiktok   
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
                    <Select
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
                        <MenuItem value={"mr"}>Sr.</MenuItem>
                        <MenuItem value={"mrs"}>Sra.</MenuItem>
                    </Select>
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
                        name='tikTok' 
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
