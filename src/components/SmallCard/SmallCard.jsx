import React from "react";
import "./SmallCard.css";
const cardData = [
  { heading: "Total Employees", data: "1562" },
  { heading: "Total WH", data: "625K" },
  { heading: "Total Managers", data: "26" },
  { heading: "Total Executive", data: "25" },
];
const SmallCard = () => {
  return (
    <div className="row">
      {cardData.map((data) => {
        return (
          <div className="col-md-3">
            <div  className="small-card mt-5">
              <div className="small_card">
                <h1 style={{ fontSize: "1.5rem" }}>{data.heading}</h1>
                <h1 style={{ fontSize: "2.25rem" }}>{data.data}</h1>
              </div>
              <div className="horizontal_line"></div>
            </div>
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export default SmallCard;
