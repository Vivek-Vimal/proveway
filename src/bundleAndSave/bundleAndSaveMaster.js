import React from "react";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import DetailedCard from "./components/detailedCard";
import { data } from "../data";

const BundleAndSave = () => {
  return (
    <section className="flex bundleAndSave">
      <Header />
      {data?.map((item) =>
        item?.mostPopular ? (
          <DetailedCard
            pair={item?.pair}
            discount={item?.discount}
            amount={item?.amount}
          />
        ) : (
          <Card
            pair={item?.pair}
            discount={item?.discount}
            amount={item?.amount}
          />
        )
      )}
      <Footer />
    </section>
  );
};

export default BundleAndSave;
