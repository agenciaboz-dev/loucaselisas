import { Avatar, Box } from '@mui/material'
import React from 'react'
import { InfoCourses } from './InfoCourses'
import pessoa from '../../assets/pessoa.jpeg'

const ThumbCourses = () => {
  return (
    <Box 
      sx={{
        position:"relative",
        width:"40vw",
        height:"40vw",
        border:"1px solid #000",
        borderRadius: "3vw",
        flexShrink: 0,
        overflow:"hidden" 
      }}
    >
        <Avatar
          src= {pessoa}
          variant='square'
          sx={{
            width: 1,
            height: 1,
          }}
        ></Avatar>
        <InfoCourses/>
    </Box>
  )
}

export default ThumbCourses