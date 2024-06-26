import React, { useEffect, useState } from "react"
import { BottomNavigationAction, BottomNavigation as MuiBottomNav, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface BottomNavigationProps {
    external?: boolean
    section: NavigationMenu
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ external, section }) => {
    const navigate = useNavigate()

    const colors = useTheme().palette

    const [currentLocation, setCurrentLocation] = useState<
        | {
              id: number
              title: string
              location: string
              icon: React.ReactNode
          }
        | undefined
    >(external ? undefined : section.bottom![0])

    const handleChange = (value: number) => {
        const location = section.bottom!.filter((item) => item.id == value)[0]
        setCurrentLocation(location)
        navigate(`${section.location}${location.location}`)
    }

    return (
        <MuiBottomNav
            showLabels
            value={currentLocation?.id || 0}
            onChange={(_, newValue) => handleChange(newValue)}
            sx={{
                marginTop: "auto",
                background: "transparent",
                padding: "4vw",
                height: "10vh",
                // position: "fixed",
                left: 0,
                bottom: 0,
                // justifyContent: "space-between",
                width: "100%",
            }}
        >
            <BottomNavigationAction value={0} sx={{ display: "none" }} />
            {section.bottom?.map((item, index) => {
                return (
                    <BottomNavigationAction
                        key={item.id}
                        label={<p style={{ fontSize: "2.5vw", color: colors.primary.main }}>{item.title}</p>}
                        icon={
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",

                                    background: currentLocation?.id === item.id ? "#ECE6F0" : "transparent",
                                    borderRadius: "3vw",
                                    padding: "3vw",
                                }}
                            >
                                {item.icon}
                            </span>
                        }
                        value={item.id}
                        sx={{
                            color: currentLocation?.id === item.id ? colors.primary.main : "",
                            borderRadius: "2vw",
                            gap: "1vw",

                            "&.Mui-selected": {
                                color: colors.primary.main,
                            },
                        }}
                    />
                )
            })}
        </MuiBottomNav>
    )
}
