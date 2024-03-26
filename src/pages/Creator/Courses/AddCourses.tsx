import React from 'react'
import {Box} from '@mui/material'
import { useFormik } from 'formik'
import { TextFieldLisas } from '../../../components/TextFieldLisas'
import { CourseForm } from '../../../types/server/class/Course'

interface AddCoursesProps {
    form:CourseForm
}

export const AddCourses:React.FC<AddCoursesProps> = ({  }) => {

    const formik = useFormik<CourseForm>(
        {
            initialValues: {
                description: "",
                language: "",
                lessons: [],
                categories: [],
                creators: [],
                gallery: {
                    images: [],
                    name: "",
                    videos: []
                },
                name: "",
                owner_id: "",
                published: "",
                recorder: "",
            }, 

            onSubmit: (values) => {
                console.log("")
            }
        }
    )
    
    
    return (
        <Box sx={{}}>
            <form>
                <TextFieldLisas 
                    label="gravadora"
                    name=""
                />
            </form>
        </Box>
    )
}