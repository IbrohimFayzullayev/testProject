import { connect } from "react-redux";
import Item from "../../components/Item/Item";
import {
  categoryAction,
  paginate,
  getDataCategory,
  saveSelectedId,
} from "../actions/action";

const getMyState = (state) => state;

const ItemContainer = connect(getMyState, {
  categoryAction,
  paginate,
  getDataCategory,
  saveSelectedId,
})(Item);

export default ItemContainer;
