import { Box } from '@mui/material'
import React from 'react'
import { ButtonLisas } from '../../components/ButtonLisas'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@mui/x-date-pickers'

export const PaymentsHistory = () => {

    const navigate = useNavigate()

  return (
    
    <Box sx={{width: "100%", flex: 1, flexDirection: "column", p:"4vw",}}>
        <Box sx={{width:"100%", flex: 1, alignItems:"center", gap:"3vw", }}>
            <ButtonLisas
                    fullWidth
                    sx={{
                        gap: "2vw",
                        alignSelf: "flex-start",
                        justifyContent: "start",
                        fontSize: "0.9rem",
                    }}
                    onClick={() => navigate("/account")}
            >  
                <ArrowLeftIcon />
                <p style={{ fontSize: "1.1rem"}}>Editar perfil</p>    
            </ButtonLisas> 
            <Box sx={{backgroundColor: "#f8f8f8", width:"100%", gap: "2vw", borderRadius: "3vw", flexDirection: "row", padding:"6vw"}}>
               <Box gap="2vw">
                    <Box fontSize="1rem">Pagamento do Plano [nome do plano]</Box>
                    <Box fontSize="0.8rem">Breve descrição de como foi pago</Box>
               </Box>
               <Box justifyContent="center">
                [DATA]
               </Box>
            </Box>            
        </Box>
      </Box> 
  )
  
}
