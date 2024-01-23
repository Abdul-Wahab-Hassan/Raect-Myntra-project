import React from "react";
import Bag_summary from "../components/Bag_summary";
import Bagitem from "../components/Bagitem";


import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
      <div className="bag-items-container">
      {finalItems.map((item) => (
            <Bagitem item={item} />
          ))}</div>
        <Bag_summary />
      </div>
    </main>
  );
};

export default Bag;
