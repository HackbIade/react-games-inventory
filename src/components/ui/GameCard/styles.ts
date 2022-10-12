import { Card } from "@mui/material";
import styled from "styled-components";

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
  box-shadow: -53.1479px -53.1479px 106.296px rgba(51, 51, 51, 0.4),
    17.716px 17.716px 70.8639px rgba(0, 0, 0, 0.8);
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
