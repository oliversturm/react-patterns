import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_DATA, dataLoaded } from '../reducers/dataReducer';

const fetchData = () =>
  fetch('http://outlier.oliversturm.com:8080/countries')
    .then(res => res.json())
    .then(res => res.data);

function* loadDataHandler() {
  const data = yield call(fetchData);
  yield put(dataLoaded(data));
}

function* dataSaga() {
  yield takeEvery(LOAD_DATA, loadDataHandler);
}

export { dataSaga };
