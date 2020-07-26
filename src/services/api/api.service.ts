import axios from "axios";
import { Subject } from "rxjs"

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

    return Promise.reject(error)
})

instance.interceptors.response.use(function (config) {
    showLoaderCount--;
    showLoaderCountSubject.next(showLoaderCount)

    return config
}, function (error) {
    showLoaderCount--;
    showLoaderCountSubject.next(showLoaderCount)

    return Promise.reject(error)
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