import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardData from "../card.json";

export default function MainSection() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(cardData);
  }, []);

  return (
    <>
      <div>
        <h2 className="main-heading">EPOCH STAKING</h2>
        <div className="container">
          <div className="row">
            {card.map((data, key) => {
              return <Card key={key} title={data.title} value={data.value} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
