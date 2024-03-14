import React from 'react'
import {Box} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ButtonLisas } from '../../components/ButtonLisas'
import { ArrowLeftIcon } from "@mui/x-date-pickers"
import { Plan } from '../../components/Plan'

interface SubscriptionProps {
    
}

export const Subscription:React.FC<SubscriptionProps> = ({  }) => {

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
              <p style={{ fontSize: "1.1rem"}}>Gerenciar seu plano</p>    
          </ButtonLisas> 
        <Plan/>
        </Box>
      </Box>
      
    )
}