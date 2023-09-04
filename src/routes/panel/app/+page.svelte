<script>

    import {onMount} from "svelte";
    import {env} from "$env/dynamic/public";
    import {page} from "$app/stores";

    let apps = []
    onMount(async () => {
        await loadApps()
    })

    const loadApps = async () => {
        const response = await fetch(env.PUBLIC_BACKEND_URL + 'api/roboplus/apps/mine/', {
            headers: {
                'Authorization': 'Bearer ' + $page.data.userD.token
            }
        });
        apps = await response.json()
    }
    const delete_app = async (id) => {
        const response = await fetch(env.PUBLIC_BACKEND_URL + 'api/roboplus/apps/delete/' + id + '/', {
            headers: {
                'Authorization': 'Bearer ' + $page.data.userD.token
            }
        });
        if (response.status === 200) {
            loadApps()
        }

    }
</script>


<div class="row">
    <!-- Create a column element -->
    <div class="col">
        <!-- Create a heading element with some classes -->
        <a href="/panel/app/new" type="button" class="btn btn-base  w-25 my-2">ساخت اپ</a>

        <ul class="list-group list-group-flush bg-dark">
            {#each apps as app}
                <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white">
                    {app.name}
                    <!-- use the Bootstrap Icons eye and trash icons -->
                    <div class="ms-2">
                        <a href="/tool/{app.id}"><i class="bi bi-eye mx-5"></i></a>
                        <a href="#"><i class="bi bi-trash mx-5" on:click={()=>{delete_app(app.id)}}></i></a>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>
