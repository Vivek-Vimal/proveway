import React from "react";
import "../bundleAndSaveMaster.css";

const Card = (props) => {
  return (
    <section className="Pancard">
      <div className="flex spaceBetween">
        <div className="flex">
          <input type="radio" className="radioBtn" />
          <div style={{ margin: "0 0 0 16px" }}>
            <p className="pairText">{props?.pair}</p>
            <p className="amountText">{props?.amount}</p>
          </div>
        </div>
        <p className="amountText">
          {props?.discount}
          <span
            style={{ fontFamily: "MetropolisRegular", margin: "0 0 0 4px" }}
          >
            OFF
          </span>
        </p>
      </div>
    </section>
  );
};

export default Card;
