import { Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  gap: 8px;
  height: 100%;
  display: flex;
  min-width: 200px;
  padding: 8px 16px;
  flex-direction: column;
`;

export const Title = styled(Typography).attrs({
  variant: "h5",
  color: "primary",
})``;

export const Subtitle = styled(Typography).attrs({
  variant: "caption",
  color: "primary",
})``;

export const Text = styled(Typography).attrs({
  variant: "body2",
})``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
