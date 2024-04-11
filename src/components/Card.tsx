import React, { useEffect, useState } from "react";
import { Box, Button, IconButton,  } from "@mui/material";
import { PaymentCard } from "../types/server/class/PaymentCard";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
//import cover from "../assets/cover.jpg";
import { useNavigate } from "react-router-dom";
import { useConfirmDialog } from "burgos-confirm";
import { User, UserForm } from "../types/server/class";
import { useIo } from "../hooks/useIo";
import { useSnackbar } from "burgos-snackbar";
import { useUser } from "../hooks/useUser";

interface CardProps {
  card: PaymentCard;
  user: User
}

export const Card: React.FC<CardProps> = ({ card, user}) => {

  const navigate = useNavigate();
  const { setUser } = useUser()
  const [loading, setLoading] = useState(false)
  const { snackbar } = useSnackbar()
  const { confirm } = useConfirmDialog()
  const io = useIo()

  const handleDelete = () => {
    if (!card.id) return
      confirm({
          title: "deletar cartão",
          content: "tem certeza?",
          onConfirm: () => {
            const data: Partial<UserForm> & { id: string } = {
              id: user.id,
              payment_cards: [...user.payment_cards.filter(c => c.id !== card.id)]
          }
            io.emit("user:update", data)
          },
      })
  }

  useEffect(() => {
    io.on("user:update:success", () => {
        setLoading(false)
        snackbar({ severity: "success", text: "Cartão excluido com sucesso" })
    })
    io.on("user:update:error", (error: string) => {
        setLoading(false)
        snackbar({ severity: "error", text: error })
    })
    return () => {
        io.off("user:update:success")
        io.off("user:update:error")
    }
}, [])

  return (
      <Box width="100%" flexDirection="row" justifyContent="space-between" padding="4vw" alignItems="center">
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
                  color: "secondary.main",
              }}
          >
              <Box width="100%" flexDirection="row" justifyContent="space-between" alignItems="start">
                  <p>{card.type}</p>
                  {/*<Avatar variant="square" src={cover} sx={{width:"12vw", height:"8vw"}} ></Avatar>*/}
              </Box>
              <Box sx={{ fontSize: "1.2rem" }}>{card.number}</Box>
              <Box sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Box>{card.owner}</Box>
                  <Box>{card.validity}</Box>
              </Box>
          </Box>
          <Box justifyContent="center">
              <IconButton onClick={() => navigate(`/account/add-card/${card.id}`)}>
                  <EditIcon />
              </IconButton>
              <IconButton onClick={handleDelete}>
                  <HighlightOffIcon />
              </IconButton>
          </Box>
      </Box>
  )
};
