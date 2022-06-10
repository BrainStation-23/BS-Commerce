const PricesForm = () => {
  return (
    <>
      <div
        className="card card-secondary card-outline"
        data-card-name="product-price"
        data-hideattribute="ProductPage.HidePricesBlock"
        id="product-price"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title">
            <i className="fas fa-dollar-sign" />
            Prices
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
          <div className="form-group row" id="product-price-area">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="Price">
                  Price
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="The price of the product. You can manage currency by selecting Configuration > Currencies."
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
                    title="1200.0000 USD"
                    tabIndex={0}
                    role="spinbutton"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                    autoComplete="off"
                    aria-valuenow={1200}
                    aria-disabled="false"
                    style={{}}
                  />
                  <input
                    type="text"
                    data-val="true"
                    data-val-number="The field Price must be a number."
                    data-val-required="The Price field is required."
                    id="Price"
                    name="Price"
                    defaultValue={1200.0}
                    data-role="numerictextbox"
                    role="spinbutton"
                    className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                    aria-valuenow={1200}
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
                data-valmsg-for="Price"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="OldPrice">
                  Old price
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="The old price of the product. If you set an old price, this will display alongside the current price on the product page to show the difference in price."
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
                    data-val-number="The field Old price must be a number."
                    data-val-required="The Old price field is required."
                    id="OldPrice"
                    name="OldPrice"
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
                data-valmsg-for="OldPrice"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="ProductCost">
                  Product cost
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Product cost is a prime product cost. This field is only for internal use, not visible for customers."
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
                    data-val-number="The field Product cost must be a number."
                    data-val-required="The Product cost field is required."
                    id="ProductCost"
                    name="ProductCost"
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
                data-valmsg-for="ProductCost"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="DisableBuyButton">
                  Disable buy button
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check to disable the buy button for this product. This may be necessary for products that are 'available upon request'."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="check-box"
                data-val="true"
                data-val-required="The Disable buy button field is required."
                id="DisableBuyButton"
                name="DisableBuyButton"
                type="checkbox"
                defaultValue="true"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="DisableBuyButton"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="DisableWishlistButton"
                >
                  Disable wishlist button
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check to disable the wishlist button for this product."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="check-box"
                data-val="true"
                data-val-required="The Disable wishlist button field is required."
                id="DisableWishlistButton"
                name="DisableWishlistButton"
                type="checkbox"
                defaultValue="true"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="DisableWishlistButton"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div
            className="form-group row advanced-setting parent-setting parent-setting-advanced"
            id="parentSetting1242546391"
          >
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="AvailableForPreOrder"
                >
                  Available for pre-order
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title='Check if this item is available for Pre-Order. It also displays "Pre-order" button instead of "Add to cart".'
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="check-box"
                data-val="true"
                data-val-required="The Available for pre-order field is required."
                id="AvailableForPreOrder"
                name="AvailableForPreOrder"
                type="checkbox"
                defaultValue="true"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="AvailableForPreOrder"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div className="nested-setting d-none" id="nestedSetting1242546391">
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="PreOrderAvailabilityStartDateTimeUtc"
                  >
                    Pre-order availability start date
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="The availability start date of the product configured for pre-order in Coordinated Universal Time (UTC). 'Pre-order' button will automatically be changed to 'Add to cart' at this moment."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <span className="k-widget k-datetimepicker" style={{}}>
                  <span className="k-picker-wrap k-state-default">
                    <input
                      id="PreOrderAvailabilityStartDateTimeUtc"
                      name="PreOrderAvailabilityStartDateTimeUtc"
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
                        aria-controls="PreOrderAvailabilityStartDateTimeUtc_dateview"
                      >
                        <span
                          unselectable="on"
                          className="k-icon k-i-calendar"
                        />
                      </span>
                      <span
                        className="k-link k-link-time"
                        aria-label="Open the time view"
                        aria-controls="PreOrderAvailabilityStartDateTimeUtc_timeview"
                      >
                        <span unselectable="on" className="k-icon k-i-clock" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="PreOrderAvailabilityStartDateTimeUtc"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="CallForPrice">
                  Call for price
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title='Check to show "Call for Pricing" or "Call for quote" instead of price.'
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="check-box"
                data-val="true"
                data-val-required="The Call for price field is required."
                id="CallForPrice"
                name="CallForPrice"
                type="checkbox"
                defaultValue="true"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="CallForPrice"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div
            className="form-group row advanced-setting parent-setting parent-setting-advanced"
            id="parentSetting1477894436"
          >
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="CustomerEntersPrice">
                  Customer enters price
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="An option indicating whether customer should enter price."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="check-box"
                data-val="true"
                data-val-required="The Customer enters price field is required."
                id="CustomerEntersPrice"
                name="CustomerEntersPrice"
                type="checkbox"
                defaultValue="true"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="CustomerEntersPrice"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div className="nested-setting d-none" id="nestedSetting1477894436">
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="MinimumCustomerEnteredPrice"
                  >
                    Minimum amount
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Enter a minimum amount."
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
                      data-val-number="The field Minimum amount must be a number."
                      data-val-required="The Minimum amount field is required."
                      id="MinimumCustomerEnteredPrice"
                      name="MinimumCustomerEnteredPrice"
                      defaultValue={0.0}
                      data-role="numerictextbox"
                      role="spinbutton"
                      style={{ display: "none" }}
                      className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                      aria-valuenow={0}
                      aria-disabled="false"
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
                  data-valmsg-for="MinimumCustomerEnteredPrice"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="MaximumCustomerEnteredPrice"
                  >
                    Maximum amount
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Enter a maximum amount."
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
                      data-val-number="The field Maximum amount must be a number."
                      data-val-required="The Maximum amount field is required."
                      id="MaximumCustomerEnteredPrice"
                      name="MaximumCustomerEnteredPrice"
                      defaultValue={0.0}
                      data-role="numerictextbox"
                      role="spinbutton"
                      style={{ display: "none" }}
                      className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                      aria-valuenow={0}
                      aria-disabled="false"
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
                  data-valmsg-for="MaximumCustomerEnteredPrice"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
          </div>
          <div
            className="form-group row advanced-setting parent-setting parent-setting-advanced"
            id="parentSetting1005035954"
          >
            <div className="col-md-3">
              <div className="label-wrapper">
                <label className="col-form-label" htmlFor="BasepriceEnabled">
                  PAngV (base price) enabled
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check to display baseprice of a product. This is required according to the German law (PAngV). If you sell 500ml of beer for 1,50 euro, then you have to display baseprice: 3.00 euro per 1L."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="check-box"
                data-val="true"
                data-val-required="The PAngV (base price) enabled field is required."
                id="BasepriceEnabled"
                name="BasepriceEnabled"
                type="checkbox"
                defaultValue="true"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="BasepriceEnabled"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div className="nested-setting d-none" id="nestedSetting1005035954">
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="BasepriceAmount">
                    Amount in product
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Enter an amount in product."
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
                      title={"0.0"}
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
                      data-val-number="The field Amount in product must be a number."
                      data-val-required="The Amount in product field is required."
                      id="BasepriceAmount"
                      name="BasepriceAmount"
                      defaultValue={0.0}
                      data-role="numerictextbox"
                      role="spinbutton"
                      style={{ display: "none" }}
                      className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                      aria-valuenow={0}
                      aria-disabled="false"
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
                  data-valmsg-for="BasepriceAmount"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="BasepriceUnitId">
                    Unit of product
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Enter a unit of product."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  data-val="true"
                  data-val-required="The Unit of product field is required."
                  id="BasepriceUnitId"
                  name="BasepriceUnitId"
                >
                  <option value={1}>ounce(s)</option>
                  <option value={2}>lb(s)</option>
                  <option value={3}>kg(s)</option>
                  <option value={4}>gram(s)</option>
                </select>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="BasepriceUnitId"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="BasepriceBaseAmount"
                  >
                    Reference amount
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Enter a reference amount."
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
                      title={"0.0"}
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
                      data-val-number="The field Reference amount must be a number."
                      data-val-required="The Reference amount field is required."
                      id="BasepriceBaseAmount"
                      name="BasepriceBaseAmount"
                      defaultValue={0.0}
                      data-role="numerictextbox"
                      role="spinbutton"
                      style={{ display: "none" }}
                      className="k-input"
                        aria-valuemin={-7.922816251426434e+28}
                        aria-valuemax={7.922816251426434e+28}
                      aria-valuenow={0}
                      aria-disabled="false"
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
                  data-valmsg-for="BasepriceBaseAmount"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="BasepriceBaseUnitId"
                  >
                    Reference unit
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Enter a reference unit."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  data-val="true"
                  data-val-required="The Reference unit field is required."
                  id="BasepriceBaseUnitId"
                  name="BasepriceBaseUnitId"
                >
                  <option value={1}>ounce(s)</option>
                  <option value={2}>lb(s)</option>
                  <option value={3}>kg(s)</option>
                  <option value={4}>gram(s)</option>
                </select>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="BasepriceBaseUnitId"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
          </div>
          <div className="form-group row advanced-setting">
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="SelectedDiscountIds"
                  id="SelectedDiscountIds_label"
                >
                  Discounts
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Select discounts to apply to this product. You can manage discounts by selecting Discounts from the Promotions menu."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div
                className="k-widget k-multiselect k-multiselect-clearable"
                unselectable="on"
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
                    id="SelectedDiscountIds_taglist"
                  />
                  <input
                    className="k-input k-readonly"
                    style={{ width: "25px" }}
                    // accessKey
                    autoComplete="off"
                    role="listbox"
                    aria-expanded="false"
                    // aria-haspopup="listbox"
                    // aria-autocomplete="list"
                    tabIndex={0}
                    aria-describedby="SelectedDiscountIds_taglist"
                    aria-labelledby="SelectedDiscountIds_label"
                    aria-disabled="false"
                    aria-busy="false"
                    aria-owns="SelectedDiscountIds_taglist SelectedDiscountIds_listbox"
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
                  id="SelectedDiscountIds"
                  multiple={true}
                  name="SelectedDiscountIds"
                  data-role="multiselect"
                  aria-disabled="false"
                  style={{ display: "none" }}
                >
                  <option value={1}>Sample discount with coupon code</option>
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
          <div id="product-tax-area">
            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="IsTaxExempt">
                    Tax exempt
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Determines whether this product is tax exempt (tax will not be applied to this product at checkout)."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <input
                  className="check-box"
                  data-val="true"
                  data-val-required="The Tax exempt field is required."
                  id="IsTaxExempt"
                  name="IsTaxExempt"
                  type="checkbox"
                  defaultValue="true"
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="IsTaxExempt"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row" id="pnlTaxCategory">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="TaxCategoryId">
                    Tax category
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="The tax classification for the product. You can manage tax categories by selecting Configuration > Tax > Tax Categories."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  data-val="true"
                  data-val-required="The Tax category field is required."
                  id="TaxCategoryId"
                  name="TaxCategoryId"
                >
                  <option value={0}>[None]</option>
                  <option value={1}>Books</option>
                  <option selected={true} value={2}>
                    Electronics &amp; Software
                  </option>
                  <option value={3}>Downloadable Products</option>
                  <option value={4}>Jewelry</option>
                  <option value={5}>Apparel</option>
                </select>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="TaxCategoryId"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
          </div>
          <div
            className="form-group row advanced-setting"
            id="pnlIsTelecommunicationsOrBroadcastingOrElectronicServices"
          >
            <div className="col-md-3">
              <div className="label-wrapper">
                <label
                  className="col-form-label"
                  htmlFor="IsTelecommunicationsOrBroadcastingOrElectronicServices"
                >
                  Telecommunications, broadcasting and electronic services
                </label>
                <div
                  data-toggle="tooltip"
                  className="ico-help"
                  data-original-title="Check if it's telecommunications, broadcasting and electronic services. It's used for tax calculation in Europe Union."
                >
                  <i className="fas fa-question-circle" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                className="check-box"
                data-val="true"
                data-val-required="The Telecommunications, broadcasting and electronic services field is required."
                id="IsTelecommunicationsOrBroadcastingOrElectronicServices"
                name="IsTelecommunicationsOrBroadcastingOrElectronicServices"
                type="checkbox"
                defaultValue="true"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="IsTelecommunicationsOrBroadcastingOrElectronicServices"
                data-valmsg-replace="true"
              />
            </div>
          </div>
          <div className="card card-default advanced-setting">
            <div className="card-header">Tier prices</div>
            <div className="card-body">
              <p>
                Tier pricing is a promotional tool that allows a store owner to
                price items differently for higher quantities.
              </p>
              <div
                id="tierprices-grid_wrapper"
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
                            width: "909px",
                            paddingRight: "0px",
                          }}
                        >
                          <table
                            className="table table-bordered table-hover table-striped dataTable no-footer"
                            width="100%"
                            role="grid"
                            style={{ marginLeft: "0px", width: "909px" }}
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "54.85px" }}
                                >
                                  Store
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "133.45px" }}
                                >
                                  Customer role
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "86.8px" }}
                                >
                                  Quantity
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "52.85px" }}
                                >
                                  Price
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "95.5px" }}
                                >
                                  Start date
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "85.55px" }}
                                >
                                  End date
                                </th>
                                <th
                                  className="sorting_disabled button-column"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "99.4125px" }}
                                >
                                  Edit
                                </th>
                                <th
                                  className="sorting_disabled button-column"
                                  rowSpan={1}
                                  colSpan={1}
                                  style={{ width: "99.5875px" }}
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
                          id="tierprices-grid"
                          role="grid"
                          aria-describedby="tierprices-grid_info"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr role="row" style={{ height: "0px" }}>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "54.85px",
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
                                  Store
                                </div>
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "133.45px",
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
                                  Customer role
                                </div>
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "86.8px",
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
                                  Quantity
                                </div>
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "52.85px",
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
                                  Price
                                </div>
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "95.5px",
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
                                  Start date
                                </div>
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "85.55px",
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
                                  End date
                                </div>
                              </th>
                              <th
                                className="sorting_disabled button-column"
                                rowSpan={1}
                                colSpan={1}
                                style={{
                                  width: "99.4125px",
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
                                  width: "99.5875px",
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
                                colSpan={8}
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
                        id="tierprices-grid_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="tierprices-grid_previous"
                          >
                            <a
                              href="#"
                              aria-controls="tierprices-grid"
                              data-dt-idx={0}
                              tabIndex={0}
                              className="page-link"
                            >
                              <i className="k-icon k-i-arrow-w" />
                            </a>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="tierprices-grid_next"
                          >
                            <a
                              href="#"
                              aria-controls="tierprices-grid"
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
                        id="tierprices-grid_length"
                      >
                        <label>
                          Show{" "}
                          <select
                            name="tierprices-grid_length"
                            aria-controls="tierprices-grid"
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
                        id="tierprices-grid_info"
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
                          aria-controls="tierprices-grid"
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
                id="tierprices-grid_deleteConflict-action-alert"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="tierprices-grid_deleteConflict-action-alert-title"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="tierprices-grid_deleteConflict-action-alert-title"
                      >
                        Information
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div
                        className="additional-text"
                        id="tierprices-grid_deleteConflict-info"
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
                  id="tierprices-grid_deleteConflict"
                  style={{ display: "none" }}
                  data-toggle="modal"
                  data-target="#tierprices-grid_deleteConflict-action-alert"
                />
              </div>
              <div
                id="tierprices-grid_deleteCommonFailed-action-alert"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="tierprices-grid_deleteCommonFailed-action-alert-title"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="tierprices-grid_deleteCommonFailed-action-alert-title"
                      >
                        Information
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div
                        className="additional-text"
                        id="tierprices-grid_deleteCommonFailed-info"
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
                  id="tierprices-grid_deleteCommonFailed"
                  style={{ display: "none" }}
                  data-toggle="modal"
                  data-target="#tierprices-grid_deleteCommonFailed-action-alert"
                />
              </div>
            </div>
            <div className="card-footer">
              <button
                type="submit"
                id="btnAddNewTierPrice"
                // onClick={
                //   "javascript:OpenWindow('/Admin/Product/TierPriceCreatePopup?productId=1&btnId=btnRefreshTierPrices&formId=product-form', 800, 600, true); return false;"
                // }
                className="btn btn-primary"
              >
                Add new tier price
              </button>
              <button
                type="submit"
                id="btnRefreshTierPrices"
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricesForm;
