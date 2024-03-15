import { Box } from "@mui/material"



export const ImageUpdate = () => {
  return (
    <Box sx={{width:1, }}>
        <p>Imagem de capa</p>
        <Box sx={{ width:1, bgcolor:"#00ccff", borderRadius:"4vw"}}>
            <Box>
                <img src="" alt="" />
            </Box>
            <p>Selecione um arquivo para fazer upload</p>
        </Box>
        <p>*informações e restrições de envio de imagem*</p>
    </Box>
  )
}
