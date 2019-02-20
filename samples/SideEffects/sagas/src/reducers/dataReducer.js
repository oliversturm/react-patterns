const LOAD_DATA = 'LOAD_DATA';
const DATA_LOADED = 'DATA_LOADED';

const loadData = () => ({ type: LOAD_DATA });
const dataLoaded = data => ({ type: DATA_LOADED, payload: { data } });

const createDataReducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, loading: true };
    case DATA_LOADED:
      return {
        ...state,
        data: action.payload.data,
        loaded: true,
        loading: false
      };
    default:
      return state;
  }
};

export { LOAD_DATA, DATA_LOADED, loadData, dataLoaded, createDataReducer };
