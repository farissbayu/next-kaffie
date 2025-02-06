import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export const LabeledInput = ({
  id,
  name,
  defaultValue,
  children,
  ...props
}) => {
  return (
    <>
      <Label htmlFor={id}>{children}</Label>
      <Input id={id} name={name} defaultValue={defaultValue} {...props} />
    </>
  );
};
