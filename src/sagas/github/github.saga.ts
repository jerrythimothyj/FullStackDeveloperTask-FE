import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import {
    actionTypes
} from "../../constants/github/github.constant";
import { ajaxPost } from "../../services/api/api.service";


const fetchData = async (searchCriteria: any) => {
    const fetchData = await ajaxPost('search', searchCriteria)
    return fetchData.data
}

function* getListSaga(data: any) {
    if (data.searchCriteria.text && data.searchCriteria.text.length >= 3) {
        yield put({ type: actionTypes.DATA_PROCESSING });
        const payload = yield call(fetchData, data.searchCriteria);
        yield put({ type: actionTypes.DATA_LOADED, payload });
    } else {
        yield put({ type: actionTypes.DATA_PROCESSING });
        yield put({ type: actionTypes.DATA_LOADED, payload: {} });
    }
}

export default function* watcherSaga() {
    yield takeEvery(actionTypes.DATA_REQUESTED, getListSaga);
}