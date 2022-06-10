import { useState } from "react";

const ProductInfoForm = () => {
  const [btnToggler,setBtnToggler] = useState("bi-plus-lg");

  const toggleButton =()=>{
    if(btnToggler=="bi-plus-lg")
      setBtnToggler("bi-dash")
    else
    setBtnToggler("bi-plus-lg")
  }

  return (
    <>
      <div
        className="card card-secondary card-outline"
        data-card-name="product-info"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="product-info"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title float-start">
            <i className="bi bi-info-lg" />
            Product info
          </div>
          <div className="card-tools float-end">
            <div>
              <p>
                <button
                  className="btn btn-tool"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={()=> toggleButton()}
                >
                  <i className={`bi ${btnToggler}`}/>
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse " id="collapseExample">

        <div className="card-body">
          
          <div id="product-details-area">
            <div>
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="Name">
                      Product name
                    </label>
                    <div
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="The name of the product."
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group input-group-required">
                    <input
                      className="form-control text-box single-line"
                      data-val={true}
                      data-val-length="'Name' must be between 0 and 400 characters."
                      data-val-length-max={400}
                      data-val-length-min={0}
                      data-val-required="Please provide a name."
                      id="Name"
                      name="Name"
                      type="text"
                      defaultValue="Build your own computer"
                    />
                    <div className="input-group-btn">
                      <span className="required">*</span>
                    </div>
                  </div>
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="Name"
                    data-valmsg-replace={true}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="ShortDescription"
                    >
                      Short description
                    </label>
                    <div
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Short description is the text that is displayed in product list i.e. category / manufacturer pages."
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <textarea
                    className="form-control"
                    rows={4}
                    cols={20}
                    data-val={true}
                    data-val-length="'Short Description' must be between 0 and 2147483647 characters."
                    data-val-length-max={2147483647}
                    data-val-length-min={0}
                    id="ShortDescription"
                    name="ShortDescription"
                    defaultValue={"Build it"}
                  />
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="ShortDescription"
                    data-valmsg-replace={true}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="FullDescription">
                      Full description
                    </label>
                    <div
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Full description is the text that is displayed in product page."
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <textarea
                    data-val={true}
                    data-val-length="'Full Description' must be between 0 and 2147483647 characters."
                    data-val-length-max={2147483647}
                    data-val-length-min={0}
                    id="FullDescription"
                    name="FullDescription"
                    style={{ display: "none" }}
                    aria-hidden={true}
                    defaultValue={
                      "<p>Fight back against cluttered workspaces with the stylish IBM zBC12 All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning XBRITE-HiColor LCD technology. The black IBM zBC12 has a built-in microphone and MOTION EYE camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner and Sony's Movie Store software so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, this JS-series All-in-One includes an elegantly designed keyboard and a USB mouse.</p>"
                    }
                  />
                  <div
                    role="application"
                    className="tox tox-tinymce tox-platform-touch"
                    aria-disabled="false"
                    style={{
                      visibility: "hidden",
                      width: "100%",
                      height: "426px",
                    }}
                    data-mce-style="visibility: hidden; width: 100%; height: 426px;"
                  >
                    <div className="tox-editor-container">
                      <div
                        data-alloy-vertical-dir="toptobottom"
                        className="tox-editor-header"
                      >
                        <div
                          role="menubar"
                          data-alloy-tabstop={true}
                          className="tox-menubar"
                        >
                          <button
                            aria-haspopup={true}
                            role="menuitem"
                            type="button"
                            data-alloy-tabstop={true}
                            unselectable="on"
                            tabIndex={-1}
                            className="tox-mbtn tox-mbtn--select"
                            aria-expanded="false"
                            style={{ userSelect: "none" }}
                          >
                            <span className="tox-mbtn__select-label">File</span>
                            <div className="tox-mbtn__select-chevron">
                              <svg width={10} height={10}>
                                <path
                                  d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup={true}
                            role="menuitem"
                            type="button"
                            data-alloy-tabstop={true}
                            unselectable="on"
                            tabIndex={-1}
                            className="tox-mbtn tox-mbtn--select"
                            aria-expanded="false"
                            style={{ userSelect: "none" }}
                          >
                            <span className="tox-mbtn__select-label">Edit</span>
                            <div className="tox-mbtn__select-chevron">
                              <svg width={10} height={10}>
                                <path
                                  d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup={true}
                            role="menuitem"
                            type="button"
                            data-alloy-tabstop={true}
                            unselectable="on"
                            tabIndex={-1}
                            className="tox-mbtn tox-mbtn--select"
                            aria-expanded="false"
                            style={{ userSelect: "none" }}
                          >
                            <span className="tox-mbtn__select-label">View</span>
                            <div className="tox-mbtn__select-chevron">
                              <svg width={10} height={10}>
                                <path
                                  d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup={true}
                            role="menuitem"
                            type="button"
                            data-alloy-tabstop={true}
                            unselectable="on"
                            tabIndex={-1}
                            className="tox-mbtn tox-mbtn--select"
                            aria-expanded="false"
                            style={{ userSelect: "none" }}
                          >
                            <span className="tox-mbtn__select-label">
                              Insert
                            </span>
                            <div className="tox-mbtn__select-chevron">
                              <svg width={10} height={10}>
                                <path
                                  d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup={true}
                            role="menuitem"
                            type="button"
                            data-alloy-tabstop={true}
                            unselectable="on"
                            tabIndex={-1}
                            className="tox-mbtn tox-mbtn--select"
                            aria-expanded="false"
                            style={{ userSelect: "none" }}
                          >
                            <span className="tox-mbtn__select-label">
                              Format
                            </span>
                            <div className="tox-mbtn__select-chevron">
                              <svg width={10} height={10}>
                                <path
                                  d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup={true}
                            role="menuitem"
                            type="button"
                            data-alloy-tabstop={true}
                            unselectable="on"
                            tabIndex={-1}
                            className="tox-mbtn tox-mbtn--select"
                            aria-expanded="false"
                            style={{ userSelect: "none" }}
                          >
                            <span className="tox-mbtn__select-label">
                              Tools
                            </span>
                            <div className="tox-mbtn__select-chevron">
                              <svg width={10} height={10}>
                                <path
                                  d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup={true}
                            role="menuitem"
                            type="button"
                            data-alloy-tabstop={true}
                            unselectable="on"
                            tabIndex={-1}
                            className="tox-mbtn tox-mbtn--select"
                            aria-expanded="false"
                            style={{ userSelect: "none" }}
                          >
                            <span className="tox-mbtn__select-label">
                              Table
                            </span>
                            <div className="tox-mbtn__select-chevron">
                              <svg width={10} height={10}>
                                <path
                                  d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                        <div
                          role="group"
                          className="tox-toolbar tox-toolbar--scrolling"
                          aria-disabled="false"
                        >
                          <div
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <button
                              aria-label="Left to right"
                              title="Left to right"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn tox-tbtn--enabled"
                              aria-disabled="false"
                              aria-pressed={true}
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M11 5h7a1 1 0 010 2h-1v11a1 1 0 01-2 0V7h-2v11a1 1 0 01-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 017.8 10a3.3 3.3 0 010-2.8 3.4 3.4 0 011.8-1.8L11 5zM4.4 16.2L6.2 15l-1.8-1.2a1 1 0 011.2-1.6l3 2a1 1 0 010 1.6l-3 2a1 1 0 11-1.2-1.6z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button
                              aria-label="Right to left"
                              title="Right to left"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                              aria-pressed="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M8 5h8v2h-2v12h-2V7h-2v12H8v-7c-.5 0-1 0-1.4-.3A3.4 3.4 0 014.8 10a3.3 3.3 0 010-2.8 3.4 3.4 0 011.8-1.8L8 5zm12 11.2a1 1 0 11-1 1.6l-3-2a1 1 0 010-1.6l3-2a1 1 0 111 1.6L18.4 15l1.8 1.2z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <button
                              aria-label="Undo"
                              title="Undo"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn tox-tbtn--disabled"
                              aria-disabled={true}
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button
                              aria-label="Redo"
                              title="Redo"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn tox-tbtn--disabled"
                              aria-disabled={true}
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <button
                              title="Formats"
                              aria-label="Formats"
                              aria-haspopup={true}
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
                              aria-expanded="false"
                              style={{ userSelect: "none" }}
                            >
                              <span className="tox-tbtn__select-label">
                                Paragraph
                              </span>
                              <div className="tox-tbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                          <div
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <button
                              title="Fonts"
                              aria-label="Fonts"
                              aria-haspopup={true}
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
                              aria-expanded="false"
                              style={{ userSelect: "none" }}
                            >
                              <span className="tox-tbtn__select-label">
                                System Font
                              </span>
                              <div className="tox-tbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                          <div
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <button
                              title="Font sizes"
                              aria-label="Font sizes"
                              aria-haspopup={true}
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
                              aria-expanded="false"
                              style={{ userSelect: "none" }}
                            >
                              <span className="tox-tbtn__select-label">
                                12pt
                              </span>
                              <div className="tox-tbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                          <div
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <button
                              aria-label="Bold"
                              title="Bold"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                              aria-pressed="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button
                              aria-label="Italic"
                              title="Italic"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                              aria-pressed="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <div
                              aria-pressed="false"
                              aria-label="Text color"
                              title="Text color"
                              role="button"
                              aria-haspopup={true}
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-split-button"
                              aria-disabled="false"
                              aria-expanded="false"
                              aria-describedby="aria_6711763201711654761174651"
                              style={{ userSelect: "none" }}
                            >
                              <span
                                // role="presentation"
                                tabIndex={-1}
                                className="tox-tbtn"
                                aria-disabled="false"
                              >
                                <span className="tox-icon tox-tbtn__icon-wrap">
                                  <svg width={24} height={24}>
                                    <g fillRule="evenodd">
                                      <path
                                        id="tox-icon-text-color__color"
                                        d="M3 18h18v3H3z"
                                      />
                                      <path d="M8.7 16h-.8a.5.5 0 01-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 01-.5.6h-.8a.5.5 0 01-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 00.5.6h1.6a.5.5 0 00.5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z" />
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                // role="presentation"
                                tabIndex={-1}
                                className="tox-tbtn tox-split-button__chevron"
                                aria-disabled="false"
                              >
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </span>
                              <span
                                aria-hidden={true}
                                id="aria_6711763201711654761174651"
                                style={{ display: "none" }}
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed="false"
                              aria-label="Background color"
                              title="Background color"
                              role="button"
                              aria-haspopup={true}
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-split-button"
                              aria-disabled="false"
                              aria-expanded="false"
                              aria-describedby="aria_7039649481731654761174651"
                              style={{ userSelect: "none" }}
                            >
                              <span
                                // role="presentation"
                                tabIndex={-1}
                                className="tox-tbtn"
                                aria-disabled="false"
                              >
                                <span className="tox-icon tox-tbtn__icon-wrap">
                                  <svg width={24} height={24}>
                                    <g fillRule="evenodd">
                                      <path
                                        id="tox-icon-highlight-bg-color__color"
                                        d="M3 18h18v3H3z"
                                      />
                                      <path
                                        fillRule="nonzero"
                                        d="M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6"
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                // role="presentation"
                                tabIndex={-1}
                                className="tox-tbtn tox-split-button__chevron"
                                aria-disabled="false"
                              >
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </span>
                              <span
                                aria-hidden={true}
                                id="aria_7039649481731654761174651"
                                style={{ display: "none" }}
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            // title
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <button
                              aria-label="Align left"
                              title="Align left"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                              aria-pressed="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button
                              aria-label="Align center"
                              title="Align center"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                              aria-pressed="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button
                              aria-label="Align right"
                              title="Align right"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                              aria-pressed="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button
                              aria-label="Justify"
                              title="Justify"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                              aria-pressed="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            // title
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <div
                              aria-pressed="false"
                              aria-label="Bullet list"
                              title="Bullet list"
                              role="button"
                              aria-haspopup={true}
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-split-button"
                              aria-disabled="false"
                              aria-expanded="false"
                              aria-describedby="aria_8059188811751654761174652"
                              style={{ userSelect: "none" }}
                            >
                              <span
                                // role="presentation"
                                tabIndex={-1}
                                className="tox-tbtn"
                                aria-disabled="false"
                              >
                                <span className="tox-icon tox-tbtn__icon-wrap">
                                  <svg width={24} height={24}>
                                    <path
                                      d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z"
                                      fillRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </span>
                              <span
                                // role="presentation"
                                tabIndex={-1}
                                className="tox-tbtn tox-split-button__chevron"
                                aria-disabled="false"
                              >
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </span>
                              <span
                                aria-hidden={true}
                                id="aria_8059188811751654761174652"
                                style={{ display: "none" }}
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed="false"
                              aria-label="Numbered list"
                              title="Numbered list"
                              role="button"
                              aria-haspopup={true}
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-split-button"
                              aria-disabled="false"
                              aria-expanded="false"
                              aria-describedby="aria_2423589281771654761174652"
                              style={{ userSelect: "none" }}
                            >
                              <span
                                // role="presentation"
                                tabIndex={-1}
                                className="tox-tbtn"
                                aria-disabled="false"
                              >
                                <span className="tox-icon tox-tbtn__icon-wrap">
                                  <svg width={24} height={24}>
                                    <path
                                      d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z"
                                      fillRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </span>
                              <span
                                // role="presentation"
                                tabIndex={-1}
                                className="tox-tbtn tox-split-button__chevron"
                                aria-disabled="false"
                              >
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </span>
                              <span
                                aria-hidden={true}
                                id="aria_2423589281771654761174652"
                                style={{ display: "none" }}
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <button
                              aria-label="Decrease indent"
                              title="Decrease indent"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn tox-tbtn--disabled"
                              aria-disabled={true}
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm1.6-3.8a1 1 0 01-1.2 1.6l-3-2a1 1 0 010-1.6l3-2a1 1 0 011.2 1.6L6.8 12l1.8 1.2z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button
                              aria-label="Increase indent"
                              title="Increase indent"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 011.2-1.6l3 2a1 1 0 010 1.6l-3 2a1 1 0 11-1.2-1.6z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            // title
                            role="toolbar"
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-toolbar__group"
                          >
                            <button
                              aria-label="Insert/edit link"
                              title="Insert/edit link"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                              aria-pressed="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M6.2 12.3a1 1 0 011.4 1.4l-2.1 2a2 2 0 102.7 2.8l4.8-4.8a1 1 0 000-1.4 1 1 0 111.4-1.3 2.9 2.9 0 010 4L9.6 20a3.9 3.9 0 01-5.5-5.5l2-2zm11.6-.6a1 1 0 01-1.4-1.4l2-2a2 2 0 10-2.6-2.8L11 10.3a1 1 0 000 1.4A1 1 0 119.6 13a2.9 2.9 0 010-4L14.4 4a3.9 3.9 0 015.5 5.5l-2 2z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button
                              aria-label="Insert/edit image"
                              title="Insert/edit image"
                              type="button"
                              tabIndex={-1}
                              className="tox-tbtn"
                              aria-disabled="false"
                              aria-pressed="false"
                            >
                              <span className="tox-icon tox-tbtn__icon-wrap">
                                <svg width={24} height={24}>
                                  <path
                                    d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="tox-anchorbar" />
                      </div>
                      <div className="tox-sidebar-wrap">
                        <div className="tox-edit-area">
                          <iframe
                            id="FullDescription_ifr"
                            frameBorder={0}
                            allowTransparency={true}
                            title="Rich Text Area. Press ALT-0 for help."
                            className="tox-edit-area__iframe"
                          />
                        </div>
                        <div role="complementary" className="tox-sidebar">
                          <div
                            data-alloy-tabstop={true}
                            tabIndex={-1}
                            className="tox-sidebar__slider tox-sidebar--sliding-closed"
                            style={{ width: "0px" }}
                          >
                            <div className="tox-sidebar__pane-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tox-statusbar">
                      <div className="tox-statusbar__text-container">
                        <div
                          // role="navigation"
                          data-alloy-tabstop={true}
                          className="tox-statusbar__path"
                          aria-disabled="false"
                        >
                          <div
                            // role="button"
                            data-index={0}
                            tab-index={-1}
                            aria-level={1}
                            tabIndex={-1}
                            className="tox-statusbar__path-item"
                            aria-disabled="false"
                          >
                            p
                          </div>
                        </div>
                        <span className="tox-statusbar__branding">
                          <a
                            href="https://www.tiny.cloud/?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce&utm_content=v5"
                            // rel="noopener"
                            // target="_blank"
                            tabIndex={-1}
                            aria-label="Powered by Tiny"
                          >
                            Powered by Tiny
                          </a>
                        </span>
                      </div>
                    </div>
                    <div
                      aria-hidden={true}
                      className="tox-throbber"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div
                    id="createConfigurationFailed-action-alert"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="createConfigurationFailed-action-alert-title"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4
                            className="modal-title"
                            id="createConfigurationFailed-action-alert-title"
                          >
                            Information
                          </h4>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div
                            className="additional-text"
                            id="createConfigurationFailed-info"
                          />
                        </div>
                        <div className="modal-footer">
                          <span
                            className="btn btn-primary float-right"
                            data-dismiss="modal"
                          >
                            Ok
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="btn btn-default"
                      id="createConfigurationFailed"
                      style={{ display: "none" }}
                      data-toggle="modal"
                      data-target="#createConfigurationFailed-action-alert"
                    />
                  </div>
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="FullDescription"
                    data-valmsg-replace={true}
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="Sku">
                    SKU
                  </label>
                  <div
                    // title
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Product stock keeping unit (SKU). Your internal unique identifier that can be used to track this product."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <input
                  className="form-control text-box single-line"
                  data-val={true}
                  data-val-length="'Sku' must be between 0 and 400 characters."
                  data-val-length-max={400}
                  data-val-length-min={0}
                  id="Sku"
                  name="Sku"
                  type="text"
                  defaultValue="COMP_CUST"
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="Sku"
                  data-valmsg-replace={true}
                />
                <span className="field-validation-custom" />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="SelectedCategoryIds"
                  id="SelectedCategoryIds_label"
                >
                  Categories
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Choose categories. You can manage product categories by selecting Catalog > Categories."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div
                className="k-widget k-multiselect k-multiselect-clearable"
                unselectable="on"
                // title
                style={{}}
              >
                <div
                  className="k-multiselect-wrap k-floatwrap"
                  role="listbox"
                  unselectable="on"
                >
                  <ul
                    unselectable="on"
                    className="k-reset"
                    id="SelectedCategoryIds_taglist"
                  >
                    <li
                      role="option"
                      aria-selected={true}
                      className="k-button"
                      unselectable="on"
                      aria-setsize={1}
                    >
                      <span unselectable="on">Computers &gt;&gt; Desktops</span>
                      <span
                        aria-hidden={true}
                        unselectable="on"
                        aria-label="delete"
                        title="delete"
                        className="k-select"
                      >
                        <span className="k-icon k-i-close" />
                      </span>
                    </li>
                  </ul>
                  <input
                    className="k-input"
                    style={{ width: "25px" }}
                    // accessKey
                    autoComplete="off"
                    role="listbox"
                    // title
                    aria-expanded="false"
                    // aria-haspopup="listbox"
                    // aria-autocomplete="list"
                    tabIndex={0}
                    aria-describedby="SelectedCategoryIds_taglist"
                    aria-labelledby="SelectedCategoryIds_label"
                    aria-disabled="false"
                    aria-busy="false"
                    aria-owns="SelectedCategoryIds_taglist SelectedCategoryIds_listbox"
                  />
                  <span
                    unselectable="on"
                    className="k-icon k-clear-value k-i-close k-hidden"
                    title="clear"
                    role="button"
                    tabIndex={-1}
                  />
                  <span className="k-icon k-i-loading k-hidden" />
                </div>
                <select
                  id="SelectedCategoryIds"
                  multiple={true}
                  name="SelectedCategoryIds"
                  data-role="multiselect"
                  aria-disabled="false"
                  style={{ display: "none" }}
                >
                  <option value={1}>Computers</option>
                  <option value={2} selected>
                    Computers &gt;&gt; Desktops
                  </option>
                  <option value={3}>Computers &gt;&gt; Notebooks</option>
                  <option value={4}>Computers &gt;&gt; Software</option>
                  <option value={5}>Electronics</option>
                  <option value={6}>
                    Electronics &gt;&gt; Camera &amp; photo
                  </option>
                  <option value={7}>Electronics &gt;&gt; Cell phones</option>
                  <option value={8}>Electronics &gt;&gt; Others</option>
                  <option value={9}>Apparel</option>
                  <option value={10}>Apparel &gt;&gt; Shoes</option>
                  <option value={11}>Apparel &gt;&gt; Clothing</option>
                  <option value={12}>Apparel &gt;&gt; Accessories</option>
                  <option value={13}>Digital downloads</option>
                  <option value={14}>Books</option>
                  <option value={15}>Jewelry</option>
                  <option value={16}>Gift Cards</option>
                </select>
                <span
                  style={{
                    fontFamily:
                      '"source sans pro", -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, "helvetica neue", Arial, sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol"',
                    fontSize: "16px",
                    fontStretch: "100%",
                    fontStyle: "normal",
                    fontWeight: 400,
                    letterSpacing: "normal",
                    textTransform: "none",
                    lineHeight: "26.4px",
                    position: "absolute",
                    visibility: "hidden",
                    top: "-3333px",
                    left: "-3333px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="SelectedManufacturerIds"
                  id="SelectedManufacturerIds_label"
                >
                  Manufacturers
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Choose the manufacturer. You can manage manufacturers by selecting Catalog > Manufacturers."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div
                className="k-widget k-multiselect k-multiselect-clearable"
                unselectable="on"
                // title
                style={{}}
              >
                <div
                  className="k-multiselect-wrap k-floatwrap"
                  role="listbox"
                  unselectable="on"
                >
                  <ul
                    unselectable="on"
                    className="k-reset"
                    id="SelectedManufacturerIds_taglist"
                  />
                  <input
                    className="k-input k-readonly"
                    style={{ width: "25px" }}
                    // accessKey
                    autoComplete="off"
                    role="listbox"
                    // title
                    aria-expanded="false"
                    // aria-haspopup="listbox"
                    // aria-autocomplete="list"
                    tabIndex={0}
                    aria-describedby="SelectedManufacturerIds_taglist"
                    aria-labelledby="SelectedManufacturerIds_label"
                    aria-disabled="false"
                    aria-busy="false"
                    aria-owns="SelectedManufacturerIds_taglist SelectedManufacturerIds_listbox"
                  />
                  <span
                    unselectable="on"
                    className="k-icon k-clear-value k-i-close k-hidden"
                    title="clear"
                    role="button"
                    tabIndex={-1}
                  />
                  <span className="k-icon k-i-loading k-hidden" />
                </div>
                <select
                  id="SelectedManufacturerIds"
                  multiple={true}
                  name="SelectedManufacturerIds"
                  data-role="multiselect"
                  aria-disabled="false"
                  style={{ display: "none" }}
                >
                  <option value={1}>Apple</option>
                  <option value={2}>HP</option>
                  <option value={3}>Nike</option>
                </select>
                <span
                  style={{
                    fontFamily:
                      '"source sans pro", -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, "helvetica neue", Arial, sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol"',
                    fontSize: "16px",
                    fontStretch: "100%",
                    fontStyle: "normal",
                    fontWeight: 400,
                    letterSpacing: "normal",
                    textTransform: "none",
                    lineHeight: "26.4px",
                    position: "absolute",
                    visibility: "hidden",
                    top: "-3333px",
                    left: "-3333px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="Published">
                  Published
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check to publish this product (visible in store). Uncheck to unpublish (product not available in store)."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                defaultChecked={true}
                className="check-box"
                data-val={true}
                data-val-required="The Published field is required."
                id="Published"
                name="Published"
                type="checkbox"
                defaultValue="defaultValue"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="Published"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="ProductTags">
                  Product tags
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Product tags are the keywords for product identification. The more products associated with a particular tag, the larger it will show on the tag cloud."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="form-control text-box single-line tag-editor-hidden-src"
                id="ProductTags"
                name="ProductTags"
                type="text"
                defaultValue="computer, awesome"
              />
              <ul className="tag-editor ui-sortable">
                <li style={{ width: "1px" }} className="ui-sortable-handle">
                  &nbsp;
                </li>
                <li className="ui-sortable-handle">
                  <div className="tag-editor-spacer">&nbsp;,</div>
                  <div className="tag-editor-tag">computer</div>
                  <div className="tag-editor-delete">
                    <i />
                  </div>
                </li>
                <li className="ui-sortable-handle">
                  <div className="tag-editor-spacer">&nbsp;,</div>
                  <div className="tag-editor-tag">awesome</div>
                  <div className="tag-editor-delete">
                    <i />
                  </div>
                </li>
              </ul>
              <span
                className="field-validation-valid"
                data-valmsg-for="ProductTags"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="Gtin">
                  GTIN (global trade item number)
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Enter global trade item number (GTIN). These identifiers include UPC (in North America), EAN (in Europe), JAN (in Japan), and ISBN (for books)."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="form-control text-box single-line"
                data-val={true}
                data-val-length="'Gtin' must be between 0 and 400 characters."
                data-val-length-max={400}
                data-val-length-min={0}
                id="Gtin"
                name="Gtin"
                type="text"
                // defaultValue
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="Gtin"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="ManufacturerPartNumber"
                >
                  Manufacturer part number
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="The manufacturer's part number for this product."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="form-control text-box single-line"
                data-val={true}
                data-val-length="'Manufacturer Part Number' must be between 0 and 400 characters."
                data-val-length-max={400}
                data-val-length-min={0}
                id="ManufacturerPartNumber"
                name="ManufacturerPartNumber"
                type="text"
                // defaultValue
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="ManufacturerPartNumber"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div
            className="form-group row advanced-setting parent-setting parent-setting-advanced opened"
            id="parentSetting36632961"
          >
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="ShowOnHomepage">
                  Show on home page
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check to display this product on your store's home page. Recommended for your most popular products."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                defaultChecked={true}
                className="check-box"
                data-val={true}
                data-val-required="The Show on home page field is required."
                id="ShowOnHomepage"
                name="ShowOnHomepage"
                type="checkbox"
                defaultValue="defaultValue"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="ShowOnHomepage"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div className="nested-setting" id="nestedSetting36632961">
            <div
              className="form-group row advanced-setting"
              id="pnlDisplayOrder"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="DisplayOrder">
                    Display order
                  </label>
                  <div
                    // title
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Display order of the product. 1 represents the top of the list."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <span className="k-widget k-numerictextbox" style={{}}>
                  <span className="k-numeric-wrap k-state-default">
                    <input
                      type="text"
                      className="k-formatted-value k-input"
                      title="0"
                      tabIndex={0}
                      role="spinbutton"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      autoComplete="off"
                      aria-valuenow={0}
                      aria-disabled="false"
                      style={{}}
                    />
                    <input
                      type="text"
                      data-val={true}
                      data-val-required="The Display order field is required."
                      id="DisplayOrder"
                      name="DisplayOrder"
                      defaultValue={0}
                      data-role="numerictextbox"
                      role="spinbutton"
                      className="k-input"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      aria-valuenow={0}
                      aria-disabled="false"
                      style={{ display: "none" }}
                    />
                    <span
                      className="k-icon k-i-warning"
                      style={{ display: "none" }}
                    />
                    <span className="k-select">
                      <span
                        unselectable="on"
                        className="k-link k-link-increase"
                        aria-label="Increase value"
                        title="Increase value"
                      >
                        <span
                          unselectable="on"
                          className="k-icon k-i-arrow-60-up"
                        />
                      </span>
                      <span
                        unselectable="on"
                        className="k-link k-link-decrease"
                        aria-label="Decrease value"
                        title="Decrease value"
                      >
                        <span
                          unselectable="on"
                          className="k-icon k-i-arrow-60-down"
                        />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="DisplayOrder"
                  data-valmsg-replace={true}
                />
              </div>
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="ProductTypeId">
                  Product type
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Product type can be simple or grouped. In most cases your product will have the Simple product type. You need to use Grouped product type when a new product consists of one or more existing products that will be displayed on one single product details page."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <select
                className="form-control"
                data-val={true}
                data-val-required="The Product type field is required."
                id="ProductTypeId"
                name="ProductTypeId"
              >
                <option selected={true} value={5}>
                  Simple
                </option>
                <option value={10}>Grouped (product with variants)</option>
              </select>
              <span
                className="field-validation-valid"
                data-valmsg-for="ProductTypeId"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div
            className="card card-default margin-bottom d-none"
            id="group-associated-products"
          >
            <div className="card-header">Associated products (variants)</div>
            <div className="card-body">
              <ul className="common-list">
                <li>
                  {/* Associated products are used only with "grouped" products. */}
                </li>
                <li>
                  {/* A product could be associated to only one "grouped" product. */}
                </li>
              </ul>
              <div
                id="associatedproducts-grid_wrapper"
                className="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="dataTables_scroll">
                      <div
                        className="dataTables_scrollHead"
                        style={{
                          overflow: "hidden",
                          position: "relative",
                          border: "0px",
                          width: "100%",
                        }}
                      >
                        <div
                          className="dataTables_scrollHeadInner"
                          style={{
                            boxSizing: "content-box",
                            width: "0px",
                            paddingRight: "0px",
                          }}
                        >
                          <table
                            className="table table-bordered table-hover table-striped dataTable no-footer"
                            width="100%"
                            role="grid"
                            style={{ marginLeft: "0px", width: "0px" }}
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "0px" }}
                                >
                                  Product
                                </th>
                                <th
                                  className="sorting_disabled text-center"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "0px" }}
                                >
                                  Display order
                                </th>
                                <th
                                  className="sorting_disabled button-column"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "0px" }}
                                >
                                  View
                                </th>
                                <th
                                  className="sorting_disabled button-column"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "0px" }}
                                >
                                  Edit
                                </th>
                                <th
                                  className="sorting_disabled button-column"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "0px" }}
                                >
                                  Delete
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                      <div
                        className="dataTables_scrollBody"
                        style={{
                          position: "relative",
                          overflow: "auto",
                          width: "100%",
                        }}
                      >
                        <table
                          className="table table-bordered table-hover table-striped dataTable no-footer"
                          width="100%"
                          id="associatedproducts-grid"
                          role="grid"
                          aria-describedby="associatedproducts-grid_info"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr role="row" style={{ height: "0px" }}>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "0px",
                                  paddingTop: "0px",
                                  paddingBottom: "0px",
                                  borderTopWidth: "0px",
                                  borderBottomWidth: "0px",
                                  height: "0px",
                                }}
                              >
                                <div
                                  className="dataTables_sizing"
                                  style={{ height: "0px", overflow: "hidden" }}
                                >
                                  Product
                                </div>
                              </th>
                              <th
                                className="sorting_disabled text-center"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "0px",
                                  paddingTop: "0px",
                                  paddingBottom: "0px",
                                  borderTopWidth: "0px",
                                  borderBottomWidth: "0px",
                                  height: "0px",
                                }}
                              >
                                <div
                                  className="dataTables_sizing"
                                  style={{ height: "0px", overflow: "hidden" }}
                                >
                                  Display order
                                </div>
                              </th>
                              <th
                                className="sorting_disabled button-column"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "0px",
                                  paddingTop: "0px",
                                  paddingBottom: "0px",
                                  borderTopWidth: "0px",
                                  borderBottomWidth: "0px",
                                  height: "0px",
                                }}
                              >
                                <div
                                  className="dataTables_sizing"
                                  style={{ height: "0px", overflow: "hidden" }}
                                >
                                  View
                                </div>
                              </th>
                              <th
                                className="sorting_disabled button-column"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "0px",
                                  paddingTop: "0px",
                                  paddingBottom: "0px",
                                  borderTopWidth: "0px",
                                  borderBottomWidth: "0px",
                                  height: "0px",
                                }}
                              >
                                <div
                                  className="dataTables_sizing"
                                  style={{ height: "0px", overflow: "hidden" }}
                                >
                                  Edit
                                </div>
                              </th>
                              <th
                                className="sorting_disabled button-column"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "0px",
                                  paddingTop: "0px",
                                  paddingBottom: "0px",
                                  borderTopWidth: "0px",
                                  borderBottomWidth: "0px",
                                  height: "0px",
                                }}
                              >
                                <div
                                  className="dataTables_sizing"
                                  style={{ height: "0px", overflow: "hidden" }}
                                >
                                  Delete
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td
                                valign="top"
                                colSpan={5}
                                className="dataTables_empty"
                              >
                                No data available in table
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row margin-t-5">
                  <div className="col-lg-5 col-xs-12">
                    <div className="float-lg-left">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="associatedproducts-grid_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="associatedproducts-grid_previous"
                          >
                            <a
                              href="#"
                              aria-controls="associatedproducts-grid"
                              data-dt-idx={0}
                              tabIndex={0}
                              className="page-link"
                            >
                              <i className="k-icon k-i-arrow-w" />
                            </a>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="associatedproducts-grid_next"
                          >
                            <a
                              href="#"
                              aria-controls="associatedproducts-grid"
                              data-dt-idx={1}
                              tabIndex={0}
                              className="page-link"
                            >
                              <i className="k-icon k-i-arrow-e" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-12">
                    <div className="text-center">
                      <div
                        className="dataTables_length"
                        id="associatedproducts-grid_length"
                      >
                        <label>
                          Show{" "}
                          <select
                            name="associatedproducts-grid_length"
                            aria-controls="associatedproducts-grid"
                            className="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value={7}>7</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>{" "}
                          items
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-12">
                    <div className="float-lg-right text-center">
                      <div
                        className="dataTables_info"
                        id="associatedproducts-grid_info"
                        role="status"
                        aria-live="polite"
                      >
                        No records
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-xs-12">
                    <div className="float-lg-right text-center data-tables-refresh">
                      <div className="dt-buttons btn-group flex-wrap">
                        <button
                          className="btn btn-secondary"
                          tabIndex={0}
                          aria-controls="associatedproducts-grid"
                          type="button"
                        >
                          <span>
                            <i
                              className="fas fa-sync-alt"
                              style={{ paddingLeft: "5px" }}
                            />
                          </span>
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="associatedproducts-grid_deleteConflict-action-alert"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="associatedproducts-grid_deleteConflict-action-alert-title"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="associatedproducts-grid_deleteConflict-action-alert-title"
                      >
                        Information
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div
                        className="additional-text"
                        id="associatedproducts-grid_deleteConflict-info"
                      />
                    </div>
                    <div className="modal-footer">
                      <span
                        className="btn btn-primary float-right"
                        data-dismiss="modal"
                      >
                        Ok
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="btn btn-default"
                  id="associatedproducts-grid_deleteConflict"
                  style={{ display: "none" }}
                  data-toggle="modal"
                  data-target="#associatedproducts-grid_deleteConflict-action-alert"
                />
              </div>
              <div
                id="associatedproducts-grid_deleteCommonFailed-action-alert"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="associatedproducts-grid_deleteCommonFailed-action-alert-title"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="associatedproducts-grid_deleteCommonFailed-action-alert-title"
                      >
                        Information
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div
                        className="additional-text"
                        id="associatedproducts-grid_deleteCommonFailed-info"
                      />
                    </div>
                    <div className="modal-footer">
                      <span
                        className="btn btn-primary float-right"
                        data-dismiss="modal"
                      >
                        Ok
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="btn btn-default"
                  id="associatedproducts-grid_deleteCommonFailed"
                  style={{ display: "none" }}
                  data-toggle="modal"
                  data-target="#associatedproducts-grid_deleteCommonFailed-action-alert"
                />
              </div>
            </div>
            <div className="card-footer">
              <button
                type="submit"
                id="btnAddNewAssociatedProduct"
                // onclick="javascript:OpenWindow('/Admin/Product/AssociatedProductAddPopup?productId=1&btnId=btnRefreshAssociatedProducts&formId=product-form', 800, 800, true); return false;"
                className="btn btn-primary"
              >
                Add new associated product
              </button>
              <button
                type="submit"
                id="btnRefreshAssociatedProducts"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div
            className="form-group row advanced-setting"
            id="nnpnlProductTemplateId"
          >
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="ProductTemplateId">
                  Product template
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Choose a product template. This template defines how this product will be displayed in public store."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <select
                className="form-control"
                data-val={true}
                data-val-required="The Product template field is required."
                id="ProductTemplateId"
                name="ProductTemplateId"
              >
                <option value={1}>Simple product</option>
              </select>
              <span
                className="field-validation-valid"
                data-valmsg-for="ProductTemplateId"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div
            className="form-group row advanced-setting"
            id="group-visible-individually"
          >
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="VisibleIndividually">
                  Visible individually
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check it if you want the product to be on catalog or search results. You can uncheck this box to hide associated products from catalog and make them accessible only from grouped product details page."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                defaultChecked={true}
                className="check-box"
                data-val={true}
                data-val-required="The Visible individually field is required."
                id="VisibleIndividually"
                name="VisibleIndividually"
                type="checkbox"
                defaultValue="defaultValue"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="VisibleIndividually"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="SelectedCustomerRoleIds"
                  id="SelectedCustomerRoleIds_label"
                >
                  Customer roles
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Choose one or several customer roles i.e. administrators, vendors, guests, who will be able to see this product in catalog. If you don't need this option just leave this field empty. In order to use this functionality, you have to disable the following setting: Configuration > Settings > Catalog > Ignore ACL rules (sitewide)."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="k-widget k-multiselect k-multiselect-clearable"
                    unselectable="on"
                    // title
                    style={{}}
                  >
                    <div
                      className="k-multiselect-wrap k-floatwrap"
                      role="listbox"
                      unselectable="on"
                    >
                      <ul
                        unselectable="on"
                        className="k-reset"
                        id="SelectedCustomerRoleIds_taglist"
                      />
                      <input
                        className="k-input k-readonly"
                        style={{ width: "25px" }}
                        //accessKey
                        autoComplete="off"
                        role="listbox"
                        // title
                        aria-expanded="false"
                        // aria-haspopup="listbox"
                        // aria-autocomplete="list"
                        tabIndex={0}
                        aria-describedby="SelectedCustomerRoleIds_taglist"
                        aria-labelledby="SelectedCustomerRoleIds_label"
                        aria-disabled="false"
                        aria-busy="false"
                        aria-owns="SelectedCustomerRoleIds_taglist SelectedCustomerRoleIds_listbox"
                      />
                      <span
                        unselectable="on"
                        className="k-icon k-clear-value k-i-close k-hidden"
                        title="clear"
                        role="button"
                        tabIndex={-1}
                      />
                      <span className="k-icon k-i-loading k-hidden" />
                    </div>
                    <select
                      id="SelectedCustomerRoleIds"
                      multiple={true}
                      name="SelectedCustomerRoleIds"
                      data-role="multiselect"
                      aria-disabled="false"
                      style={{ display: "none" }}
                    >
                      <option value={1}>Administrators</option>
                      <option value={2}>Forum Moderators</option>
                      <option value={4}>Guests</option>
                      <option value={3}>Registered</option>
                      <option value={5}>Vendors</option>
                    </select>
                    <span
                      style={{
                        fontFamily:
                          '"source sans pro", -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, "helvetica neue", Arial, sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol"',
                        fontSize: "16px",
                        fontStretch: "100%",
                        fontStyle: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        textTransform: "none",
                        lineHeight: "26.4px",
                        position: "absolute",
                        visibility: "hidden",
                        top: "-3333px",
                        left: "-3333px",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="callout bg-gray-light no-margin">
                    In order to use this functionality, you have to disable the
                    following setting: Catalog settings &gt; Ignore ACL rules.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="SelectedStoreIds"
                  id="SelectedStoreIds_label"
                >
                  Limited to stores
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title='Option to limit this product to a certain store. If you have multiple stores, choose one or several from the list. If you don&apos;t use this option just leave this field empty. In order to use this functionality, you have to disable the following setting: Configuration > Catalog settings > Ignore "limit per store" rules (sitewide).'
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="k-widget k-multiselect k-multiselect-clearable"
                    unselectable="on"
                    // title
                    style={{}}
                  >
                    <div
                      className="k-multiselect-wrap k-floatwrap"
                      role="listbox"
                      unselectable="on"
                    >
                      <ul
                        unselectable="on"
                        className="k-reset"
                        id="SelectedStoreIds_taglist"
                      />
                      <input
                        className="k-input k-readonly"
                        style={{ width: "25px" }}
                        //accessKey
                        autoComplete="off"
                        role="listbox"
                        // title
                        aria-expanded="false"
                        // aria-haspopup="listbox"
                        // aria-autocomplete="list"
                        tabIndex={0}
                        aria-describedby="SelectedStoreIds_taglist"
                        aria-labelledby="SelectedStoreIds_label"
                        aria-disabled="false"
                        aria-busy="false"
                        aria-owns="SelectedStoreIds_taglist SelectedStoreIds_listbox"
                      />
                      <span
                        unselectable="on"
                        className="k-icon k-clear-value k-i-close k-hidden"
                        title="clear"
                        role="button"
                        tabIndex={-1}
                      />
                      <span className="k-icon k-i-loading k-hidden" />
                    </div>
                    <select
                      id="SelectedStoreIds"
                      multiple={true}
                      name="SelectedStoreIds"
                      data-role="multiselect"
                      aria-disabled="false"
                      style={{ display: "none" }}
                    >
                      <option value={1}>Your store name</option>
                      <option value={2}>Test store 2</option>
                    </select>
                    <span
                      style={{
                        fontFamily:
                          '"source sans pro", -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, "helvetica neue", Arial, sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol"',
                        fontSize: "16px",
                        fontStretch: "100%",
                        fontStyle: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        textTransform: "none",
                        lineHeight: "26.4px",
                        position: "absolute",
                        visibility: "hidden",
                        top: "-3333px",
                        left: "-3333px",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="callout bg-gray-light no-margin">
                    In order to use this functionality, you have to disable the
                    following setting: Catalog settings &gt; Ignore limit per
                    store rules.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="VendorId">
                  Vendor
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Choose a vendor associated with this product. This can be useful when running a multi-vendor store to keep track of goods associated with vendor."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <select
                className="form-control"
                data-val={true}
                data-val-required="The Vendor field is required."
                id="VendorId"
                name="VendorId"
              >
                <option selected={true} value={0}>
                  No vendor
                </option>
                <option value={1}>Vendor 1</option>
                <option value={2}>Vendor 2</option>
              </select>
              <span
                className="field-validation-valid"
                data-valmsg-for="VendorId"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div
            className="form-group row advanced-setting parent-setting parent-setting-advanced"
            id="group-required-other-products"
          >
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="RequireOtherProducts"
                >
                  Require other products
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check if the product requires adding other products to the cart."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="check-box"
                data-val={true}
                data-val-required="The Require other products field is required."
                id="RequireOtherProducts"
                name="RequireOtherProducts"
                type="checkbox"
                defaultValue="defaultValue"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="RequireOtherProducts"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div className="nested-setting d-none" id="nestedSetting1999698107">
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="RequiredProductIds"
                  >
                    Required product IDs
                  </label>
                  <div
                    // title
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Specify comma separated list of required product IDs. NOTE: Ensure that there are no circular references (for example, A requires B, and B requires A)."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
                <span
                  id="required-products-check-progress"
                  style={{ display: "none", float: "right", clear: "both" }}
                  className="please-wait"
                >
                  Wait...
                </span>
              </div>
              <div className="col-md-9">
                <div className="input-group">
                  <input
                    className="form-control text-box single-line"
                    data-val={true}
                    data-val-length="'Required Product Ids' must be between 0 and 1000 characters."
                    data-val-length-max={1000}
                    data-val-length-min={0}
                    id="RequiredProductIds"
                    name="RequiredProductIds"
                    type="text"
                    // defaultValue
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      id="btnRefreshRequiredProducts"
                      style={{ display: "none" }}
                    />
                    <button
                      type="submit"
                      id="btnAddNewRequiredProduct"
                      // onClick={"javascript:OpenWindow('/Admin/Product/RequiredProductAddPopup?btnId=btnRefreshRequiredProducts&productIdsInput=RequiredProductIds', 800, 850, true); return false;"}
                      className="btn btn-info"
                    >
                      Add required product
                    </button>
                  </div>
                </div>
                <span id="required-product-names" />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="RequiredProductIds"
                  data-valmsg-replace={true}
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="AutomaticallyAddRequiredProducts"
                  >
                    Automatically add these products to the cart
                  </label>
                  <div
                    // title
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Check to automatically add these products to the cart."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <input
                  className="check-box"
                  data-val={true}
                  data-val-required="The Automatically add these products to the cart field is required."
                  id="AutomaticallyAddRequiredProducts"
                  name="AutomaticallyAddRequiredProducts"
                  type="checkbox"
                  defaultValue="defaultValue"
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="AutomaticallyAddRequiredProducts"
                  data-valmsg-replace={true}
                />
              </div>
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="AllowCustomerReviews"
                >
                  Allow customer reviews
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check to allow customers to review this product."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                defaultChecked={true}
                className="check-box"
                data-val={true}
                data-val-required="The Allow customer reviews field is required."
                id="AllowCustomerReviews"
                name="AllowCustomerReviews"
                type="checkbox"
                defaultValue="defaultValue"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="AllowCustomerReviews"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="AvailableStartDateTimeUtc"
                >
                  Available start date
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="The start of the product's availability in Coordinated Universal Time (UTC)."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <span className="k-widget k-datetimepicker" style={{}}>
                <span className="k-picker-wrap k-state-default">
                  <input
                    id="AvailableStartDateTimeUtc"
                    name="AvailableStartDateTimeUtc"
                    data-role="datetimepicker"
                    type="text"
                    className="k-input"
                    role="combobox"
                    aria-expanded="false"
                    autoComplete="off"
                    style={{ width: "100%" }}
                  />
                  <span unselectable="on" className="k-select">
                    <span
                      className="k-link k-link-date"
                      aria-label="Open the date view"
                      aria-controls="AvailableStartDateTimeUtc_dateview"
                    >
                      <span unselectable="on" className="k-icon k-i-calendar" />
                    </span>
                    <span
                      className="k-link k-link-time"
                      aria-label="Open the time view"
                      aria-controls="AvailableStartDateTimeUtc_timeview"
                    >
                      <span unselectable="on" className="k-icon k-i-clock" />
                    </span>
                  </span>
                </span>
              </span>
              <span
                className="field-validation-valid"
                data-valmsg-for="AvailableStartDateTimeUtc"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="AvailableEndDateTimeUtc"
                >
                  Available end date
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="The end of the product's availability in Coordinated Universal Time (UTC)."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <span className="k-widget k-datetimepicker" style={{}}>
                <span className="k-picker-wrap k-state-default">
                  <input
                    id="AvailableEndDateTimeUtc"
                    name="AvailableEndDateTimeUtc"
                    data-role="datetimepicker"
                    type="text"
                    className="k-input"
                    role="combobox"
                    aria-expanded="false"
                    autoComplete="off"
                    style={{ width: "100%" }}
                  />
                  <span unselectable="on" className="k-select">
                    <span
                      className="k-link k-link-date"
                      aria-label="Open the date view"
                      aria-controls="AvailableEndDateTimeUtc_dateview"
                    >
                      <span unselectable="on" className="k-icon k-i-calendar" />
                    </span>
                    <span
                      className="k-link k-link-time"
                      aria-label="Open the time view"
                      aria-controls="AvailableEndDateTimeUtc_timeview"
                    >
                      <span unselectable="on" className="k-icon k-i-clock" />
                    </span>
                  </span>
                </span>
              </span>
              <span
                className="field-validation-valid"
                data-valmsg-for="AvailableEndDateTimeUtc"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div
            className="form-group row advanced-setting parent-setting parent-setting-advanced opened"
            id="parentSetting1818911678"
          >
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="MarkAsNew">
                  Mark as new
                </label>
                <div
                  // title
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check to mark the product as new. Use this option for promoting new products."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                defaultChecked={true}
                className="check-box"
                data-val={true}
                data-val-required="The Mark as new field is required."
                id="MarkAsNew"
                name="MarkAsNew"
                type="checkbox"
                defaultValue="defaultValue"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="MarkAsNew"
                data-valmsg-replace={true}
              />
            </div>
          </div>
          <div className="nested-setting" id="nestedSetting1818911678">
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="MarkAsNewStartDateTimeUtc"
                  >
                    Mark as new. Start date
                  </label>
                  <div
                    // title
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Set Product as New from Date in Coordinated Universal Time (UTC)."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <span className="k-widget k-datetimepicker" style={{}}>
                  <span className="k-picker-wrap k-state-default">
                    <input
                      id="MarkAsNewStartDateTimeUtc"
                      name="MarkAsNewStartDateTimeUtc"
                      data-role="datetimepicker"
                      type="text"
                      className="k-input"
                      role="combobox"
                      aria-expanded="false"
                      autoComplete="off"
                      style={{ width: "100%" }}
                    />
                    <span unselectable="on" className="k-select">
                      <span
                        className="k-link k-link-date"
                        aria-label="Open the date view"
                        aria-controls="MarkAsNewStartDateTimeUtc_dateview"
                      >
                        <span
                          unselectable="on"
                          className="k-icon k-i-calendar"
                        />
                      </span>
                      <span
                        className="k-link k-link-time"
                        aria-label="Open the time view"
                        aria-controls="MarkAsNewStartDateTimeUtc_timeview"
                      >
                        <span unselectable="on" className="k-icon k-i-clock" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="MarkAsNewStartDateTimeUtc"
                  data-valmsg-replace={true}
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="MarkAsNewEndDateTimeUtc"
                  >
                    Mark as new. End date
                  </label>
                  <div
                    // title
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Set Product as New to Date in Coordinated Universal Time (UTC)."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <span className="k-widget k-datetimepicker" style={{}}>
                  <span className="k-picker-wrap k-state-default">
                    <input
                      id="MarkAsNewEndDateTimeUtc"
                      name="MarkAsNewEndDateTimeUtc"
                      data-role="datetimepicker"
                      type="text"
                      className="k-input"
                      role="combobox"
                      aria-expanded="false"
                      autoComplete="off"
                      style={{ width: "100%" }}
                    />
                    <span unselectable="on" className="k-select">
                      <span
                        className="k-link k-link-date"
                        aria-label="Open the date view"
                        aria-controls="MarkAsNewEndDateTimeUtc_dateview"
                      >
                        <span
                          unselectable="on"
                          className="k-icon k-i-calendar"
                        />
                      </span>
                      <span
                        className="k-link k-link-time"
                        aria-label="Open the time view"
                        aria-controls="MarkAsNewEndDateTimeUtc_timeview"
                      >
                        <span unselectable="on" className="k-icon k-i-clock" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="MarkAsNewEndDateTimeUtc"
                  data-valmsg-replace={true}
                />
              </div>
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="AdminComment">
                  Admin comment
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="This comment is for internal use only, not visible for customers."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <textarea
                className="form-control"
                rows={4}
                cols={20}
                data-val={true}
                data-val-length="'Admin Comment' must be between 0 and 2147483647 characters."
                data-val-length-max={2147483647}
                data-val-length-min={0}
                id="AdminComment"
                name="AdminComment"
                defaultValue={""}
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="AdminComment"
                data-valmsg-replace={true}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoForm;
