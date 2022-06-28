import React, { FC, ReactChild, ReactChildren } from "react";
import styles from "../../styles/Input.module.css";

interface Props {
  title: string;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  id: number;
  icon?: string;
  show?: boolean;
}

//Need to pass the Accordion object props to the Accordion component
const Accordion: FC<Props> = ({ title, children, id, icon, show = false }) => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${id}`}>
          <button
            className={`accordion-button fs-4 ${styles.accordion_button}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${id}`}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <i
              className={icon}
              style={{ marginTop: "-10px", marginRight: "18px" }}
            ></i>{" "}
            {title}
          </button>
        </h2>
        <div
          id={`collapse${id}`}
          className={`accordion-collapse collapse ${show ? "show" : ""}`}
          aria-labelledby={`heading${id}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <>{children}</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
