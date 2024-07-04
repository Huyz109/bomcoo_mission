import { BASE_API } from "../constant";
import { axiosRequest, axiosMethod } from "../helpers/axios";

export const getTodoData = (url, params) => {
    return new Promise((resolve, reject) => {
        axiosRequest(BASE_API + url, axiosMethod.GET, params)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.log('error get data', error);
            reject(error);
        })
    })
}

export const postTodoData = (url, data) => {
    return new Promise((resolve, reject) => {
        axiosRequest(BASE_API + url, axiosMethod.POST, '', data)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.log('error get data', error);
            reject(error);
        })
    })
}

export const deleteTodoData = (url, data) => {
    return new Promise((resolve, reject) => {
        axiosRequest(BASE_API + url, axiosMethod.DELETE, '', data)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.log('error get data', error);
            reject(error);
        })
    })
}


