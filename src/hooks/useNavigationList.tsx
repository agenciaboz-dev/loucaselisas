import { SxProps } from "@mui/material"
import { useUser } from "./useUser"
import { IoSearchOutline } from "react-icons/io5"
import { LiaHeart } from "react-icons/lia"
import { SlSettings } from "react-icons/sl"
import { CiGrid41 } from "react-icons/ci"
import { LiaUserEditSolid } from "react-icons/lia"
import { colors } from "../styles/colors"

export const useNavigationList = () => {
    const { user } = useUser()

    const iconStyle = { color: colors.primary, height: "6vw", width: "6vw" }

    const admin: NavigationMenu = {
        id: 1,
        title: "Administrador",
        //hidden: user?.adm == false,
        location: "/admin",
        icon: "",
        drawer: [
            {
                id: 1,
                title: "Ver Conta",
                location: "/account",
                icon: "",
            },
            {
                id: 2,
                title: "Perfil",
                location: "/profile",
                icon: "",
            },
            // {
            //     id: 3,
            //     title: "Sair",
            //     location: "/logout",
            //     icon: "",
            // },
            {
                id: 7,
                title: "-",
                location: "",
                icon: "",
            },
            {
                id: 3,
                title: "Suporte",
                location: "/support",
                icon: "",
            },
            {
                id: 4,
                title: "Baixados",
                location: "/download",
                icon: "",
            },
            {
                id: 5,
                title: "Privacidade",
                location: "/privacity",
                icon: "",
            },
            {
                id:6,
                title: "Termos",
                location: "/termos",
                icon: "",
            },
        ],
        bottom: [
            {
                id: 1,
                title: "Painel",
                location: "/home",
                icon: <CiGrid41 style={iconStyle} />,
            },

            {
                id: 2,
                title: "Criador",
                location: "/create",
                icon: <LiaUserEditSolid style={iconStyle} />,
            },

            {
                id: 3,
                title: "Buscar",
                location: "/searchs",
                icon: <IoSearchOutline style={iconStyle} />,
            },
            {
                id: 4,
                title: "Favoritos",
                location: "/favorites",
                icon: "",
            },
            {
                id: 5,
                title: "Config",
                location: "/settings",
                icon: <SlSettings style={iconStyle} />,
            },
        ],
    }
    const creator: NavigationMenu = {
        id: 1,
        title: "Administrador",
        //hidden: user?.adm == false,
        location: "/creator",
        icon: "",
        drawer: [
            {
                id: 1,
                title: "Ver Conta",
                location: "/account",
                icon: "",
            },
            {
                id: 2,
                title: "Perfil",
                location: "/profile",
                icon: "",
            },
            {
                id: 3,
                title: "Sair",
                location: "/",
                icon: "",
            },
            {
                id: 8,
                title: "-",
                location: "",
                icon: "",
            },
            {
                id: 4,
                title: "Suporte",
                location: "/support",
                icon: "",
            },
            {
                id: 5,
                title: "Baixados",
                location: "/download",
                icon: "",
            },
            {
                id: 6,
                title: "Privacidade",
                location: "/privacity",
                icon: "",
            },
            {
                id: 7,
                title: "Termos",
                location: "/termos",
                icon: "",
            },
        ],
        bottom: [
            {
                id: 1,
                title: "Painel",
                location: "/home",
                icon: <CiGrid41 style={iconStyle} />,
            },

            {
                id: 2,
                title: "Criador",
                location: "/create",
                icon: <LiaUserEditSolid style={iconStyle} />,
            },

            {
                id: 3,
                title: "Buscar",
                location: "/searchs",
                icon: <IoSearchOutline style={iconStyle} />,
            },
            {
                id: 4,
                title: "Favoritos",
                location: "/favorites",
                icon: <LiaHeart style={iconStyle} />,
            },
            {
                id: 5,
                title: "Config",
                location: "/settings",
                icon: <SlSettings style={iconStyle} />,
            },
        ],
    }
    const student: NavigationMenu = {
        id: 1,
        title: "Cliente",
        //hidden: user?.adm == false,
        location: "/student",
        icon: "",
        drawer: [
            {
                id: 1,
                title: "Ver Conta",
                location: "/account",
                icon: "",
            },
            {
                id: 2,
                title: "Perfil",
                location: "/profile",
                icon: "",
            },
            {
                id: 3,
                title: "Sair",
                location: "/logout",
                icon: "",
            },
            {
                id: 8,
                title: "-",
                location: "",
                icon: "",
            },
            {
                id: 4,
                title: "Suporte",
                location: "/support",
                icon: "",
            },
            {
                id: 5,
                title: "Baixados",
                location: "/download",
                icon: "",
            },
            {
                id: 6,
                title: "Privacidade",
                location: "/privacity",
                icon: "",
            },
            {
                id: 7,
                title: "Termos",
                location: "/termos",
                icon: "",
            },
        ],
        bottom: [
            {
                id: 1,
                title: "Painel",
                location: "/home",
                icon: <CiGrid41 style={iconStyle} />,
            },

            {
                id: 2,
                title: "Buscar",
                location: "/searchs",
                icon: <IoSearchOutline style={iconStyle} />,
            },

            {
                id: 3,
                title: "Favoritos",
                location: "/favorites",
                icon: <LiaHeart style={iconStyle} />,
            },
            {
                id: 4,
                title: "Config",
                location: "/settings",
                icon: <SlSettings style={iconStyle} />,
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
