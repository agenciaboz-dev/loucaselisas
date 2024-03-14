import React from 'react'
import {Box} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ButtonLisas } from '../../components/ButtonLisas'
import { ArrowLeftIcon } from "@mui/x-date-pickers"

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
          <Box sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" ,
            width: "100%",
            height: "fit-content",
            gap:"6vw",
            p: "6vw",
            borderRadius: "4vw"
          }}>
            <Box sx={{}}>
              <p style={{fontSize:"1rem"}}>Duração</p>
              <p style={{fontSize:"1.3rem"}}>Nome do Plano</p>
            </Box>
            <Box sx={{fontSize: "1.3rem"}}>Valor do Plano - Duração</Box>
            <Box sx={{pl:"4vw"}}>
              <ul>
                <li style={{fontSize:"1rem"}}>Beneficio 1</li>
                <li style={{fontSize:"1rem"}}>Beneficio 2</li>
                <li style={{fontSize:"1rem"}}>Beneficio 3</li>
                <li style={{fontSize:"1rem"}}>Beneficio 4</li>
                <li style={{fontSize:"1rem"}}>Beneficio 5</li>
              </ul>
            </Box>

          </Box>
        </Box>
      </Box>
      
    )
}