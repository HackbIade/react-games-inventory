import styled from "styled-components";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";

export const ListContainer = styled(motion.ul)`
  margin: 0 auto;
  display: grid;
  grid-row-gap: 8px;
  grid-column-gap: 0px;
  padding-inline-start: 0px;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardSkeleton = styled(Skeleton)`
  margin: 4px;
  border-radius: 4px;
  display: inline-block;
`;

export const EmptyStateContainer = styled.div`
flex: 1;
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`

export const MainContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`