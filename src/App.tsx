import "./App.css"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@emotion/react"
import { BrowserRouter } from "react-router-dom"
import { Providers } from "./Providers"
import { Routes } from "./Routes"
import { Box } from "@mui/material"

function App() {
    const theme = useMuiTheme()
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Providers>
                    <Box sx={{ height: 1 }}>
                        <Routes />
                    </Box>
                </Providers>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
