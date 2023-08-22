import {Button, Typography} from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  gap: 8px;
  height: 100%;
  display: flex;
  overflow-x: auto;
  padding: 8px 16px;
  flex-direction: row;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Title = styled(Typography).attrs({
  variant: 'h5',
  color: 'primary',
})``;

export const Subtitle = styled(Typography).attrs({
  variant: 'caption',
  color: 'primary',
})``;

export const Text = styled(Typography).attrs({
  variant: 'body2',
})`
  color: white;
`;

export const ConsoleButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
})`
  color: black;
  height: 28px;
  min-width: 250px;
  margin-bottom: 12px;
`;
