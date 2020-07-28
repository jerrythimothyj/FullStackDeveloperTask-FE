import { takeEvery, call, put, takeLatest, select } from "redux-saga/effects";
import {
    actionTypes
} from "../../constants/github/github.constant";
import { ajaxPost } from "../../services/api/api.service";


const fetchData = async (searchCriteria: any) => {
    const fetchData = await ajaxPost('search', searchCriteria)
    return fetchData.data
}

const getSearchCriteria = (state: any) => state.githubReducer.stagedSearchCriteria

function* fetchDataSaga() {
    const stagedSearchCriteria = yield select(getSearchCriteria)

    if (stagedSearchCriteria && stagedSearchCriteria.text && stagedSearchCriteria.text.length >= 3) {
        yield put({ type: actionTypes.DATA_PROCESSING, stagedSearchCriteria });
        const data = yield call(fetchData, stagedSearchCriteria);
        yield put({ type: actionTypes.DATA_LOADED, data, stagedSearchCriteria });
    } else {
        yield put({ type: actionTypes.DATA_PROCESSING });
        yield put({ type: actionTypes.DATA_LOADED, data: {}, stagedSearchCriteria });
    }
}

export default function* watcherSaga() {
    yield takeEvery(actionTypes.DATA_REQUESTED, fetchDataSaga);
}