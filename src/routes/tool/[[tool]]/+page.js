import {env} from "$env/dynamic/public";

export async function  load({params}) {

    const response = await fetch(env.PUBLIC_BACKEND_URL + 'api/roboplus/apps/get/'+params.tool+'/');

    const tool = await response.json()
    return {
        tool_name:params.tool,
        tool
    }
}
