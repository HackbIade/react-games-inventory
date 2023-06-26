import { Button, Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const AddButton = styled(Button).attrs({
  color: "primary",
  "aria-label": "Add game",
})`
  border-radius: 14.1429px;
  ${({ disabled }) =>
    disabled
      ? css`
          background-color: gray;
        `
      : css`
          box-shadow: -10.6071px -10.6071px 28.2857px rgba(255, 255, 255, 0.1),
            10.6071px 15.9107px 70.7143px rgba(137, 117, 27, 0.2);
          background: linear-gradient(
            88.33deg,
            #fece03 -7.64%,
            #ebbf02 145.94%
          );
        `}
`;

export const Text = styled(Typography)<{ disabled?: boolean }>`
  padding: 0px 18px;
  font-weight: 400;
  text-transform: capitalize;
  color: ${({ disabled }) => (disabled ? "light-grey" : "#000000")};
`;
