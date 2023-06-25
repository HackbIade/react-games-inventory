import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AnimationWrapper = styled(motion.div)``;

export const Container = styled(Button)`
  gap: 8px;
  padding: 8px 24px;
  display: flex;
  border-radius: 16px;
  flex-direction: row;
  box-sizing: border-box;
  border: 1.19793px solid #ffffff60;
`;

export const Text = styled(Typography).attrs({
  color: "primary",
  variant: "body2",
})``;
