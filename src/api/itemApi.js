import request from "@/utils/request";
export function addItem(data) {
    return request({
        method: "post",
        url: "/dwq/item/addItem",
        data: data
    });
}
export function getItemListByPage(data) {
    return request({
        method: "post",
        url: "/dwq/item/getItemListByPage",
        data: data
    });
}