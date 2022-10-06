import { Drawer } from "@mui/material";
import styled from "styled-components";

export const DrawerContainer = styled(Drawer)<{ size?: number }>`
  & .MuiDrawer-paper {
    ${({ size }) => size && `height: ${size}vh`};
    max-height: 85vh;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;
