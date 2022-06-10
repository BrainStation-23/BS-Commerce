const InventoryForm = () => {
  return (
    <>
      <div
        className="card card-secondary card-outline"
        data-card-name="product-inventory"
        data-hideattribute="ProductPage.HideInventoryBlock"
        id="product-inventory"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title">
            <i className="fas fa-sitemap" />
            Inventory
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
          <div id="product-inventory-area">
            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="ManageInventoryMethodId"
                  >
                    Inventory method
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Select inventory method. There are three methods: Don’t track inventory, Track inventory and Track inventory by attributes. You should use Track inventory by attributes when the product has different combinations of these attributes and then manage inventory for these combinations."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  data-val="true"
                  data-val-required="The Inventory method field is required."
                  id="ManageInventoryMethodId"
                  name="ManageInventoryMethodId"
                >
                  <option value={0}>Don`&apos;`t track inventory</option>
                  <option selected={true} value={1}>
                    Track inventory
                  </option>
                  <option value={2}>
                    Track inventory by product attributes
                  </option>
                </select>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="ManageInventoryMethodId"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row" id="pnlStockQuantity">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="StockQuantity">
                    Stock quantity
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="The current stock quantity of this product."
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
                      title={"10000"}
                      tabIndex={0}
                      role="spinbutton"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      autoComplete="off"
                      aria-valuenow={10000}
                      aria-disabled="false"
                      style={{}}
                    />
                    <input
                      type="text"
                      data-val="true"
                      data-val-required="The Stock quantity field is required."
                      id="StockQuantity"
                      name="StockQuantity"
                      defaultValue={10000}
                      data-role="numerictextbox"
                      role="spinbutton"
                      className="k-input"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      aria-valuenow={10000}
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
                <input
                  type="hidden"
                  data-val="true"
                  data-val-required="The LastStockQuantity field is required."
                  id="LastStockQuantity"
                  name="LastStockQuantity"
                  defaultValue={10000}
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="StockQuantity"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting" id="pnlWarehouse">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="WarehouseId">
                    Warehouse
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Choose the warehouse which will be used when calculating shipping rates. You can manage warehouses by selecting Configuration > Shipping > Warehouses."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  data-val="true"
                  data-val-required="The Warehouse field is required."
                  id="WarehouseId"
                  name="WarehouseId"
                >
                  <option selected={true} value={0}>
                    None
                  </option>
                  <option value={1}>Warehouse 1 (New York)</option>
                  <option value={2}>Warehouse 2 (Los Angeles)</option>
                </select>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="WarehouseId"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div
              className="form-group row advanced-setting"
              id="pnlUseMultipleWarehouses"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="UseMultipleWarehouses"
                  >
                    Multiple warehouses
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Check if you want to support shipping and inventory management from multiple warehouses."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <input
                  className="check-box"
                  data-val="true"
                  data-val-required="The Multiple warehouses field is required."
                  id="UseMultipleWarehouses"
                  name="UseMultipleWarehouses"
                  type="checkbox"
                  defaultValue="true"
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="UseMultipleWarehouses"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div
              className="form-group row advanced-setting d-none"
              id="pnlMultipleWarehouses"
            >
              <div className="col-md-12" style={{ overflowX: "auto" }}>
                <table className="table table-hover table-bordered text-center">
                  <thead>
                    <tr>
                      <th>Warehouse</th>
                      <th>Use</th>
                      <th>Stock qty</th>
                      <th>Reserved qty</th>
                      <th>Planned qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: "36%" }}>
                        <div
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        >
                          Warehouse 1 (New York)
                        </div>
                      </td>
                      <td style={{ width: "10%" }}>
                        <input
                          type="checkbox"
                          id="warehouse_used_1"
                          name="warehouse_used_1"
                          defaultValue={1}
                        />
                      </td>
                      <td style={{ width: "18%" }}>
                        <input
                          id="warehouse_qty_1"
                          name="warehouse_qty_1"
                          type="number"
                          defaultValue={0}
                          className="form-control"
                          disabled
                        />
                      </td>
                      <td style={{ width: "18%" }}>
                        <input
                          id="warehouse_reserved_1"
                          name="warehouse_reserved_1"
                          type="number"
                          defaultValue={0}
                          className="form-control"
                          disabled
                        />
                      </td>
                      <td style={{ width: "18%" }}>0</td>
                    </tr>
                    <tr>
                      <td style={{ width: "36%" }}>
                        <div
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        >
                          Warehouse 2 (Los Angeles)
                        </div>
                      </td>
                      <td style={{ width: "10%" }}>
                        <input
                          type="checkbox"
                          id="warehouse_used_2"
                          name="warehouse_used_2"
                          defaultValue={2}
                        />
                      </td>
                      <td style={{ width: "18%" }}>
                        <input
                          id="warehouse_qty_2"
                          name="warehouse_qty_2"
                          type="number"
                          defaultValue={0}
                          className="form-control"
                          disabled
                        />
                      </td>
                      <td style={{ width: "18%" }}>
                        <input
                          id="warehouse_reserved_2"
                          name="warehouse_reserved_2"
                          type="number"
                          defaultValue={0}
                          className="form-control"
                          disabled
                        />
                      </td>
                      <td style={{ width: "18%" }}>0</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <em>
                    `&ldquo;`Stock quantity`&ldquo;` is total quantity. It`&apos;`s reduced from when a
                    shipment is shipped.
                  </em>
                </p>
                <p>
                  <em>
                    `&ldquo;`Reserved qty`&ldquo;` is product quantity that is ordered but not
                    shipped yet.
                  </em>
                </p>
                <p>
                  <em>
                    `&ldquo;`Planned qty`&ldquo;` is product quantity that is ordered and
                    already added to a shipment but not shipped yet.
                  </em>
                </p>
              </div>
            </div>
            <div
              className="form-group row advanced-setting parent-setting parent-setting-advanced opened"
              id="pnlDisplayStockAvailability"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="DisplayStockAvailability"
                  >
                    Display availability
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Check to display stock availability. When enabled, customers will see stock availability."
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
                  data-val-required="The Display availability field is required."
                  id="DisplayStockAvailability"
                  name="DisplayStockAvailability"
                  type="checkbox"
                  defaultValue="true"
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="DisplayStockAvailability"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="nested-setting" id="nestedSetting608452278">
              <div
                className="form-group row advanced-setting"
                id="pnlDisplayStockQuantity"
              >
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="DisplayStockQuantity"
                    >
                      Display stock quantity
                    </label>
                    <div
                        data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Check to display stock quantity. When enabled, customers will see stock quantity."
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <input
                    className="check-box"
                    data-val="true"
                    data-val-required="The Display stock quantity field is required."
                    id="DisplayStockQuantity"
                    name="DisplayStockQuantity"
                    type="checkbox"
                    defaultValue="true"
                  />
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="DisplayStockQuantity"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
            </div>
            <div
              className="form-group row advanced-setting"
              id="pnlMinStockQuantity"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="MinStockQuantity">
                    Minimum stock qty
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="If you have enabled 'Manage Stock' you can perform a number of different actions when the current stock quantity falls below (reaches) your minimum stock quantity."
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
                      title={"0"}
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
                      data-val="true"
                      data-val-required="The Minimum stock qty field is required."
                      id="MinStockQuantity"
                      name="MinStockQuantity"
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
                  data-valmsg-for="MinStockQuantity"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div
              className="form-group row advanced-setting"
              id="pnlLowStockActivity"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="LowStockActivityId"
                  >
                    Low stock activity
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Action to be taken when your current stock quantity falls below (reaches) the 'Minimum stock quantity'. Activation of the action will occur only after an order is placed."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  data-val="true"
                  data-val-required="The Low stock activity field is required."
                  id="LowStockActivityId"
                  name="LowStockActivityId"
                >
                  <option value={0}>Nothing</option>
                  <option selected={true} value={1}>
                    Disable buy button
                  </option>
                  <option value={2}>Unpublish</option>
                </select>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="LowStockActivityId"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div
              className="form-group row advanced-setting"
              id="pnlNotifyForQuantityBelow"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="NotifyAdminForQuantityBelow"
                  >
                    Notify for qty below
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="When the current stock quantity falls below (reaches) this quantity, a store owner will receive a notification."
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
                      title={"1"}
                      tabIndex={0}
                      role="spinbutton"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      autoComplete="off"
                      aria-valuenow={1}
                      aria-disabled="false"
                      style={{}}
                    />
                    <input
                      type="text"
                      data-val="true"
                      data-val-required="The Notify for qty below field is required."
                      id="NotifyAdminForQuantityBelow"
                      name="NotifyAdminForQuantityBelow"
                      defaultValue={1}
                      data-role="numerictextbox"
                      role="spinbutton"
                      className="k-input"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      aria-valuenow={1}
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
                  data-valmsg-for="NotifyAdminForQuantityBelow"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting" id="pnlBackorders">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="BackorderModeId">
                    Backorders
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Select backorder mode."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  data-val="true"
                  data-val-required="The Backorders field is required."
                  id="BackorderModeId"
                  name="BackorderModeId"
                >
                  <option selected={true} value={0}>
                    No backorders
                  </option>
                  <option value={1}>Allow qty below 0</option>
                  <option value={2}>
                    Allow qty below 0 and notify customer
                  </option>
                </select>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="BackorderModeId"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div
              className="form-group row advanced-setting"
              id="pnlAllowBackInStockSubscriptions"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="AllowBackInStockSubscriptions"
                  >
                    Allow back in stock subscriptions
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Allow customers to subscribe to a notification list for a product that has gone out of stock."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <input
                  className="check-box"
                  data-val="true"
                  data-val-required="The Allow back in stock subscriptions field is required."
                  id="AllowBackInStockSubscriptions"
                  name="AllowBackInStockSubscriptions"
                  type="checkbox"
                  defaultValue="true"
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="AllowBackInStockSubscriptions"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div
              className="form-group row advanced-setting"
              id="pnlProductAvailabilityRange"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="ProductAvailabilityRangeId"
                  >
                    Product availability range
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Choose the product availability range that indicates when the product is expected to be available when out of stock (e.g. Available in 10-14 days). You can manage availability ranges by selecting Configuration > Shipping > Dates and ranges."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  data-val="true"
                  data-val-required="The Product availability range field is required."
                  id="ProductAvailabilityRangeId"
                  name="ProductAvailabilityRangeId"
                >
                  <option selected={true} value={0}>
                    None
                  </option>
                  <option value={1}>2-4 days</option>
                  <option value={2}>7-10 days</option>
                  <option value={3}>2 week</option>
                </select>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="ProductAvailabilityRangeId"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="OrderMinimumQuantity"
                  >
                    Minimum cart qty
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Set the minimum quantity allowed in a customer's shopping cart e.g. set to 3 to only allow customers to purchase 3 or more of this product."
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
                      title={"1"}
                      tabIndex={0}
                      role="spinbutton"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      autoComplete="off"
                      aria-valuenow={1}
                      aria-disabled="false"
                      style={{}}
                    />
                    <input
                      type="text"
                      data-val="true"
                      data-val-required="The Minimum cart qty field is required."
                      id="OrderMinimumQuantity"
                      name="OrderMinimumQuantity"
                      defaultValue={1}
                      data-role="numerictextbox"
                      role="spinbutton"
                      className="k-input"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      aria-valuenow={1}
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
                  data-valmsg-for="OrderMinimumQuantity"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="OrderMaximumQuantity"
                  >
                    Maximum cart qty
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Set the maximum quantity allowed in a customer's shopping cart e.g. set to 5 to only allow customers to purchase 5 of this product."
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
                      title={"10000"}
                      tabIndex={0}
                      role="spinbutton"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      autoComplete="off"
                      aria-valuenow={10000}
                      aria-disabled="false"
                      style={{}}
                    />
                    <input
                      type="text"
                      data-val="true"
                      data-val-required="The Maximum cart qty field is required."
                      id="OrderMaximumQuantity"
                      name="OrderMaximumQuantity"
                      defaultValue={10000}
                      data-role="numerictextbox"
                      role="spinbutton"
                      className="k-input"
                      aria-valuemin={-2147483648}
                      aria-valuemax={2147483647}
                      aria-valuenow={10000}
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
                  data-valmsg-for="OrderMaximumQuantity"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="AllowedQuantities">
                    Allowed quantities
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Enter a comma separated list of quantities you want this product to be restricted to. Instead of a quantity textbox that allows them to enter any quantity, they will receive a dropdown list of the values you enter here."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <input
                  className="form-control text-box single-line"
                  data-val="true"
                  data-val-length="'Allowed Quantities' must be between 0 and 1000 characters."
                  data-val-length-max={1000}
                  data-val-length-min={0}
                  id="AllowedQuantities"
                  name="AllowedQuantities"
                  type="text"
                  // defaultValue
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="AllowedQuantities"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div
              className="form-group row advanced-setting d-none"
              id="pnlAllowAddingOnlyExistingAttributeCombinations"
            >
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label
                    className="col-form-label"
                    htmlFor="AllowAddingOnlyExistingAttributeCombinations"
                  >
                    Allow only existing attribute combinations
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Check to allow adding to the cart/wishlist only attribute combinations that exist and have stock greater than zero. In this case you have to create all existing product attribute combinations that you have in stock."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <input
                  className="check-box"
                  data-val="true"
                  data-val-required="The Allow only existing attribute combinations field is required."
                  id="AllowAddingOnlyExistingAttributeCombinations"
                  name="AllowAddingOnlyExistingAttributeCombinations"
                  type="checkbox"
                  defaultValue="true"
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="AllowAddingOnlyExistingAttributeCombinations"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper">
                  <label className="col-form-label" htmlFor="NotReturnable">
                    Not returnable
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="ico-help"
                    data-original-title="Check if this product is not returnable. In this case a customer won't be allowed to submit return request."
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <input
                  className="check-box"
                  data-val="true"
                  data-val-required="The Not returnable field is required."
                  id="NotReturnable"
                  name="NotReturnable"
                  type="checkbox"
                  defaultValue="true"
                />
                <span
                  className="field-validation-valid"
                  data-valmsg-for="NotReturnable"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryForm;
