import React from 'react'
import { User } from "../../../types/server/class"
import { ButtonLisas } from "../../../components/ButtonLisas"
import { useNavigate } from "react-router-dom"
import { Box } from '@mui/material'
import { ArrowLeftIcon } from "@mui/x-date-pickers"
import { colors } from '../../../styles/colors'
import { useFormik } from 'formik';
import { TextFieldLisas } from '../../../components/TextFieldLisas'

interface AddCardProps {
    user: User
}

export const AddCard: React.FC<AddCardProps> = ({ user }) => {

    const navigate = useNavigate()

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
                    gap:"4vw"
                    
                }}>
                    <form onSubmit={formik.handleSubmit}>
    
                        <TextFieldLisas name='cardName' label='Nome no cartão' value={formik.values.cardName} onChange={formik.handleChange} />
                        <TextFieldLisas name='cardNumber' label='Número do cartão' value={formik.values.cardNumber} onChange={formik.handleChange} />
                        <TextFieldLisas name='validateDate' label='Data de válidade' value={formik.values.validateDate} onChange={formik.handleChange} />
                        <TextFieldLisas name='cvc' label='CVC' value={formik.values.cvc} onChange={formik.handleChange} />

                        {/*

                        <label htmlFor="cardName" style={{ fontSize: "0.9rem", marginTop: "4vw"}}>Nome no cartão</label>
                        <input
                            id="cardName"
                            name="cardName"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.cardName}
                            style={{borderRadius:"1.5vw", fontSize: "1.1rem"}}
                        />
    
                        <label htmlFor="cardNumber" style={{ fontSize: "0.9rem", marginTop: "4vw"}}>Numero do cartão</label>
                        <input
                            id="cardNumber"
                            name="cardNumber"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.cardNumber}
                            style={{borderRadius:"1.5vw", fontSize: "1.1rem"}}
                        />
    
                        <Box sx={{display:"flex", flexDirection:"row", marginTop: "4vw", gap:"6vw"}}>
    
                            <Box sx={{flexDirection: "column"}}>
                                <label htmlFor="validateDate" style={{ fontSize: "0.9rem"}}>Data de validade</label>
                                <input
                                    id="validateDate"
                                    name="validateDate"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.validateDate}
                                    style={{ width: "30vw", borderRadius:"1.5vw", fontSize: "1.1rem"}}
                                />
                            </Box>
    
                            <Box sx={{flexDirection: "column"}}>
                                <label htmlFor="cvc" style={{ fontSize: "0.9rem"}}>CVC</label>
                                <input
                                    id="cvc"
                                    name="cvc"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.cvc}
                                    style={{ width: "20vw", borderRadius:"1.5vw", fontSize: "1.1rem"}}
                                />
                            </Box>                        
                               
                        </Box>*/}

                        <button type="submit">Submit</button>
                    </form>

                </Box>      

            </Box>
        </Box>
    )
}
