import styled from "styled-components";
import { Card, CardMedia, Typography } from "@mui/material";
import SdCardIcon from "@mui/icons-material/SdCard";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { motion } from "framer-motion";

export const Container = styled(Card)<{ bc: string }>`
  margin: 4px;
  height: 368px;
  max-width: 200px;
  position: relative;
  background: linear-gradient(
      318.96deg,
      rgba(0, 0, 0, 0.4) -1.9%,
      rgba(36, 36, 36, 0.4) 105%
    ),
    #272727;
  background-blend-mode: soft-light, normal;
  border-radius: 8px;
  border-color: ${({ bc }) => bc};
`;

export const PlatformContainer = styled.div<{ bc?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bc }) => bc};
`;

export const PlatformImages = styled.img`
  margin: 0px;
  padding: 0px;
  height: 15px;
`;

export const Name = styled(Typography).attrs({
  variant: "body1",
  gutterBottom: true,
})`
  overflow: "hidden";
  -webkitlineclamp: 2;
  display: "-webkit-box";
  -webkitboxorient: "vertical";
`;

export const KeyArt = styled(CardMedia).attrs({
  height: "250",
  component: "img",
})``;

export const DigitalIcon = styled(QrCode2Icon).attrs({
  color: "primary",
  fontSize: "small",
})``;

export const PhysicalIcon = styled(SdCardIcon).attrs({
  color: "primary",
  fontSize: "small",
})``;

export const AnimationContainer = styled(motion.li)`
  list-style-type: none;
`;
