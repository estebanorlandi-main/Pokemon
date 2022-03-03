import { ERROR, REMOVE_ERROR } from '../actions/errors';

const initialState = {
  errors: [],
};

function errorsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ERROR: {
      const newError = {
        name: action.payload.name,
        message: action.payload.message,
        id: new Date().getTime(),
      };
      return { ...state, errors: [...state.errors, newError] };
    }
    case REMOVE_ERROR:
      return {
        ...state,
        errors: state.errors.filter((error) => error.id !== action.payload),
      };
    default:
      return state;
  }
}

export default errorsReducer;
