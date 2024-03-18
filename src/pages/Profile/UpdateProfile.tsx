import React from 'react'
import {Box} from '@mui/material'
import { User } from '../../types/server/class'
import { useNavigate } from 'react-router-dom'
import { ButtonLisas } from '../../components/ButtonLisas'
import { ArrowLeftIcon } from '@mui/x-date-pickers'
import { ImageUpdate } from './Update/ImageUpdate'
import { FormUpdateProfile } from './Update/FormUpdateProfile'

interface UpdateProfileProps {
    user: User
}

export const UpdateProfile:React.FC<UpdateProfileProps> = ({ user }) => {
    
    const navigate = useNavigate();

    return (
        <Box sx={{width: "100%", flex: 1, flexDirection: "column", p:"4vw",}}>
        <Box sx={{width:"100%", flex: 1, alignItems:"center", gap:"3vw", }}>
            <ButtonLisas
                    sx={{
                        alignItems: "center",
                        gap: "2vw",
                        alignSelf: "flex-start",
                        justifyContent: "start",
                        width: "100%",
                        fontSize: "0.9rem",
                    }}
                    onClick={() => navigate("/account")}
            >  
                <ArrowLeftIcon />
                <p style={{ fontSize: "1.1rem"}}>Editar perfil</p>    
            </ButtonLisas> 
            <Box sx={{gap: "3vw"}}>
                <ImageUpdate/>
                <FormUpdateProfile user={user}/>
            </Box>            
        </Box>
      </Box> 
    )
}