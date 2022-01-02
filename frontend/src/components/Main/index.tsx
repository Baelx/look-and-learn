import React, { FC } from "react";
import "./index.scss";

const Main: FC = ({ children }) => {
  return (
      <main>{children}</main>
  );
};

export default Main;