import request from "../utils/request";

export const GetList = (params) => {
    return request({
        url: '/blog/list',
        params
    })
}

