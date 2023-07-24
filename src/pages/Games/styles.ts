import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  overflow-y: hidden;
  grid-template-rows: auto auto auto 1fr auto;
`;

export const Row = styled.div`
  top: 0px;
  gap: 8px;
  z-index: 3;
  width: 100%;
  display: flex;
  padding: 16px 0px;
  align-items: center;
  justify-content: center;
  background-color: #121212;
`;

export const BadgeContainer = styled.div`
  padding-right: 16px;
`;
