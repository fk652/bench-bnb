import csrfFetch from "./csrf";

const SET_BENCHES = 'benches/SET_BENCHES';
const ADD_BENCH = 'benches/ADD_BENCH';

const setBenches = (benches) => ({
  type: SET_BENCHES,
  payload: benches
})

const addBench = (bench) => ({
  type: ADD_BENCH,
  payload: bench
})

export const fetchBenches = () => async dispatch => {
  const response = await csrfFetch('/api/benches');

  if (response.ok) {
    const data = await response.json();
    // console.log("fetch benches data", data);

    dispatch(setBenches(data.benches));
  }
}

export const fetchBench = (benchId) => async dispatch => {
  const response = await csrfFetch(`/api/benches/${benchId}`);

  if (response.ok) {
    const data = await response.json();
    // console.log("fetch bench data", data);

    dispatch(addBench(data.bench))
  }
}

export const createBench = (bench) => async dispatch => {
  const response = await csrfFetch('/api/benches', {
    method: 'POST',
    body: JSON.stringify(bench)
  })

  if (response.ok) {
    const data = await response.json();
    // console.log("create bench data", data);

    dispatch(addBench(data.bench));
  }
}

const benchesReducer = (state = {}, action) => {
  // const newState = {...state}

  switch (action.type) {
    case SET_BENCHES:
      return {...action.payload}
    case ADD_BENCH:
      return {...state, [action.payload.id]: action.payload}
    default:
      return state;
  }
}

export default benchesReducer;