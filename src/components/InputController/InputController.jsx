import { Controller } from "react-hook-form";
import { InputField } from "../InputField/InputField";

export const InputController = ({ useFormConfig, input }) => {
  return (
    <Controller
      name={input.name}
      control={useFormConfig?.control}
      defaultValue=""
      render={({ field }) => (
        <InputField
          errors={useFormConfig?.formState.errors}
          {...input}
          {...field}
        />
      )}
    />
  );
};
