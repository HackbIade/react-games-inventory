import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { NavbarProps } from "./type";
import { CustomNavbar, Title } from "./styles";
import { AddGamesButton } from "../AddGamesButton";

export const Navbar = ({ title }: NavbarProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <CustomNavbar>
      <Button onClick={handleClick}>
        <Title>{title}</Title>
      </Button>
      <AddGamesButton />
    </CustomNavbar>
  );
};
