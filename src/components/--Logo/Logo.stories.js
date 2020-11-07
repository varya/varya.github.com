import React from "react";
import Logo from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
};
export const All = () => (
  <>
    <Logo />
    <Logo size="small" />
    <Logo size="big" />
  </>
);
