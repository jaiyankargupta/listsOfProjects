import Item from "./item";
import { useState } from "react";

const ItemsLists = ({ list }) => {
  const [activeItem, setActiveItem] = useState([]);
  const handler = (event, item) => {
    let newItems = [...activeItem, item];
    console.log(activeItem);
    setActiveItem(newItems);
  };
  return (
    <div>
      <ul>
        {list.map((item, indx) => (
          <Item
            key={indx}
            list={item}
            bought={activeItem.includes(item)}
            handlerThings={(event) => handler(event, item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsLists;
