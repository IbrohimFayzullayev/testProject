import { connect } from "react-redux";
import Product from "../../components/Products/Product";
import { getDataAction, saveData, saveSelectedId } from "../actions/action";
const getMyState = (state) => state;

const ProductContainer = connect(getMyState, {
  getDataAction,
  saveData,
  saveSelectedId,
})(Product);

export default ProductContainer;
