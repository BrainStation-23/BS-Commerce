import type { NextComponentType } from "next";
import card from "./styles/widgets.module.css";
const StatWidgets: NextComponentType = () => {
  return (
    <>
      {/* <div className={card.widgets_card}>
          <div className={card.widgets_info}>
            <h3>
              <span className={card.widgets_currency}>$</span>
              <span className={card.widgets_count}>4200</span>
            </h3>
            <p>Revenue</p>
          </div>
          <div className={card.widgets_icon}>
            <h3>
              <span></span>
              <span></span>
            </h3>
          </div>
        </div> */}
      <div className={`row ${card.widget_container}`}>
        <div className={`col-lg-3 col-3 ${card.widgets_card}`}>
          <div className={`${card.small_box} ${card.bg_info}`}>
            <div className={card.inner}>
              <h3>5</h3>
              <p>Orders</p>
            </div>
            <div className={card.icon}>
              <i className={`bi bi-bag ${card.ion}`}></i>
            </div>
            <a className={card.small_box_footer} href="/">
              More info
              <i className="bi bi-arrow-right-circle"></i>
            </a>
          </div>
        </div>
        <div className="col-3">A</div>
        <div className="col-3">B</div>
      </div>
      {/* <div className={card.widgets_card}>
          <div className={card.widgets_info}>test</div>
        </div> */}
    </>
  );
};

export default StatWidgets;
