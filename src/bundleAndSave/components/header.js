import React from "react";
import { Line } from "../../components/Line";
import "../bundleAndSaveMaster.css";

const Header = () => {
  return (
    <section className="flex spaceBetween marginBottom">
      <Line />
      <p className="header">Bundle & Save</p>
      <Line />
    </section>
  );
};

export default Header;
