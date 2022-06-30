import { connect } from "react-redux";
import Result from "../../components/Result/Result";
import { getDataAction, saveData, saveSelectedId } from "../actions/action";
const getMyState = (state) => state;

const ResultContainer = connect(getMyState, {
  getDataAction,
  saveData,
  saveSelectedId,
})(Result);

export default ResultContainer;
