import "./App.css"
import { MantineProvider } from "@mantine/core"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@emotion/react"
import { BrowserRouter } from "react-router-dom"
import { Providers } from "./Providers"
import { Routes } from "./Routes"

function App() {
    const theme = useMuiTheme()
    return (
        <MantineProvider>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Providers>
                        <Routes />
                    </Providers>
                </BrowserRouter>
            </ThemeProvider>
        </MantineProvider>
    )
}

export default App
