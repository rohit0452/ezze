import React from "react";
import "./BigCard.css";

const BigCard = ({ data }) => {
  const redirectToBI = (urls) => {
    window.location.href = urls;
  };
  return (
    <div
      className="row"
      style={{
        marginTop: "2rem",
      }}
    >
      {data &&
        data.map((data) => {
          return (
            <div className="col-md-6">
              <div className="small-card text-center  mt-5">
                <div
                  className={`big_card ${data.class}`}
                  onClick={() => redirectToBI(data.url)}
                >
                  <div
                    className="row"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="col-md-12 ">
                      <h1 style={{ fontSize: "1.25rem", textAlign: "left" , textTransform : 'uppercase' }}>
                        {data.heading}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BigCard;
