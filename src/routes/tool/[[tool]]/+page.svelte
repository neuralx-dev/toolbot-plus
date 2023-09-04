<script>
    import {env} from "$env/dynamic/public";

    export let data
    console.log(data.tool_name)

    let output = {};

    // Loop through the input array and add the key values to the output object
    for (let i = 0; i < data.tool.fieldss.length; i++) {
        let obj = data.tool.fieldss[i];
        let key = obj.key;
        output[key] = "";
    }

    let result = ''

    // Print the output object
    console.log(output);

    const logResult = async () => {
        console.log(output)
        let prompt = data.tool.prompt
        let new_prompt = ''
        for (const [key, value] of Object.entries(output)) {
            console.log(`${key}: ${value}`);
            new_prompt = prompt.replace(/key/, value)
            console.log(new_prompt)
        }


        /*const response = await fetch(env.PUBLIC_BACKEND_URL + 'api/roboplus/apps/process/', {
            method: 'post',
            body: JSON.stringify({
                prompt: prompt
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await response.json()
        result = result.response*/

    }

</script>
<h3 class="div-with-border-right px-3 my-5">{data.tool.name}</h3>
<div class="dark-card">
    <div class="p-3">



        {#each data.tool.fieldss as field}
            <div class="form-group">
                <label for="{field.key}">{field.label}</label>
                <input bind:value={output[field.key]} type="text" class="form-control" id="{field.key}_input"
                       placeholder="{field.default}">

                <small id="{field.key}" class="form-text text-white">{field.description}</small>

            </div>

        {/each}
        <div class="d-grid my-2">
            <button class="btn btn-outline-primary d-block" on:click={logResult}>بنویس</button>

        </div>
        <div class="div-with-border-right">
            <p>{result}</p>
        </div>

    </div>

</div>
