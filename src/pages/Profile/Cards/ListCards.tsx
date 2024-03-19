import React from "react"
import { User,  } from "../../../types/server/class"
import { Box } from "@mui/material"
import { ButtonLisas } from "../../../components/ButtonLisas"
import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "@mui/x-date-pickers"
import { Card } from "../../../components/Card"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



interface ListCardsProps {
    user: User
}

export const ListCards: React.FC<ListCardsProps> = ({ user }) => {

    const navigate = useNavigate()
    
    

    return (
        <Box sx={{width: "100%", flex: 1, flexDirection: "column", p:"4vw"}}>
            <Box sx={{width:"100%", flex: 1, alignItems:"center", gap:"3vw"}}>
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
                    <p style={{ fontSize: "1.1rem"}}>Cartões de pagamentos salvos</p>         
                </ButtonLisas>
                
                {user.payment_cards.map(card => <Card card={card} key={card.id} />)}
                <ButtonLisas
                    sx={{
                        gap: "2vw",
                        fontSize: "0.9rem",
                    }}
                    variant="outlined"
                    onClick={() => navigate("/account/add-card")}
                >
                    <AddCircleOutlineIcon/>
                    Adicionar outro cartão
                </ButtonLisas>
            </Box>    
        </Box>
    )

}

