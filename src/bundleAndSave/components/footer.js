import React from "react";
import "../bundleAndSaveMaster.css";
import { Button } from "../../components/Button";

const Footer = () => {
  return (
    <footer>
      <div className="flex spaceBetween margin">
        <p className="timeText">Free 2 Day Shipping</p>
        <p className="totalText">
          Total : <span className="totalAmount">DKK 360.00</span>
        </p>
      </div>
      <Button Text="+ Add to Cart" />
      <p className="powerText"> &#169; Powered by Pumper</p>
    </footer>
  );
};

export default Footer;
