import React, {
  ReactChildren,
  ReactChild,
} from "react";
import { GlobalProducts } from "./products/ProductContext"

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const ContextTree = ({ children }:AuxProps) => {
  return (
      <GlobalProducts>{children}</GlobalProducts>
  );
};

export default ContextTree;