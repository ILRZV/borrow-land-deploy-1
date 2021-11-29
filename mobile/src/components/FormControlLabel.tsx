import React from "react";
import { FormControl, Input } from "native-base";

type Props = {
  text?: string;
  secureTextEntry: boolean;
  placeholder?: string
};

export default function FormControlLabel({ text, secureTextEntry, placeholder }: Props) {
  return (
    <FormControl>
      <FormControl.Label
        _text={{
          color: "muted.700",
          fontSize: "xs",
        }}
      >
        {text}
      </FormControl.Label>
      <Input secureTextEntry={secureTextEntry} placeholder={placeholder}/>
    </FormControl>
  );
}
