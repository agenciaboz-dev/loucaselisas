import React from 'react'
import {Box, SxProps} from '@mui/material'

interface InfoCoursesProps {
    sx?: SxProps
}

const info_box_style = {
    width:"fit-content",
    backgroundColor:"#fff",
    padding: "1vw",
    borderRadius: "1vw",
}

export const InfoCourses:React.FC<InfoCoursesProps> = ({ sx }) => {
    const custom_sx:SxProps = {position: 'absolute', bottom: 5,
    left: 2, gap: "1vw",
     ...sx,}
    
    return (
        <Box sx={custom_sx}>
            <Box sx={info_box_style}>[curso]</Box>
            <Box sx={info_box_style}>[00 Vídeos]</Box>
        </Box>
    )
}