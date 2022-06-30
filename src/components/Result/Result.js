import React from "react";
import { Link } from "react-router-dom";
import "./result.scss";
const Result = (props) => {
  let currentPost = props.searchVal;
  return (
    <div className="container results">
      {currentPost?.map((val) => {
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

export default Result;
