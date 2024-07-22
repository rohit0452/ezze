import React from "react";
import SmallCard from "./SmallCard/SmallCard";
import BigCard from "./BigCard/BigCard";

const Department = () => {
  const data = [
    {
       class : 'bigcard1', heading : 'Attendance Dashboard' , url: "https://app.powerbi.com/view?r=eyJrIjoiZDNjYjU2MmItYjlmYy00NWUzLWI1NjAtNjA0ZTA3YTQ2YmQzIiwidCI6IjJhNWE1NGRmLTBhOGMtNGMwYy1iMDk5LTRmNzQ3MTBkYTc1NiJ9",
    },
    {
       class : 'bigcard2', heading : 'Office Productivity Comparision' , url: "https://app.powerbi.com/view?r=eyJrIjoiYWJhOTc3N2MtOGNjNi00Njc1LThjMTktYjJlZmE4YzE2YzE3IiwidCI6IjJhNWE1NGRmLTBhOGMtNGMwYy1iMDk5LTRmNzQ3MTBkYTc1NiJ9",
    },
    {
       class : 'bigcard1', heading : 'Safety Complilances' , url: "https://app.powerbi.com/view?r=eyJrIjoiNGI0Yzg3MjMtOTBhYS00MDZkLTg2ODktYjMzZmIxMmEzOTAxIiwidCI6IjJhNWE1NGRmLTBhOGMtNGMwYy1iMDk5LTRmNzQ3MTBkYTc1NiJ9",
    },
  ];
  return (
    <div style={{ maxHeight: "calc(100vh - 60px)", overflow: "auto" }}>
      <SmallCard></SmallCard>
      <BigCard data={data}></BigCard>
    </div>
  );
};

export default Department;
