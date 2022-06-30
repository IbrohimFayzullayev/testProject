import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./product.scss";
const Product = (props) => {
  let n =
    props.category_name === "all"
      ? props.products
      : props.category_name === "laptops"
      ? props.laptops
      : props.category_name === "smartphones"
      ? props.smartphones
      : props.category_name === "fragrances"
      ? props.fragrances
      : props.category_name === "skincare"
      ? props.skincare
      : props.category_name === "groceries"
      ? props.groceries
      : props.category_name === "home-decoration"
      ? props.home_decoration
      : [];

  const [postsPerPage] = useState(3);

  const indexOfLastPost = props.pageNumber * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = n.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    props.getDataAction();
  }, []);

  props.saveData(postsPerPage, n.length);

  return (
    <div className="container products">
      {currentPost.map((val) => {
        return (
          <div key={val.id} className="card" style={{ width: "18rem" }}>
            <img
              src={val.thumbnail}
              className="card-img-top card_img"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card_title card-title">{val.title}</h5>
              <p className="card_desc card-text ">{val.description}</p>
              <Link
                to={`/item/${val.id}`}
                onClick={() => {
                  props.saveSelectedId(val.id);
                }}
                className="btn btn-primary"
              >
                See More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Product;
