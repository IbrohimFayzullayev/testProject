import {
  GET_DATA,
  POST,
  NUMBER,
  CATEGORY,
  LIST_CATEGORY,
  SELECTED,
  SEARCH,
} from "../actions/action";
export const initial_state = {
  products: [],
  pageNumber: 1,
  perPageNumber: 1,
  categories: [],
  fragrances: [],
  laptops: [],
  skincare: [],
  smartphones: [],
  groceries: [],
  home_decoration: [],
  category_name: "all",
  usedArrayLength: null,
  selectId: null,
  searchVal: [],
};

const reducers = (state = initial_state, action) => {
  if (action.type === GET_DATA) {
    return {
      ...state,
      products: action.payload.arr,
      fragrances: action.payload.fragrances,
      laptops: action.payload.laptops,
      skincare: action.payload.skincare,
      smartphones: action.payload.smartphones,
      home_decoration: action.payload.home_decoration,
      groceries: action.payload.groceries,
    };
  }
  if (action.type === POST) {
    return {
      ...state,
      pageNumber: action.payload,
    };
  }
  if (action.type === NUMBER) {
    return {
      ...state,
      perPageNumber: action.payload.perPage,
      usedArrayLength: action.payload.length,
    };
  }
  if (action.type === CATEGORY) {
    return {
      ...state,
      categories: action.payload,
    };
  }
  if (action.type === LIST_CATEGORY) {
    return {
      ...state,
      category_name: action.payload,
    };
  }
  if (action.type === SELECTED) {
    return {
      ...state,
      selectId: action.payload,
    };
  }
  if (action.type === SEARCH) {
    return {
      ...state,
      searchVal: action.payload,
    };
  }
  return state;
};

export default reducers;
