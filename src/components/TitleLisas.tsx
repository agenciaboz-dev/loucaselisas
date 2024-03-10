import React from "react"

interface TitleLisasProps {
    title: string
}

export const TitleLisas: React.FC<TitleLisasProps> = ({ title }) => {
    return <p style={{ fontSize: "6vw", fontWeight: "600" }}>{title}</p>
}
