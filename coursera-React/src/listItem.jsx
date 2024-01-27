import React from "react";

console.log("ListComponent");
let products = [
  { id: 1, title: "Product 1", price: 19.99 },
  { id: 2, title: "Product 2", price: 29.99 },
  { id: 3, title: "Product 3", price: 39.99 },
  { id: 4, title: "Product 4", price: 49.99 },
  { id: 5, title: "Product 5", price: 59.99 },
];

const ListItem = () => {
  //   const listItem = products.map((product, index) => {
  //     const item = `${product.id} - ${product.title}`;
  //     return <li key={index}>{item}</li>;
  //   });R

  const productDetails = products.map((product, index) => {
    return {
      content: `${product.id} - ${product.title}`,
      price: product.price,
    };
  });
  const firstProductPrice = productDetails[0] ? productDetails[0].price : null;

  const productPrice = () => {
    let price = [];
    for (let i = 0; i < productDetails.length; i++) {
      price.push(productDetails[i].price);
    }
    return price;
  };
  console.log(productDetails.length);
  console.log(productPrice());
  return (
    <>
      <div>{firstProductPrice}</div>
      <div>{productPrice()}</div>
    </>
  );
};

export default ListItem;
