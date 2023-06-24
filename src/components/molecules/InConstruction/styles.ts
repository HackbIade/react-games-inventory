import { Typography } from "@mui/material";
import styled from "styled-components";

export const Title = styled(Typography).attrs({
  variant: "h3",
  color: "primary",
})`
  width: 100%;
  text-align: center;
  font-weight: bolder;
  text-shadow: 0 0 5px rgba(0, 0, 0);
`;

export const Subtitle = styled(Typography).attrs({
  variant: "h4",
  color: "white",
})`
  width: 100%;
  text-align: center;
  font-weight: bolder;
  text-shadow: 0 0 5px rgba(0, 0, 0);
`;

export const Container = styled.div`
  gap: 16px;
  width: 100%;
  padding: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: url("/images/furnace.gif");
`;
