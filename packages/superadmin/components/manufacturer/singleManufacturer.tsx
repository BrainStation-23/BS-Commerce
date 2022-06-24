import type { NextComponentType } from "next";
import Link from "next/link";

const SingleManufacturer = ({ manufacturer, handleCheckbox }: any) => {
    return (
        <>
            <tr style={{ fontSize: "20px", paddingTop: "20px" }}>
                <td
                    style={{ textAlign: "center", border: "1px solid #dddddd" }}
                >
                    <input
                        type="checkbox"
                        id={manufacturer.id}
                        name={manufacturer.name}
                        value={manufacturer.id}
                        onChange={(e) => handleCheckbox(e)}
                    />
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {manufacturer.name}
                </td>
                {manufacturer.isPublished ? (
                    <td
                        style={{
                            border: "1px solid #dddddd",
                            textAlign: "center",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="current"
                            className="bi bi-check2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </td>
                ) : (
                    <td
                        style={{
                            border: "1px solid #dddddd",
                            textAlign: "center",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="red"
                            className="bi bi-x-lg"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                        {/* <i className="bi bi-x"></i> */}
                    </td>
                )}
                <td
                    style={{ border: "1px solid #dddddd", textAlign: "center" }}
                >
                    {manufacturer.displayOrder}
                </td>
                <td
                    style={{ border: "1px solid #dddddd", textAlign: "center" }}
                >
                    <Link href={"/Admin/Manufacturer/Edit/"+manufacturer.id} passHref>
                        <button
                            style={{ border: "1px solid #dddddd" }}
                            type="button"
                            className="btn btn-light btn-lg"
                        >
                            <i className="bi bi-pencil"></i>
                            {"  "}Edit
                        </button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default SingleManufacturer;
