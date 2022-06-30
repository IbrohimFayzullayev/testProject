import getData from "../../components/Api";

export const GET_DATA = "DATA";
export const POST = "POST";
export const NUMBER = "NUMBER";
export const CATEGORY = "CATEGORY";
export const LIST_CATEGORY = "LIST_CATEGORY";
export const SELECTED = "SELECTED";
export const SEARCH = "SEARCH";

export const getDataAction = () => async (dispatch) => {
  const data = await getData("product");
  let arr = [...data.data.products];
  for (let i = data.data.products.length + 1; i <= data.data.count; i++) {
    let val = await getData(`product/${i}`);
    arr.push(val.data);
  }
  let smartphones = arr.filter((obj) => obj.category === "smartphones");
  let laptops = arr.filter((obj) => obj.category === "laptops");
  let fragrances = arr.filter((obj) => obj.category === "fragrances");
  let skincare = arr.filter((obj) => obj.category === "skincare");
  let groceries = arr.filter((obj) => obj.category === "groceries");
  let home_decoration = arr.filter((obj) => obj.category === "home-decoration");

  dispatch({
    type: GET_DATA,
    payload: {
      arr,
      smartphones,
      laptops,
      fragrances,
      skincare,
      groceries,
      home_decoration,
    },
  });
};

export const paginate = (number) => async (dispatch) => {
  dispatch({
    type: POST,
    payload: number,
  });
};

export const saveData = (perPage, length) => async (dispatch) => {
  dispatch({
    type: NUMBER,
    payload: { perPage, length },
  });
};

export const categoryAction = () => async (dispatch) => {
  let data = await getData("category");
  dispatch({
    type: CATEGORY,
    payload: data.data,
  });
};

export const getDataCategory = (categoryName) => async (dispatch) => {
  dispatch({
    type: LIST_CATEGORY,
    payload: categoryName,
  });
};

export const saveSelectedId = (id) => async (dispatch) => {
  dispatch({
    type: SELECTED,
    payload: id,
  });
};

export const searchData = (userInput) => async (dispatch) => {
  console.log(userInput);
  let obj = await getData(`product?name=${userInput}`);
  dispatch({
    type: SEARCH,
    payload: obj.data.products,
  });
};
