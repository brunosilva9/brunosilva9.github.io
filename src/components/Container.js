import React from "react";
import { Container as RSContainer } from "reactstrap";

const Container = (props) => {
  return <RSContainer>{props.children}</RSContainer>;
};

export default Container;
