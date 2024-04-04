import { SxProps } from "@mui/material"
import { colors } from "../hooks/useMuiTheme"

export const textField = {
    "& .MuiInputLabel-root.Mui-focused ": {
        color: "primary.main",
        // Removendo a propriedade border
    },
    "& .MuiInputLabel-root ": {
        color: colors.primary,
        fontSize: "0.8rem",
    },
    "& .MuiOutlinedInput-root": {
        fieldset: {
            borderRadius: "2vw",
            border: "0.5px solid rgba(105, 105, 105, 1)",
        },
    },
    "& .MuiOutlinedInput-input": {
        height: "2vw",
    },
    // "& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill": {
    //     "-webkit-box-shadow": ` 0 0 0 100px ${colors.secondary} inset`,
    //     borderRadius: "1vw",
    //     color: "#fff",
    //     bgcolor: "",
    // },
}
export const searchField = {
    "& .MuiInputLabel-root.Mui-focused ": {
        color: colors.primary,
        // Removendo a propriedade border
        bgcolor: " rgba(236, 230, 240, 1)",
    },
    "& .MuiInputLabel-root ": {
        color: colors.primary,
        fontSize: "0.8rem",
        bgcolor: " rgba(236, 230, 240, 1)",
    },
    "& .MuiOutlinedInput-root": {
        fieldset: {
            borderRadius: "6vw",
            border: "0px solid rgba(105, 105, 105, 1)",
            // bgcolor: " rgba(236, 230, 240, 1)",
        },
    },
    "& .MuiOutlinedInput-input": {
        height: "4vw",
    },
    "& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill": {
        // "-webkit-box-shadow": ` 0 0 0 100px ${colors.secondary} inset`,
        borderRadius: "1vw",
        color: "#fff",
        bgcolor: "",
    },
}

/*
export const selectInput = {
    ".MuiInputLabel-root.Mui-focused": {
        color: colors.primary,
    }
}
*/

// export const input: SxProps = {
//     "& .MuiInputBase-root": { color: "#fff", bgcolor: "#fff1" },
//     "& .MuiInputLabel-root.Mui-focused ": {
//         color: "#fff", // Cor do label quando o TextField está em foco (digitando)
//     },
//     "& .MuiInputLabel-root ": {
//         color: "#fff",
//     },
//     "& .MuiOutlinedInput-root": {
//         borderColor: colors.secondary,
//         fieldset: {
//             borderColor: colors.primary,
//         },
//     },
//     "& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill": {
//         "-webkit-box-shadow": ` 0 0 0 100px ${colors.button} inset`,
//         borderRadius: "1vw",
//         color: "#fff",
//         bgcolor: "",
//     },
// }
