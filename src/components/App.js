import React from "react";
import ProductContainer from "../redux/containers/ProductContainer";
import PaginationContainer from "../redux/containers/PaginationContainer";
import HeaderContainer from "../redux/containers/HeaderContainer";
import ItemContainer from "../redux/containers/ItemContainer";
import ResultContainer from "../redux/containers/ResultContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <ProductContainer />
                <PaginationContainer />{" "}
              </div>
            }
          />
          <Route path="/item">
            <Route path=":itemId" element={<ItemContainer />} />
          </Route>
          <Route path="/result" element={<ResultContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
