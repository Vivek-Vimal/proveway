import React from "react";
import "../bundleAndSaveMaster.css";

const DetailedCard = (props) => {
  return (
    <section className="Detailedcard">
      <div className="flex spaceBetween end">
        <div className="flex auto">
          <input type="radio" checked className="radioBtn"/>
          <div style={{ margin: "0 0 0 16px" }}>
            <p className="pairText">{props?.pair}</p>
            <p className="amountText">{props?.amount}</p>
          </div>
        </div>
        <p className="crossText">
          <del>{props?.higherAmount}</del>
        </p>

        <div>
          <p className="mostPopular">Most Popular</p>
          <p className="amountText" style={{ textAlign: "right" }}>
            {props?.discount}
            <span
              style={{ fontFamily: "MetropolisRegular", margin: "0 0 0 4px" }}
            >
              OFF
            </span>
          </p>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="tableHeadText">
            <th></th>
            <th>Size</th>
            <th>Colour</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="number">#1</td>
            <td>
              <select className="select">
                <option selected="selected" className="dropdownText">
                  S
                </option>
              </select>
            </td>
            <td>
              <select className="select">
                <option selected="selected" className="dropdownText">
                  Colour
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="number">#2</td>
            <td>
              <select className="select">
                <option selected="selected" className="dropdownText">
                  S
                </option>
              </select>
            </td>
            <td>
              <select className="select">
                <option selected="selected" className="dropdownText">
                  Colour
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default DetailedCard;
