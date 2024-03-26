import { Box } from '@mui/material'
import { ButtonLisas } from './ButtonLisas'

export const Plan = () => {
  return (
    <Box sx={{width:"1"}}>
        <Box sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" ,
            backgroundColor: "#f8f8f8",
            width: "100%",
            height: "fit-content",
            gap:"6vw",
            p: "4vw",
            borderRadius: "4vw"
          }}>
            <Box sx={{}}>
              <p style={{fontSize:"0.9rem"}}>[Duração]</p>
              <p style={{fontSize:"1.1rem"}}>[Nome do Plano]</p>
            </Box>
            <Box sx={{fontSize: "1.1rem"}}>[Valor do Plano - Duração]</Box>
            <Box sx={{pl:"4vw"}}>
              <ul>
                <li style={{fontSize:"0.8rem"}}>[Beneficio 1]</li>
                <li style={{fontSize:"0.8rem"}}>[Beneficio 2]</li>
                <li style={{fontSize:"0.8rem"}}>[Beneficio 3]</li>
                <li style={{fontSize:"0.8rem"}}>[Beneficio 4]</li>
                <li style={{fontSize:"0.8rem"}}>[Beneficio 5]</li>
              </ul>
            </Box>
            <ButtonLisas
                variant='contained'
                sx={{
                    width: "fit-content",
                    alignItems: "center",
                    gap: "2vw",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    padding:"1vw 5vw",
                    alignSelf:"center",
                    backgroundColor:"#66625d"
                }}
              >    
              <p style={{ fontSize: "1rem"}}>Adiquirir [Nome do plano]  </p>    
            </ButtonLisas> 
        </Box>
    </Box>
  )
}
