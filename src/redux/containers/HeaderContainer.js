import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import {
  categoryAction,
  paginate,
  getDataCategory,
  searchData,
} from "../actions/action";

const getMyState = (state) => state;

const HeaderContainer = connect(getMyState, {
  categoryAction,
  paginate,
  getDataCategory,
  searchData,
})(Header);

export default HeaderContainer;
