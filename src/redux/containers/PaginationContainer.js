import { connect } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import { getDataAction, paginate } from "../actions/action";

const getMyState = (state) => state;

const PaginationContainer = connect(getMyState, { getDataAction, paginate })(
  Pagination
);

export default PaginationContainer;
