import { motion } from "framer-motion";
import styled from "styled-components";
import { TextField, Typography } from "@mui/material";

export const Container = styled(motion.div)`
  gap: 8px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url("https://static.vecteezy.com/system/resources/previews/018/760/466/original/abstract-broken-glass-texture-png.png");
`;

export const Title = styled(Typography).attrs({
  variant: "h3",
  color: "primary",
})`
  font-weight: bold;
`;

export const Description = styled(Typography)`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  font-style: normal;
  text-align: center;
  align-items: center;
  background-clip: text;
  background: linear-gradient(
    124.53deg,
    #ffffff -7.58%,
    rgba(255, 255, 255, 0) 121.06%
  );
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const UserInput = styled(TextField).attrs({
  label: "User",
  required: true,
})`
  margin-bottom: 12px;
`;

export const WrappedForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
