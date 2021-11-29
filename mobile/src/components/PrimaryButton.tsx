import React from "react";
import { Button } from "native-base";

type Props = {
  text: string;
  onPress(): void;
};

export default function PrimaryButton({ text, onPress }: Props) {
  return (
    <Button
      mt="2"
      colorScheme="purple"
      _text={{ color: "white" }}
      onPress={onPress}
    >
      {text}
    </Button>
  );
}
