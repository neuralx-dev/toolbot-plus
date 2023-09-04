import {browser} from "$app/environment";
import {env} from "$env/dynamic/public";

export const load = async ({data}) => {


    let userD;
    if (browser) {
        const dataString = localStorage.getItem("userData");

        userD = JSON.parse(dataString);
    } else {
        userD = {}
    }

    let baseApiUrl = env.PUBLIC_BACKEND_URL


    return {
        userD,
        baseApiUrl
    }

}
