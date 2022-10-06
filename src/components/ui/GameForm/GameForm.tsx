import { useState } from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

import {
  Separator,
  BoxWrapper,
  InputsGroup,
  ButtonWrapper,
  TextFiledWrapper,
} from "./styles";
import { FormValues } from "./types";
import { platforms } from "./constants";
import { CustomDrawer } from "../CustomDrawer";
import { addGamesService } from "../../../service";
import { GamesType } from "../../../service/games/types";

export const GameForm = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [openSnack, setOpenSnack] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleOpen = () => {
    setOpenDrawer(true);
  };

  const addGame = async (data: Omit<GamesType, "id">) => {
    const {
      result: { message },
    } = await addGamesService(data);

    if (message === "Game added sucesfuly!") {
      reset();
      setOpenSnack(true);
      setOpenDrawer(false);
    }
  };

  const onSubmit = handleSubmit((data) => addGame(data));

  return (
    <>
      <CustomDrawer
        {...{ open: openDrawer, setOpen: setOpenDrawer }}
        anchor="bottom"
      >
        <BoxWrapper component="form" onSubmit={onSubmit}>
          <InputsGroup>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextFiledWrapper
                  {...field}
                  label="Name"
                  error={!!errors?.name}
                  helperText="Required*"
                  id="outlined-error-helper-text"
                />
              )}
            />
            <Separator />
            <Controller
              name="cover"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextFiledWrapper
                  {...field}
                  label="Cover"
                  helperText="Required*"
                  error={!!errors?.cover}
                  id="outlined-error-helper-text"
                />
              )}
            />
            <Separator />
            <Controller
              name="platform"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextFiledWrapper
                  select
                  label="Platform"
                  SelectProps={{
                    native: true,
                  }}
                  {...field}
                  error={!!errors?.platform}
                  id="outlined-select-currency-native"
                  helperText="Please select the platform"
                >
                  {platforms.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextFiledWrapper>
              )}
            />
          </InputsGroup>
          <ButtonWrapper type="submit" variant="contained" color="success">
            Add
          </ButtonWrapper>
        </BoxWrapper>
      </CustomDrawer>
      <Snackbar open={openSnack} autoHideDuration={6000}>
        <Alert severity="success">Game Added!</Alert>
      </Snackbar>
      {!openDrawer && (
        <IconButton color="success" aria-label="Add game" onClick={handleOpen}>
          <AddToPhotosIcon />
        </IconButton>
      )}
    </>
  );
};
