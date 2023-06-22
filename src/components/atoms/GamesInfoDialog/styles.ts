import { Dialog, Typography } from "@mui/material";
import styled from "styled-components";

export const DialogWrapper = styled(Dialog)``;

export const Container = styled.div`
  gap: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled(Typography).attrs({
  variant: "h5",
  color: "primary",
})``;

export const Text = styled(Typography).attrs({
  variant: "body2",
})``;
