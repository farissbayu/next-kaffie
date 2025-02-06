import React from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export const LabeledTextarea = ({
  id,
  name,
  defaultValue,
  children,
  ...props
}) => {
  return (
    <>
      <Label htmlFor={id}>{children}</Label>
      <Textarea id={id} name={name} defaultValue={defaultValue} {...props} />
    </>
  );
};
