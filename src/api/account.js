import service from "../utils/request";

const baseUrl = "/key_service/v1/account/";

export function Login(data) {
    return service({
        url: baseUrl+"login",
        method: "post",
        data: data
    });
}

export function Logout() {
    return service({
        url: baseUrl+"logout",
        method: "post",
    });
}

export function QueryInfo() {
    return service({
        url: baseUrl+"query",
        method: "post",
    });
}

export function Create(data) {
    return service({
        url: baseUrl+"create",
        method: "post",
        data: data
    });
}

export function Modify_password(data) {
    return service({
        url: baseUrl+"modify_password",
        method: "post",
        data: data
    });
}

export function Update_profile(data) {
    return service({
        url: baseUrl+"update_profile",
        method: "post",
        data: data
    });
}

