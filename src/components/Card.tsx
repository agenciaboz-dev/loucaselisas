import React from "react";
import { Avatar, Box, Button, Paper } from "@mui/material";
import { PaymentCard } from "../types/server/class/PaymentCard";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import cover from "../assets/cover.jpg";
import { colors } from "../styles/colors";

interface CardProps {
  card: PaymentCard;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <Box
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      padding="4vw"
      alignItems="center"
    >
      <Box
        sx={{
          boxShadow: "rgba(100, 100, 1, 0.15) 0px 7px 29px 0px",
          bgcolor: "#212426",
          width: "90%",
          height: "50vw",
          p: "4vw",
          borderRadius: "2vw",
          justifyContent: "space-around",
          fontSize: "0.8rem",
          color: colors.secondary
        }}
      >
        <Box
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <p>{card.type}</p>
          {/*<Avatar variant="square" src={cover} sx={{width:"12vw", height:"8vw"}} ></Avatar>*/}
        </Box>
        <Box sx={{fontSize:"1.2rem"}}>{card.number}</Box>
        <Box sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box>{card.owner}</Box>
          <Box>{card.validity}</Box>
        </Box>
      </Box>
      <Box justifyContent="center">
        <Button><EditIcon /></Button>
        <Button><HighlightOffIcon /></Button>
      </Box>
    </Box>
  );
};
