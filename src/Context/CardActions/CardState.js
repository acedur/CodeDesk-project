import CardContext from "./CardContext";
import CardReducer from "./CardReducer";
import { FILTER_SNIPPETS, CLEAR_FILTER } from "../types";
import { useReducer } from "react";
import Data from "../../Clomponents/AddSnippet/Data";

const CardState = (props) => {
  const initialState = { snippetCard: Data };

  const [state, dispach] = useReducer(CardReducer, initialState);

  const filterSnippets = (text) => {
    dispach({
      type: FILTER_SNIPPETS,
      payload: text,
    });
    console.log(text);
  };

  const clearFilter = () => {
    dispach({
      type: CLEAR_FILTER,
    });
  };

  return (
    <CardContext.Provider
      value={{ filterSnippets, clearFilter, snippetCard: state.snippetCard }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
