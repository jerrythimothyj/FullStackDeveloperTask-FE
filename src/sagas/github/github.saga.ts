import { takeEvery, call, put, takeLatest, select } from "redux-saga/effects";
import {
    actionTypes
} from "../../constants/github/github.constant";
import { ajaxPost } from "../../services/api/api.service";
import _ from "lodash";


const fetchData = async (searchCriteria: any) => {
    const fetchData = await ajaxPost('search', searchCriteria)
    return fetchData.data
}

const getStagedSearchCriteria = (state: any) => state.githubReducer.stagedSearchCriteria
const getSearchCriteria = (state: any) => state.githubReducer.searchCriteria

function* fetchDataSaga() {
    const stagedSearchCriteria = yield select(getStagedSearchCriteria)
    const searchCriteria = yield select(getSearchCriteria)

    if (!_.isEqual(stagedSearchCriteria, searchCriteria)) {
        if (stagedSearchCriteria && stagedSearchCriteria.text && stagedSearchCriteria.text.length >= 3) {
            yield put({ type: actionTypes.DATA_PROCESSING, stagedSearchCriteria });
            const data = yield call(fetchData, stagedSearchCriteria);
            yield put({ type: actionTypes.DATA_LOADED, data, stagedSearchCriteria });
        } else {
            yield put({ type: actionTypes.DATA_PROCESSING, stagedSearchCriteria });
            yield put({ type: actionTypes.DATA_LOADED, data: {}, stagedSearchCriteria });
        }
    }
}

export default function* watcherSaga() {
    yield takeEvery(actionTypes.DATA_REQUESTED, fetchDataSaga);
}