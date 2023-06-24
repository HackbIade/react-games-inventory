import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import SdCardIcon from "@mui/icons-material/SdCard";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const Container = styled(Card)<{ bc: string }>`
  margin: 4px;
  height: 368px;
  max-width: 200px;
  border-width: 0px;
  position: relative;
  border-radius: 8px;
  text-shadow: 2px 1px 2px black;
  background-blend-mode: soft-light, normal;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: ${({ bc }) => bc.concat("66")};
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
  height: 3rem;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
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

export const CardBadges = styled.div`
  left: 16px;
  bottom: 16px;
  position: fixed;
`;

export const WrappedCardContent = styled(CardContent)`
  padding: 8px;
`;
