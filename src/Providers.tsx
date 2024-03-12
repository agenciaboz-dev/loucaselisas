import { ConfirmDialog, ConfirmDialogProvider } from "burgos-confirm"
import { Snackbar, SnackbarProvider } from "burgos-snackbar"
import { IoProvider } from "./contexts/ioContext"
import { MenuDrawerProvider } from "./contexts/menuDrawerContext"
import { HeaderProvider } from "./contexts/headerContext"
import { MantineProvider } from "@mantine/core"
import { useMantineTheme } from "./hooks/useMantineTheme"
import { MenuDrawer } from "./components/MenuDrawer"
import { UserProvider } from "./contexts/userContext"
import { ThemeProvider } from "@mui/material"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { GoogleOAuthProvider } from "@react-oauth/google"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mantine_theme = useMantineTheme()
    const theme = useMuiTheme()

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider>
                <ConfirmDialogProvider>
                    <IoProvider>
                        <GoogleOAuthProvider clientId="">
                            <UserProvider>
                                <MenuDrawerProvider>
                                    <HeaderProvider>
                                        <Snackbar />
                                        <ConfirmDialog />
                                        <MenuDrawer />
                                        <MantineProvider theme={mantine_theme}>{children}</MantineProvider>
                                    </HeaderProvider>
                                </MenuDrawerProvider>
                            </UserProvider>
                        </GoogleOAuthProvider>
                    </IoProvider>
                </ConfirmDialogProvider>
            </SnackbarProvider>
        </ThemeProvider>
    )
}
