import React from "react"
import { User } from "../../../types/server/class"
import { Box } from "@mui/material"
import { ButtonLisas } from "../../../components/ButtonLisas"
import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "@mui/x-date-pickers"
import { colors } from "../../../styles/colors"
import { Card } from "./Card"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


import { useFormik } from 'formik';


interface ListCardsProps {
    user: User
}

export const ListCards: React.FC<ListCardsProps> = ({ user }) => {

    const navigate = useNavigate()


    return (
        <Box sx={{width: "100%", flex: 1, flexDirection: "column", p:"4vw" ,bgcolor: colors.delete }}>
            <Box sx={{width:"100%", flex: 1, alignItems:"center", bgcolor: colors.terciary, gap:"3vw"}}>
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
                <Card></Card>
                <ButtonLisas
                    sx={{
                        alignItems: "center",
                        gap: "2vw",
                        height:"fit-content",                                          
                        width: "auto",
                        fontSize: "0.9rem",
                        border: "1px solid black",
                    }}
                    onClick={() => navigate("/account/add-card")}
                >
                    <AddCircleOutlineIcon/>
                    Adicionar outro cartão
                </ButtonLisas>
            </Box>    
        </Box>
    )


/*

const formik = useFormik({

    initialValues: {

      cardName: '',
      cardNumber: '',
      validateDate: '',
      cvc: ''
    },

    onSubmit: values => {

      console.log(values);

    },

  });



return (

    <Box sx={{width: "100%", height: "100%", flexDirection: "column", p:"4vw", bgcolor: colors.delete }}>
        <Box sx={{width:"100%", flex: 1, alignItems:"center", bgcolor: colors.terciary, gap:"3vw"}}>
            <ButtonLisas
                sx={{
                    alignItems: "center",
                    gap: "2vw",
                    alignSelf: "flex-start",
                    justifyContent: "start",
                    width: "100%",
                    fontSize: "0.9rem",
                }}
                onClick={() => navigate("/account/cards")}
            >
                <ArrowLeftIcon />
                <p style={{ fontSize: "1.1rem"}}>Cartões de pagamentos salvos</p>    
            </ButtonLisas>  
            <Box sx={{
                border: "1px solid black",
                width: "100%",
                height: "fit-content",
                p: "4vw",
                borderRadius: "2vw",
                
            }}>
                <form onSubmit={formik.handleSubmit}>

                    <label htmlFor="cardName" style={{ fontSize: "0.9rem"}}>Numero do cartão</label>
                    <input
                        id="cardName"
                        name="cardName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.cardName}
                        style={{borderRadius:"1.5vw", fontSize: "1.1rem"}}
                    />

                    <label htmlFor="cardNumber" style={{ fontSize: "0.9rem"}}>Numero do cartão</label>
                    <input
                        id="cardNumber"
                        name="cardNumber"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.cardNumber}
                        style={{borderRadius:"1.5vw", fontSize: "1.1rem"}}
                    />

                    <Box sx={{display:"flex", flexDirection:"row"}}>

                        <label htmlFor="validateDate" style={{ fontSize: "0.9rem"}}>Data de validade</label>
                        <input
                            id="validateDate"
                            name="validateDate"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.validateDate}
                            style={{ width: "40vw", borderRadius:"1.5vw", fontSize: "1.1rem"}}
                        />

                        <label htmlFor="cvc" style={{ fontSize: "0.9rem"}}>CVC</label>
                            <input
                            id="cvc"
                            name="cvc"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.cvc}
                            style={{borderRadius:"1.5vw", fontSize: "1.1rem"}}
                        />

                    </Box>

                    <button type="submit">Submit</button>

                </form>
            </Box>         
        </Box>
    </Box>
)
*/


}

