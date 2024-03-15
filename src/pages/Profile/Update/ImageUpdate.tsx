import { Box } from "@mui/material"
import  media  from "../../../assets/media.png"


export const ImageUpdate = () => {
  return (
    <Box sx={{width:1, }}>
    <p style={{paddingLeft:"2vw",fontSize: "0.9rem", color:"#808080"}}>Imagem de capa</p>
        <Box sx={{ width:1, borderRadius:"3vw", p:"3vw", flexDirection:"row", gap:"2vw", alignItems:"center", border:"0.5vw dashed #000"}}>
            <Box>
                <img src={media} alt="Upload Image" style={{width:"18vw"}}/>
            </Box>
            <p style={{fontSize: "0.9rem"}}>Selecione um arquivo para fazer upload</p>
        </Box>
        <Box sx={{fontSize: "0.9rem", width:1, textAlign:"center", color:"#808080" }}>*informações e restrições de envio de imagem*</Box>
    </Box>
  )
}
