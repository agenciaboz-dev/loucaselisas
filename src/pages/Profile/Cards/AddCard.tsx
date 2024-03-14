import React from 'react'
import { User } from "../../../types/server/class"
import { ButtonLisas } from "../../../components/ButtonLisas"
import { useNavigate } from "react-router-dom"
import { Box } from '@mui/material'
import { ArrowLeftIcon } from "@mui/x-date-pickers"
import { colors } from '../../../styles/colors'
import { useFormik } from 'formik';
import { TextFieldLisas } from '../../../components/TextFieldLisas'
import MaskedInputNando from '../../../components/MaskedNando'
import { useCardNumberMask } from 'burgos-masks'
import MaskedInput from '../../../components/MaskedInput'

interface AddCardProps {
    user: User
}

export const AddCard: React.FC<AddCardProps> = ({ user }) => {

    const navigate = useNavigate();
    const mask= useCardNumberMask();

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

        <Box sx={{width: "100%", height: "100%", flexDirection: "column", p:"4vw",}}>
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
                    onClick={() => navigate("/account/cards")}
                >
                    <ArrowLeftIcon />
                    <p style={{ fontSize: "1.1rem"}}>Cartões de pagamentos salvos</p>    
                </ButtonLisas>  
                
                <form onSubmit={formik.handleSubmit}>

                    <Box sx={{
                        width: "100%",
                        p: "6vw",
                        borderRadius: "2vw",
                        gap:"4vw",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"  
                    }}>
    
                        <TextFieldLisas 
                            name='cardName' 
                            label='Nome no cartão' 
                            placeholder='Nome no cartão'
                            value={formik.values.cardName} 
                            onChange={formik.handleChange} 
                        />

                        <TextFieldLisas 
                            InputProps={{inputComponent:MaskedInputNando, inputProps:{mask: mask}, inputMode: "numeric"}}
                            name='cardNumber' 
                            label='Número do cartão' 
                            placeholder='0000 0000 0000 0000'
                            value={formik.values.cardNumber} 
                            onChange={formik.handleChange} 
                        />

                        <Box sx={{flexDirection:"row", gap: "4vw"}}>
                            <TextFieldLisas 
                                InputProps={{inputComponent:MaskedInput, inputProps:{mask: "00/00"}, inputMode: "numeric"}}
                                name='validateDate' 
                                label='Validade' 
                                placeholder='00/00'
                                value={formik.values.validateDate} 
                                onChange={formik.handleChange} 
                                sx={{ width: "30vw", fontSize: "1.1rem"}}
                            />

                            <TextFieldLisas 
                                InputProps={{inputComponent:MaskedInput, inputProps:{mask: "000"}, inputMode: "numeric"}}
                                name='cvc' 
                                label='CVC' 
                                placeholder='000'
                                value={formik.values.cvc} 
                                onChange={formik.handleChange} 
                                sx={{ width: "20vw", fontSize: "1.1rem"}}
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

                     

            </Box>
        </Box>
    )
}
