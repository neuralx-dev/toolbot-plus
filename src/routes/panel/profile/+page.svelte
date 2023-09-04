<script>
    import {env} from "$env/dynamic/public";
    import {page} from "$app/stores";


    let apiKey = ''
    const setApiKey = async () => {
        const response = await fetch(env.PUBLIC_BACKEND_URL + 'api/auth/user/set/apikey/', {
            headers: {
                'Authorization': 'Bearer ' + $page.data.userD.token,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                api_key: apiKey
            })
        });
        if (response.status === 200) {
            alert('تنظیم شد')
        }
    }
</script>

<div>
    <h3>پروفایل شما</h3>
</div>

<hr>

<div class="">
    <label for="openai-api-key" class="form-label">کلید دسترسی openAI</label>
    <input type="password" id="openai-api-key" name="openai_api_key" class="form-control"
           aria-describedby="openai-api-key" bind:value={apiKey}>
    <button class="btn btn-outline-light w-100 my-1" on:click={setApiKey}>تنظیم کلید</button>
</div>
