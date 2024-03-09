import { SxProps } from "@mui/material"
import { useUser } from "./useUser"

export const useNavigationList = () => {
    const { user } = useUser()

    const iconStyle: SxProps = { color: "#232323" }

    const admin: NavigationMenu = {
        id: 1,
        title: "Administrador",
        //hidden: user?.adm == false,
        location: "/admin",
        icon: "",
        drawer: [
            {
                id: 1,
                title: "Meu Perfil",
                location: "/profile",
                icon: "",
            },
            {
                id: 2,
                title: "Cadastrar Colaborador",
                location: "/new_employee",
                icon: "",
            },
            {
                id: 3,
                title: "Cadastrar Cliente",
                location: "/new_producer",
                icon: "",
            },
        ],
        bottom: [
            {
                id: 1,
                title: "Painel",
                location: "/panel",
                icon: "",
            },

            {
                id: 2,
                title: "Calendário",
                location: "/calendar",
                icon: "",
            },

            {
                id: 3,
                title: "Chamados",
                location: "/calls",
                icon: "",
            },
            {
                id: 4,
                title: "Análises",
                location: "/reviews",
                icon: "",
            },
        ],
    }
    const creator: NavigationMenu = {
        id: 1,
        title: "Administrador",
        //hidden: user?.adm == false,
        location: "/admin",
        icon: "",
        drawer: [
            {
                id: 1,
                title: "Meu Perfil",
                location: "/profile",
                icon: "",
            },
            {
                id: 2,
                title: "Cadastrar Colaborador",
                location: "/new_employee",
                icon: "",
            },
            {
                id: 3,
                title: "Cadastrar Cliente",
                location: "/new_producer",
                icon: "",
            },
        ],
        bottom: [
            {
                id: 1,
                title: "Painel",
                location: "/panel",
                icon: "",
            },

            {
                id: 2,
                title: "Calendário",
                location: "/calendar",
                icon: "",
            },

            {
                id: 3,
                title: "Chamados",
                location: "/calls",
                icon: "",
            },
            {
                id: 4,
                title: "Análises",
                location: "/reviews",
                icon: "",
            },
        ],
    }
    const student: NavigationMenu = {
        id: 1,
        title: "Administrador",
        //hidden: user?.adm == false,
        location: "/admin",
        icon: "",
        drawer: [
            {
                id: 1,
                title: "Meu Perfil",
                location: "/profile",
                icon: "",
            },
            {
                id: 2,
                title: "Cadastrar Colaborador",
                location: "/new_employee",
                icon: "",
            },
            {
                id: 3,
                title: "Cadastrar Cliente",
                location: "/new_producer",
                icon: "",
            },
        ],
        bottom: [
            {
                id: 1,
                title: "Painel",
                location: "/panel",
                icon: "",
            },

            {
                id: 2,
                title: "Calendário",
                location: "/calendar",
                icon: "",
            },

            {
                id: 3,
                title: "Chamados",
                location: "/calls",
                icon: "",
            },
            {
                id: 4,
                title: "Análises",
                location: "/reviews",
                icon: "",
            },
        ],
    }

    const notifications: NavigationMenu = {
        id: 4,
        title: "Notificações",
        location: "/",
        drawer: [],

        icon: "",
        bottom: [],
    }

    return { admin, creator, student, notifications }
}
