import { Box } from "@mui/material"
import  media  from "../../../assets/media.png"


export const ImageUpdate = () => {
  return (
    <Box sx={{width:1, }}>
        <p style={{paddingLeft:"2vw",fontSize: "0.9rem"}}>Imagem de capa</p>
        <Box sx={{ width:1, borderRadius:"4vw", p:"3vw", flexDirection:"row", gap:"2vw", alignItems:"center"}}>
            <Box>
                <img src={media} alt="Upload Image" style={{width:"18vw"}}/>
            </Box>
            <p style={{fontSize: "0.9rem"}}>Selecione um arquivo para fazer upload</p>
        </Box>
        <p style={{fontSize: "0.9rem"}}>*informações e restrições de envio de imagem*</p>
    </Box>
  )
}
