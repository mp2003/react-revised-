import React from "react";

function DessertsList(props) {
  // Check if props.data is an array before attempting to filter and sort
  if (!Array.isArray(props.data)) {
    console.error("Invalid data format. Expected an array.");
    return null;
  }

  const data = props.data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);

  const itemList = data.map((dessert) => (
    <li
      key={dessert.createdAt}
    >{`${dessert.name} - ${dessert.calories} cal`}</li>
  ));

  return <ul>{itemList}</ul>;
}

export default DessertsList;
