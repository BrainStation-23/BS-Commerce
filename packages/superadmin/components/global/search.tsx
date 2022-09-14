import React, { FC, ReactChild, ReactChildren } from "react";
import Accordion from "./accordion";

interface Props {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Search: FC<Props> = ({ children }) => {
  return (
    <div className="card">
      <Accordion title={"Search"} id={1} icon="bi bi-search" show={true}>
        <div className="card-body">
          <>{children}</>
        </div>
      </Accordion>
    </div>
  );
};

export default Search;
