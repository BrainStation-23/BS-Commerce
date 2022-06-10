const ShippingForm = () => {
  return (
    <>
      <div
        className="card card-secondary card-outline"
        data-card-name="product-shipping"
        data-hideattribute="ProductPage.HideShippingBlock"
        id="product-shipping"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title">
            <i className="fas fa-truck" />
            Shipping
          </div>
          <div className="card-tools float-right">
            <button
              className="btn btn-tool"
              data-card-widget="collapse"
              type="button"
            >
              <i className="fa toggle-icon fa-minus" />
            </button>
          </div>
        </div>
        <div className="card-body">
          <div id="product-shipping-area">
            <div
              className="form-group row parent-setting opened"
              id="parentSetting1838020795"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="IsShipEnabled">
                    Shipping enabled
                  </label>
                  <div
                    // title
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Check if the product can be shipped. You can manage shipping settings by selecting Configuration > Shipping."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <input
                  defaultChecked={true}
                  className="check-box"
                  data-val="true"
                  data-val-required="The Shipping enabled field is required."
                  id="IsShipEnabled"
                  name="IsShipEnabled"
                  type="checkbox"
                  defaultValue="true"
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="IsShipEnabled"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="nested-setting" id="nestedSetting1838020795">
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="Weight">
                      Weight
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="The product weight."
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
                        title="2.0000 lb(s)"
                        tabIndex={0}
                        role="spinbutton"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                        autoComplete="off"
                        aria-valuenow={2}
                        aria-disabled="false"
                        style={{}}
                      />
                      <input
                        type="text"
                        data-val="true"
                        data-val-number="The field Weight must be a number."
                        data-val-required="The Weight field is required."
                        id="Weight"
                        name="Weight"
                        defaultValue={2.0}
                        data-role="numerictextbox"
                        role="spinbutton"
                        className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                        aria-valuenow={2}
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
                    data-valmsg-for="Weight"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="Length">
                      Length
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="The product length."
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
                        title="2.0000 inch(es)"
                        tabIndex={0}
                        role="spinbutton"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                        autoComplete="off"
                        aria-valuenow={2}
                        aria-disabled="false"
                        style={{}}
                      />
                      <input
                        type="text"
                        data-val="true"
                        data-val-number="The field Length must be a number."
                        data-val-required="The Length field is required."
                        id="Length"
                        name="Length"
                        defaultValue={2.0}
                        data-role="numerictextbox"
                        role="spinbutton"
                        className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                        aria-valuenow={2}
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
                    data-valmsg-for="Length"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="Width">
                      Width
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="The product width."
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
                        title="2.0000 inch(es)"
                        tabIndex={0}
                        role="spinbutton"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                        autoComplete="off"
                        aria-valuenow={2}
                        aria-disabled="false"
                        style={{}}
                      />
                      <input
                        type="text"
                        data-val="true"
                        data-val-number="The field Width must be a number."
                        data-val-required="The Width field is required."
                        id="Width"
                        name="Width"
                        defaultValue={2.0}
                        data-role="numerictextbox"
                        role="spinbutton"
                        className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                        aria-valuenow={2}
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
                    data-valmsg-for="Width"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="Height">
                      Height
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="The product height."
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
                        title="2.0000 inch(es)"
                        tabIndex={0}
                        role="spinbutton"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                        autoComplete="off"
                        aria-valuenow={2}
                        aria-disabled="false"
                        style={{}}
                      />
                      <input
                        type="text"
                        data-val="true"
                        data-val-number="The field Height must be a number."
                        data-val-required="The Height field is required."
                        id="Height"
                        name="Height"
                        defaultValue={2.0}
                        data-role="numerictextbox"
                        role="spinbutton"
                        className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                        aria-valuenow={2}
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
                    data-valmsg-for="Height"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row advanced-setting">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="IsFreeShipping">
                      Free shipping
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Check if this product comes with FREE shipping."
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <input
                    defaultChecked={true}
                    className="check-box"
                    data-val="true"
                    data-val-required="The Free shipping field is required."
                    id="IsFreeShipping"
                    name="IsFreeShipping"
                    type="checkbox"
                    defaultValue="true"
                  />
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="IsFreeShipping"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row advanced-setting">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="ShipSeparately">
                      Ship separately
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Check if the product should be shipped separately from other products (in single box). But notice that if the order includes several items of this product, all of them will be shipped in single box."
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <input
                    className="check-box"
                    data-val="true"
                    data-val-required="The Ship separately field is required."
                    id="ShipSeparately"
                    name="ShipSeparately"
                    type="checkbox"
                    defaultValue="true"
                  />
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="ShipSeparately"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row advanced-setting">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="AdditionalShippingCharge"
                    >
                      Additional shipping charge
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="The additional shipping charge."
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
                        title="0.0000 USD"
                        tabIndex={0}
                        role="spinbutton"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                        autoComplete="off"
                        aria-valuenow={0}
                        aria-disabled="false"
                        style={{}}
                      />
                      <input
                        type="text"
                        data-val="true"
                        data-val-number="The field Additional shipping charge must be a number."
                        data-val-required="The Additional shipping charge field is required."
                        id="AdditionalShippingCharge"
                        name="AdditionalShippingCharge"
                        defaultValue={0.0}
                        data-role="numerictextbox"
                        role="spinbutton"
                        className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
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
                    data-valmsg-for="AdditionalShippingCharge"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row advanced-setting">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="DeliveryDateId">
                      Delivery date
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Choose a delivery date which will be displayed in the public store. You can manage delivery dates by selecting Configuration > Shipping > Dates and ranges."
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <select
                    className="form-control"
                    data-val="true"
                    data-val-required="The Delivery date field is required."
                    id="DeliveryDateId"
                    name="DeliveryDateId"
                  >
                    <option selected={true} value={0}>
                      None
                    </option>
                    <option value={1}>1-2 days</option>
                    <option value={2}>3-5 days</option>
                    <option value={3}>1 week</option>
                  </select>
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="DeliveryDateId"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingForm;
