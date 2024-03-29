import { Button, Typography } from "@mui/material";
import styled from "styled-components";

export const FilterButton = styled(Button).attrs({
  color: "primary",
  "aria-label": "Filter games",
})`
  border-radius: 14.1429px;
  box-shadow: -10.6071px -10.6071px 28.2857px rgba(255, 255, 255, 0.1),
    10.6071px 15.9107px 70.7143px rgba(137, 117, 27, 0.2);
  background: linear-gradient(88.33deg, #fea203 -7.64%, #eb8602 145.94%);
`;

export const Text = styled(Typography)`
  color: #000000;
  padding: 0px 18px;
  font-weight: 400;
  text-transform: capitalize;
`;
