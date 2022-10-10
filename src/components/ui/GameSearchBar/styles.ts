import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 480px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const SubContainer = styled.div`
  padding: 8px;
`;

export const SearchInput = styled(TextField)``;
