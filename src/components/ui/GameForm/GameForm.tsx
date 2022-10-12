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
import { GamesType } from "../../../types";
import { addGamesService } from "../../../service";
import { FormValues, GameFormProps } from "./types";
import { useGlobalContext } from "../../../context";
import { CONSOLES_NAMES } from "../../../constants/consoles";

export const GameForm = ({ user }: GameFormProps) => {
  const {
    setUserGamesList,
    state: { userGameList },
  } = useGlobalContext();

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [snackState, setSnackState] = useState<{
    open: boolean;
    message: string;
    status: AlertColor;
  }>({ open: false, status: "success", message: "" });
  const [disabled, setDisabled] = useState<boolean>(false);

  const addGame = async (userCode: string, game: GamesType) => {
    setDisabled(true);
    const {
      result: { status, message },
    } = await addGamesService({
      user,
      userCode,
      games: [game],
    });

    if (status === "success") {
      const unsortedList: GamesType[] = userGameList
        ? [{ ...game }, ...userGameList]
        : [{ ...game }];

      const sortedList: GamesType[] = unsortedList.sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      );
      setUserGamesList(sortedList);
      reset({ name: "", cover: "", platform: "", userCode });
      setSnackState({ open: true, status, message });
    }
    setDisabled(false);
    setSnackState({ open: true, status, message });
  };

  const onSubmit = handleSubmit(({ userCode, ...game }) =>
    addGame(userCode, game)
  );

  return (
    <BoxWrapper component="form" onSubmit={onSubmit}>
      <Snackbar
        open={snackState.open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
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
              {(
                Object.keys(CONSOLES_NAMES) as Array<
                  keyof typeof CONSOLES_NAMES
                >
              ).map((key) => (
                <option key={key} value={CONSOLES_NAMES[key]}>
                  {CONSOLES_NAMES[key]}
                </option>
              ))}
            </TextFiledWrapper>
          )}
        />
      </InputsGroup>
      <ButtonWrapper
        type="submit"
        color="primary"
        variant="contained"
        {...{ disabled }}
      >
        Add
      </ButtonWrapper>
    </BoxWrapper>
  );
};
