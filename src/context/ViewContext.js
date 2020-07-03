import createDataContext from "./createDataContext";
import { COMFY } from "../constants";
const viewReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_VIEW":
      return { ...state, viewType: action.payload };
    default:
      return state;
  }
};

const switchView = (dispatch) => (view) => dispatch({ type: "SWITCH_VIEW", payload: view });

export const { Context, Provider } = createDataContext(
  viewReducer,
  { switchView },
  { viewType: COMFY }
);
