import React from "react";
import "../bundleAndSaveMaster.css";

const Card = (props) => {
  const { setCurrentItem } = props;
  const onRadioClick = (status) => {
    let currentVal = status.target.value;
    setCurrentItem(currentVal);
  };

  return (
    <section className="card">
      <div className="flex spaceBetween">
        <div className="flex">
          <input
            type="radio"
            className="radioBtn"
            onClick={onRadioClick}
            value={props?.id}
            name="foo"
          />
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
