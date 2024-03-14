import { Box } from '@mui/material'
import { ButtonLisas } from './ButtonLisas'

export const Plan = () => {
  return (
    <Box sx={{width:"1"}}>
        <Box sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" ,
            width: "100%",
            height: "fit-content",
            gap:"6vw",
            p: "4vw",
            borderRadius: "4vw"
          }}>
            <Box sx={{}}>
              <p style={{fontSize:"1rem"}}>[Duração]</p>
              <p style={{fontSize:"1.3rem"}}>[Nome do Plano]</p>
            </Box>
            <Box sx={{fontSize: "1.3rem"}}>[Valor do Plano - Duração]</Box>
            <Box sx={{pl:"4vw"}}>
              <ul>
                <li style={{fontSize:"1rem"}}>[Beneficio 1]</li>
                <li style={{fontSize:"1rem"}}>[Beneficio 2]</li>
                <li style={{fontSize:"1rem"}}>[Beneficio 3]</li>
                <li style={{fontSize:"1rem"}}>[Beneficio 4]</li>
                <li style={{fontSize:"1rem"}}>[Beneficio 5]</li>
              </ul>
            </Box>
            <ButtonLisas
                variant='outlined'
                sx={{
                    alignItems: "center",
                    gap: "2vw",
                    justifyContent: "center",
                    width: "100%",
                    fontSize: "0.9rem",
                }}
              >    
              <p style={{ fontSize: "1.1rem"}}>Adiquirir [Nome do plano]  </p>    
            </ButtonLisas> 
        </Box>
    </Box>
  )
}
