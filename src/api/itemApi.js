import request from "@/utils/request";
export function getSideBar() {
    return request({
        method: "get",
        url: "/uaa/zone/getZoneActiveBuildInPermissions?zoneCode=" + zoneCode
    });
}