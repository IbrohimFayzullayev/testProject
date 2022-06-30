import React, { useEffect } from "react";
import "./pagination.scss";
const Pagination = (props) => {
  let arr = [];
  let n = Math.ceil(props.usedArrayLength / props.perPageNumber);
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  useEffect(() => {
    props.paginate(1);
  }, [props.category_name]);

  return (
    <div>
      <ul className="pagination">
        {arr.map((val) => {
          return (
            <li key={val} className="page-item">
              <a
                onClick={() => props.paginate(val)}
                className="page-link"
                href="#"
              >
                {val}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
