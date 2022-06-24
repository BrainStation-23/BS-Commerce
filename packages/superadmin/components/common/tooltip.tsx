import React from "react";
import { FC } from "react";

interface TOOL {
    label: string;
    data: string;
    tooltipText: string;
}

const Tooltip: FC<TOOL> = ({ label, data, tooltipText }) => {
    return (
        <>
            <div className="row mt-1">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <p className="float-lg-end float-xl-end">
                        <strong className="fs-6 me-1">{label}</strong>
                        <span>
                            <i
                                className="bi bi-question-circle-fill"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title={tooltipText}
                                style={{ color: "#3c8dbc" }}
                            ></i>
                        </span>
                    </p>
                </div>
                {
                    <div className="col">
                        <p>{data}</p>
                    </div>
                }
            </div>
        </>
    );
};

export default Tooltip;
