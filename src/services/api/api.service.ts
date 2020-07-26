import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4100/api/"
});

export const ajaxPost = (url: string, data: any) => instance({
    method: 'post',
    url,
    data
})

export const ajaxDelete = (url: string) => instance({
    method: 'delete',
    url
})