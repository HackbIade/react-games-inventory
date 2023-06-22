import { Drawer } from "@mui/material";
import styled, { css } from "styled-components";

export const DrawerContainer = styled(Drawer)<{ size?: number }>`
  & .MuiDrawer-paper {
    ${({ size }) =>
      size &&
      css`
        height: ${size}vh;
      `};
  }
`;
