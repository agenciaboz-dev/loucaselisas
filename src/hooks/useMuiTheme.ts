import { createTheme } from "@mui/material"
import { deDE } from "@mui/x-date-pickers/locales"

export const colors = {
    primary: "#000",
    secondary: "#fff",
    terciary: "#ECE6F0",
}

export const useMuiTheme = () => {
    const THEME = createTheme(
        {
            typography: {
                fontFamily: [""].join(","),
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 500,
                fontWeightBold: 600,
            },
            palette: {
                // mode: 'dark',

                primary: {
                    main: "#000",
                    "200": "#ECE6F0",
                },
                secondary: {
                    main: "#FFF",
                },

                text: {
                    primary: "#000",
                    secondary: "#000",
                    // disabled: "#000",
                },

                background: {
                    paper: "#F8F8F8",
                },

                error: { main: "#B3261E" },
            },
        },
        deDE
    )

    return THEME
}
