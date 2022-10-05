import { useForm, Controller } from "react-hook-form";

import { FormValues } from "./types";
import { BoxWrapper, ButtonWrapper, TextFiledWrapper } from "./styles";

const platforms = [
  {
    value: "Xbox One",
    label: "Xbox One",
  },
  {
    value: "Play Station 4",
    label: "Play Station 4",
  },
  {
    value: "Xbox Series",
    label: "Xbox Series",
  },
  {
    value: "Play Station 5",
    label: "Play Station 5",
  },
];

export const GameForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <BoxWrapper component="form" onSubmit={onSubmit}>
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
      <ButtonWrapper type="submit" variant="contained" color="success">
        Add
      </ButtonWrapper>
    </BoxWrapper>
  );
};
