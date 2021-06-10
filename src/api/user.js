import service from "../utils/request";

const baseUrl = "/key_service/v1/users/";

export function Query_list(data) {
    return service({
        url: baseUrl+"query_list",
        method: "post",
        data: data
    });
}

export function Update_state(data) {
    return service({
        url: baseUrl+"update_state",
        method: "post",
        data: data
    });
}

export function DeleteUser(data) {
    return service({
        url: baseUrl+"delete",
        method: "post",
        data: data
    });
}
