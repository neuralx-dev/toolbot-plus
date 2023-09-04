import {env} from "$env/dynamic/public";

export async function load() {

    const response = await fetch(env.PUBLIC_BACKEND_URL + 'api/roboplus/apps/home/');
    const categories = await response.json()
    return {
        categories:categories
    }
}
