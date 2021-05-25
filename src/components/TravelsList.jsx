import React from "react";
import TravelsItem from "./TravelsItem";

function TravelsList(props) {
  const { travels } = props;
  return (
    <div className="container">
      <div className="row">
        {travels
          ? travels.map((travel, index) => {
              return (
                <TravelsItem
                  image={travel.image}
                  flight={travel.flight}
                  company={travel.company}
                  price={travel.price}
                  currency={travel.currency}
                  time={travel.time}
                  hotels={travel.hotels}
                  imageHotels={travel.imageHotels}
                  key={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default TravelsList;
