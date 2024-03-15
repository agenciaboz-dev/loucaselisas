import { Box, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import { TextFieldLisas } from '../../../components/TextFieldLisas'
import { ButtonLisas } from '../../../components/ButtonLisas'

export const FormUpdateProfile = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            gender: "",
            birthDate: "",
            state: "",
            phone: "",
            profession: "",
            instagram: "",
            tikTok:  ""
        },

        onSubmit : values => {
            console.log(values);
        }

    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{gap:"3vw"}}>
                <TextFieldLisas 
                    name='name' 
                    label='Nome de usuário' 
                    placeholder='Nome de usuário'
                    value={formik.values.name} 
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
                    value={formik.values.name} 
                    onChange={formik.handleChange} 
                />
                <Box sx={{flexDirection:"row", gap: "2vw"}}>
                    <Select
                        name='gender' 
                        label='Sexo' 
                        placeholder='Sexo'
                        value={formik.values.gender} 
                        onChange={formik.handleChange}
                        sx={{   
                            flex:1,
                            borderRadius: "5vw"
                        }} 
                    >
                        <MenuItem value={"male"}>masculino</MenuItem>
                        <MenuItem value={"female"}>feminino</MenuItem>
                    </Select>
                    <TextFieldLisas 
                        name='birthDate' 
                        label='Data de Nascimento' 
                        placeholder='Data de Nascimento'
                        value={formik.values.birthDate} 
                        onChange={formik.handleChange} 
                        sx={{flex: "1.5"}}
                    />
                </Box>
                <TextFieldLisas 
                    name='state' 
                    label='Região' 
                    placeholder='Região'
                    value={formik.values.state} 
                    onChange={formik.handleChange} 
                />
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
                        value={formik.values.profession} 
                        onChange={formik.handleChange} 
                        sx={{flex: 1}}
                    />
                </Box>
                <Box sx={{flexDirection:"row", gap:"2vw"}}>
                    <TextFieldLisas 
                        name='instagram' 
                        label='Instagram' 
                        placeholder='Instagram'
                        value={formik.values.instagram} 
                        onChange={formik.handleChange} 
                    />
                    <TextFieldLisas 
                        name='tikTok' 
                        label='Tik Tok' 
                        placeholder='Tik Tok'
                        value={formik.values.tikTok} 
                        onChange={formik.handleChange} 
                    />
                </Box>
            </Box>

            <ButtonLisas
                type='submit'
                invert
                sx={{
                    position: "relative",
                    bottom: "-5vw",
                    alignItems: "center",
                    gap: "2vw",
                    justifyContent: "center",
                    width: "100%",
                    fontSize: "0.9rem",
                }}
            >
                <p style={{ fontSize: "1.1rem"}}>Salvar Perfil</p>    
            </ButtonLisas>  
        </form>
    )
}
