import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Alert, AlertColor, Snackbar } from "@mui/material";

import {
  Separator,
  BoxWrapper,
  InputsGroup,
  ButtonWrapper,
  TextFiledWrapper,
} from "./styles";
import { platforms } from "./constants";
import { addGamesService } from "../../../service";
import { FormValues, GameFormProps } from "./types";
import { GamesType } from "../../../service/games/types";

export const GameForm = ({ user, setOpenDrawer }: GameFormProps) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [snackState, setSnackState] = useState<{
    open: boolean;
    status: AlertColor;
    message: string;
  }>({ open: false, status: "success", message: "" });

  const addGame = async (userCode: string, game: GamesType) => {
    const {
      result: { status, message },
    } = await addGamesService({
      user,
      userCode,
      games: [game],
    });

    if (status === "success") {
      reset();
      setOpenDrawer(false);
      return;
    }
    setSnackState({ open: true, status, message });
  };

  const onSubmit = handleSubmit(({ userCode, ...game }) =>
    addGame(userCode, game)
  );

  return (
    <BoxWrapper component="form" onSubmit={onSubmit}>
      <Snackbar open={snackState.open} autoHideDuration={6000}>
        <Alert severity={snackState.status}>{snackState.message}</Alert>
      </Snackbar>
      <InputsGroup>
        <Controller
          name="userCode"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextFiledWrapper
              {...field}
              label="User code"
              helperText="Required*"
              error={!!errors?.userCode}
              id="outlined-error-helper-text"
            />
          )}
        />
        <Separator />
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextFiledWrapper
              {...field}
              label="Name"
              autoComplete="off"
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
              autoComplete="off"
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
      <ButtonWrapper type="submit" variant="contained" color="primary">
        Add
      </ButtonWrapper>
    </BoxWrapper>
  );
};
