import React, { useState } from "react";
import {
  Alert,
  Snackbar,
  MenuItem,
  Typography,
  CssBaseline,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material"

import {
  Form,
  SubContainer,
  BoxContainer,
  CustomSelect,
  GametagInput,
  MainContainer,
  FinishOnboardingButton,
} from "./styles"
import { PLATFORM_NAMES } from "../../../constants/platform";
import { useAuth, useGlobalContext } from "../../../context";
import { setUserToUIDService } from "../../../service";
import { useNavigate } from "react-router-dom";

export const OnboardingModal = () => {
  const [formState, setFormState] = useState({
    gameTag: '',
    platform: '',
  });
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false);
  const { showAccountConfig, setShowAccountConfig, user } = useAuth();
  const { setGameTag, setLoading, state: { loading } } = useGlobalContext();

  const [snackMessage, setSnackMessage] = useState<string>("Error");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)
    const { gameTag, platform } = formState;
    if (gameTag && platform && user?.uid) {
      try {
        const result = await setUserToUIDService({
          gameTag,
          platform,
          uid: user?.uid,
        })
        if (result !== null) {
          setGameTag(gameTag);
          navigate('/games');
          setShowAccountConfig(false);
        } else {
          setSnackMessage("Gametag already exist");
          setOpen(true);
        }
      } catch (error) {
        setSnackMessage("Gametag already exist");
        setOpen(true)
      }
      finally {
        setLoading(false)
      }
    }
  }

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
  }

  const isButttonDisabled =
    loading ||
    !formState.platform ||
    !formState.gameTag ||
    formState.gameTag.length < 6

  return (
    <MainContainer open={showAccountConfig} >
      <SubContainer maxWidth="xs">
        <CssBaseline />
        <BoxContainer>
          <img src="/images/stop.png" alt="login" />
          <Typography component="h1" variant="h5">
            Account Config
          </Typography>
          <Snackbar open={open} autoHideDuration={5000}>
            <Alert severity='error'>
              {snackMessage}
            </Alert>
          </Snackbar>
          <Form noValidate onSubmit={handleSubmit}>
            <GametagInput onChange={handleInputChange} />
            <FormControl fullWidth>
              <InputLabel id="select-label">Platform</InputLabel>
              <CustomSelect
                id="platform"
                label="Platform"
                labelId="select-label"
                value={formState.platform}
                onChange={handleSelectChange}
              >
                {Object.entries(PLATFORM_NAMES)?.map(([_, platform]) => (
                  <MenuItem value={platform}>{platform}</MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
            <FinishOnboardingButton disabled={isButttonDisabled}>
              Done
            </FinishOnboardingButton>
          </Form>
          <Typography variant="caption" >
            We need to complete this data before finalizing.
          </Typography>
          <Typography variant="caption">
            You can add more platforms from the menu.
          </Typography>
        </BoxContainer>
      </SubContainer>
    </MainContainer>
  )
}