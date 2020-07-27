import githubSaga from "./sagas/github/github.saga";
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
    yield fork(githubSaga)
}