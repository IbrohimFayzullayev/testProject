import React from "react";
import "./item.scss";
const Item = (props) => {
  let curentItem = props.products[props.selectId - 1];
  return (
    <div className="item d-flex flex-row mb-3">
      <div className="images w-50">
        <img className="top_image" src={curentItem.thumbnail} />
        <div className="bottom_images">
          {curentItem.images.map((val, index) => {
            return <img key={index + 1} src={val} />;
          })}
        </div>
      </div>
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {curentItem.title}</li>
        <li className="list-group-item">Brand: {curentItem.brand}</li>
        <li className="list-group-item">
          Description:{curentItem.description}
        </li>
        <li className="list-group-item">Category: {curentItem.category}</li>
        <li className="list-group-item">Price: {curentItem.price}$</li>
        <li className="list-group-item">
          Discount: {curentItem.discountPercentage}%
        </li>
        <li className="list-group-item">Rating: {curentItem.rating}</li>
        <li className="list-group-item">Stock: {curentItem.stock}</li>
      </ul>
    </div>
  );
};
export default Item;
