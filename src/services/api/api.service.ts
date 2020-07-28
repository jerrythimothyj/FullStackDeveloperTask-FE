import axios from "axios";
import { Subject } from "rxjs"
import _ from "lodash"
import { showToasterSubject } from "../toaster/toaster.service"

const instance = axios.create({
    baseURL: "http://localhost:4100/api/"
});
let showLoaderCount = 0;
const showLoaderCountSubject = new Subject();
export const showLoaderCountState = showLoaderCountSubject.asObservable()

instance.interceptors.request.use(function (config) {
    showLoaderCount++;
    showLoaderCountSubject.next(showLoaderCount)

    return config
}, function (error) {
    showLoaderCount--;
    showLoaderCountSubject.next(showLoaderCount)
    showToasterSubject.next({ type: 'error', value: JSON.stringify(error.response.data) })

    return Promise.reject(error)
})

instance.interceptors.response.use(function (config) {
    showLoaderCount--;
    showLoaderCountSubject.next(showLoaderCount)

    return config
}, function (error) {
    showLoaderCount--;
    showLoaderCountSubject.next(showLoaderCount)
    showToasterSubject.next({ type: 'error', value: _.join(_.map(error.response.data.errors, _.property('msg')), "\n\n") })

    return Promise.reject(error)
})

export const ajaxGet = (url: string) => instance({
    method: 'get',
    url
})

export const ajaxPost = (url: string, data: any) => instance({
    method: 'post',
    url,
    data
})

export const ajaxDelete = (url: string) => instance({
    method: 'delete',
    url
})