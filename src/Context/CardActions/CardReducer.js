import { FILTER_SNIPPETS, CLEAR_FILTER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case FILTER_SNIPPETS:
      return {
        ...state,
        snippetCard: state.snippetCard.filter((card) => {
          return card.category.includes(action.payload);
        }),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        snippetCard: null,
      };

    default:
      return state;
  }
};
