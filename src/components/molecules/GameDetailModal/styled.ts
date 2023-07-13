import { Button, Container, Dialog, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled(Dialog)``;

export const SubContainer = styled(Container).attrs({
  maxWidth: "xs"
})`
  width: 100%;
  padding: 0px;
  max-width: 500px;
  min-width: 320px;
  background-color: #121212;
`

export const BoxContainer = styled.div`
  display: flex;
  padding: 24px 16px;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  gap: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const NameInput = styled(TextField)
  .attrs({
    id: "name",
    name: "name",
    label: "Name",
    required: true,
    disabled: true,
  })`
  min-width:100%;
`;

export const CoverInput = styled(TextField)
  .attrs({
    id: "cover",
    name: "cover",
    label: "Cover",
    required: true,
    disabled: true,
  })`
  min-width:100%;
`;

export const AddedToCollectionInput = styled(TextField)
  .attrs({
    id: "added",
    name: "added",
    disabled: true,
    label: "Added to collection",
  })`
  min-width:100%;
`;

export const CustomSelect = styled(Select).attrs({
  id: "platform",
  disabled: true,
  label: "Platform",
  labelId: "select-label",
})`
  width: 100%;
`;

export const CustomMenuItem = styled(MenuItem)``;

export const CustomInputLabel = styled(InputLabel)``;

export const UpdateButton = styled(Button).attrs({
  type: "submit",
  variant: "contained",
})`
  width: 100%;
  margin-bottom: 16px;
`

export const DeleteButton = styled(Button).attrs({
  type: "submit",
  color: "error",
  variant: "contained",
})`
  width: 100%;
  margin-bottom: 16px;
`;

export const PlatformImages = styled.img`
  margin: 0px;
  padding: 0px;
  height: 15px;
`;

export const Cover = styled.img`
  margin: 0px;
  padding: 0px;
  height: 100%;
  min-height: 150px;
  max-height: 250px;
  object-fit: cover;
`;

export const CoverContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Typography).attrs({
  component: "h1", variant: "h5",
})`
 margin-bottom: 4px;
`


export const PlatformContainer = styled.div<{ bc?: string }>`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bc }) => bc || '#000000'} ;
`;