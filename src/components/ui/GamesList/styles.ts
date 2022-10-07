import styled from "styled-components";
import { Skeleton } from "@mui/material";

export const ListContainer = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: center;
`;

export const CardSkeleton = styled(Skeleton)`
  margin: 8px;
  border-radius: 8px;
`;
