import request from "../utils/request";

export const GetList = (params) => {
    return request({
        url: '/blog/list',
        params
    })
}

export const GetCategoryList = (params) => {
    return request({
        url: '/category/list',
        params
    })
}

