import styled from "styled-components";
import { Typography } from "@mui/material";

export const Title = styled(Typography)`
  display: flex;
  font-size: 22px;
  font-weight: 600;
  margin: 0px 12px;
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

export const CustomNavbar = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 3;
  width: 100%;
  height: 60px;
  display: flex;
  margin-bottom: 4px;
  align-items: center;
  border-bottom: 1px solid;
  justify-content: space-between;
  background: linear-gradient(
      318.96deg,
      rgba(0, 0, 0, 0.4) -1.9%,
      rgba(36, 36, 36, 0.4) 105%
    ),
    #272727;
  background-blend-mode: soft-light, normal;
  box-shadow: -53.1479px -53.1479px 106.296px rgba(51, 51, 51, 0.4),
    17.716px 17.716px 70.8639px rgba(0, 0, 0, 0.8);
`;
