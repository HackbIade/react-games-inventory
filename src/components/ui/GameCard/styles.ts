import { Card } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Card)`
  margin: 4px;
  width: 180px;
  max-height: 400px;
  position: relative;
  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const PlatformContainer = styled.div`
  top: 0px;
  right: 0px;
  margin: 2px 2px;
  padding: 4px;
  display: flex;
  position: absolute;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #121212;
`;
