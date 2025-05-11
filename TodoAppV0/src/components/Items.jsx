import React from "react";

const Items = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <li key={item}>{item.title}</li>
            <li key={item}>{item.date}</li>
          </>
        );
      })}
    </div>
  );
};

export default Items;
