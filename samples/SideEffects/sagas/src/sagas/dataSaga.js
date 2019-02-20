import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_DATA, dataLoaded } from '../reducers/dataReducer';
import axios from 'axios';

const fetchData = () =>
  axios
    .get('http://outlier.oliversturm.com:8080/countries')
    .then(res => res.data.data);

function* loadDataHandler() {
  const data = yield call(fetchData);
  yield put(dataLoaded(data));
}

function* dataSaga() {
  yield takeEvery(LOAD_DATA, loadDataHandler);
}

export { dataSaga };
