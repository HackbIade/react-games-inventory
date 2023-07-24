import {
  CssBaseline,
  FormControl,
  SelectChangeEvent,
} from "@mui/material"
import { useState } from "react";

import {
  Form,
  Cover,
  NameInput,
  CoverInput,
  SubContainer,
  BoxContainer,
  CustomSelect,
  MainContainer,
  PlatformImages,
  CoverContainer,
  CustomMenuItem,
  CustomInputLabel,
  PlatformContainer,
  AddedToCollectionInput,
} from "./styled";
import { GamesType } from "../../../types";
import { GameDetailModalProps } from "./types";
import { PLATFORM_NAMES } from "../../../constants/platform";
import { GAME_IMAGES, PLATFORM_CONTAINER_COLOR } from "../../../constants/games";

export const GameDetailModal = ({ game, onClose, open }: GameDetailModalProps): JSX.Element => {
  const [formState, setFormState] = useState<GamesType>(game || {
    platform: PLATFORM_NAMES.PLAYSTATION_4
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log('in contruction 💀')
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (
    event: SelectChangeEvent<unknown>
  ) => {
    const { value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      platform: String(value)
    }))
  };

  const formatedDate = new Intl.DateTimeFormat('es-ES')
    .format(formState?.addedToCollection ?
      new Date(formState?.addedToCollection) :
      new Date());

  return (
    <MainContainer {...{open, onClose}}>
      <SubContainer maxWidth="xs">
        <PlatformContainer bc={PLATFORM_CONTAINER_COLOR[formState.platform]}>
          <PlatformImages
            alt={formState.platform}
            src={GAME_IMAGES[formState.platform]}
          />
        </PlatformContainer>
        <CssBaseline />
        <BoxContainer>
          <CoverContainer>
            <Cover src={formState.cover || '/images/no-found.png'} />
          </CoverContainer>
          <Form noValidate onSubmit={handleSubmit}>
            <NameInput onChange={handleInputChange} value={formState.name} />
            <FormControl fullWidth>
              <CustomInputLabel id="select-label">Platform</CustomInputLabel>
              <CustomSelect
                value={formState.platform}
                onChange={handleSelectChange}
              >
                {Object.entries(PLATFORM_NAMES)?.map(([_, platform]) => (
                  <CustomMenuItem key={platform} value={platform}>
                    {platform}
                  </CustomMenuItem>
                ))}
              </CustomSelect>
            </FormControl>
            <CoverInput onChange={handleInputChange} value={formState.cover} />
            <AddedToCollectionInput
              onChange={handleInputChange}
              value={formatedDate}
            />
          </Form>
        </BoxContainer>
      </SubContainer>
    </MainContainer>
  );
}