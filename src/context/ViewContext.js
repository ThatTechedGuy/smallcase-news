import createDataContext from "./createDataContext";
import { COMFY } from "../constants";
import { getNews } from "../api/newsApi";

const viewReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_VIEW":
      return { ...state, viewType: action.payload };
    case "GET_NEWS":
      return { ...state, news: [...state.news, ...action.payload] };
    default:
      return state;
  }
};

const switchView = (dispatch) => (view) => dispatch({ type: "SWITCH_VIEW", payload: view });

const fetchNews = (dispatch) => async (offset) => {
  const news = await getNews(offset);
  dispatch({ type: "GET_NEWS", payload: news });
};

export const { Context, Provider } = createDataContext(
  viewReducer,
  { switchView, fetchNews },
  { viewType: COMFY, news: [] }
);
