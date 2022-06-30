import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  useEffect(() => {
    props.categoryAction();
  }, []);
  const [word, setWord] = useState("");
  const [userInput, setUserInput] = useState("");

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" href="..">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="d-flex"
            role="search"
          >
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                props.getDataCategory(e.target.value);
                setWord(e.target.value);
              }}
              name="category"
              id="category"
            >
              <option value="all">All</option>
              {props.categories?.map((val) => {
                return (
                  <option key={val} value={val}>
                    {val}
                  </option>
                );
              })}
            </select>
            <input
              onChange={(e) => {
                setUserInput(e.target.value);
                props.searchData(userInput);
              }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to={"/result"} className="btn btn-outline-success">
              Search
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
