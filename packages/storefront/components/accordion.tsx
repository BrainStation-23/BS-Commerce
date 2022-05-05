import React, { FC } from "react";
import { accordionBody } from "../utils/types";

interface Props {
  accordionList: accordionBody[];
}

const Accordion: FC<Props> = ({ accordionList }) => {
  return (
    <div className="accordion" id="accordionExample">
      {accordionList.map((item, index) => (
        <div className="accordion-item mt-3">
          <h2 className="accordion-header" id={`headingOne${index}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseOne${index}`}
              aria-expanded="true"
              aria-controls={`collapseOne${index}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapseOne${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`headingOne${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
