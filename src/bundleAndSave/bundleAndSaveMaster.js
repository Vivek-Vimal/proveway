import React, { useState } from "react";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import DetailedCard from "./components/detailedCard";
import { data } from "../data";

const BundleAndSave = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const cardProps = {
    setCurrentItem,
  };

  return (
    <section className="flex bundleAndSave">
      <Header />
      {data?.map((item) =>
        currentItem == item?.id ? (
          <DetailedCard
            pair={item?.pair}
            discount={item?.discount}
            amount={item?.amount}
            id={item?.id}
            higherAmount={item?.higherAmount}
          />
        ) : (
          <Card
            pair={item?.pair}
            discount={item?.discount}
            amount={item?.amount}
            id={item?.id}
            {...cardProps}
          />
        )
      )}
      <Footer />
    </section>
  );
};

export default BundleAndSave;
