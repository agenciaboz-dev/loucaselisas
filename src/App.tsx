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
        <ThemeProvider theme={theme}>
            <MantineProvider>
                <BrowserRouter>
                    <Providers>
                        <Routes />
                    </Providers>
                </BrowserRouter>
            </MantineProvider>
        </ThemeProvider>
    )
}

export default App
