import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AnimationWrapper = styled(motion.div)``;

export const Container = styled(Button)`
  display: flex;
  width: 100px;
  height: 120px;
  border-radius: 16px;
  flex-direction: column;
  box-sizing: border-box;
  border: 1.19793px solid #000000;
`;

export const Text = styled(Typography).attrs({
  color: "primary",
  variant: "body2",
})``;
