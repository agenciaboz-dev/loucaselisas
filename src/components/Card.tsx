import React from 'react'
import { User } from "../types/server/class"
import { Box } from '@mui/material'

/*
interface ListCardsProps {
    user: User
}


export const Card: React.FC<ListCardsProps> = ({ user }) => {
  return (
    <div>Card</div>
  )
}
*/

export const Card = () => {
  return (
    <Box sx={{
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        width: "100%",
        height: "fit-content",
        p: "4vw",
        borderRadius: "2vw",
        gap: "2vw",
    }}>
        <Box>
            <p style={{ fontSize: "1.3rem" }}>0000 0000 0000 0000</p>
            <p style={{ fontSize: "1.1rem" }}>Numero do cartão</p>
        </Box>
        <Box sx={{display: "flex", flexDirection:"row", justifyContent: "space-between", margin:"2vw 0"}}>
        <p style={{ fontSize: "1.3rem" }}>Fulano Beltrano</p>
        <p style={{ fontSize: "1.3rem" }}>00/00</p>
        </Box>
        <p style={{ fontSize: "1.1rem", marginBottom: "2vw" }}>Nome</p>
    </Box>
  )
}
