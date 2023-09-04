<script>

    import {onMount} from "svelte";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";

    let categories = []
    let fields = []


    let app = {
        name: '',
        description: '',
        prompt: '',
        category_id: '',
        icon: '',
        fields: []
    }
    onMount(async () => {
        let res = await fetch(`${$page.data.baseApiUrl}api/roboplus/apps/categories/all/`)
        categories = await res.json()
    })

    function findHashtags() {
        let regexp = /\B\#\w\w+\b/g
        let result = app.prompt.match(regexp);
        if (result) {
            result = [...new Set(result)];
            console.log(result);
            for (const field of result) {
                fields = [...fields, {
                    key: field,
                    default: '',
                    description: '',
                    label: '',
                }]
            }
            console.log(fields)
        } else {
            return false;
        }
    }

    function handleFileChange(event) {
        app.icon = event.target.files[0];
    }

    const buildApp = async () => {
        app.fields = fields


        let res = await fetch($page.data.baseApiUrl + 'api/roboplus/apps/create/', {
            method: 'post',
            body: JSON.stringify(app),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + $page.data.userD.token
            },

        })

        const data = await res.json();


        console.log(data)
        if (res.status === 201) {
            await goto('/')
        }
    }
</script>


<form class="">
    <div class="form-group my-2">
        <label for="name">نام</label>
        <input type="text" class="form-control" id="name" name="name" maxlength="50" required bind:value={app.name}>
    </div>
    <div class="form-group my-2">
        <label for="description">توضیحات ابزار</label>
        <textarea class="form-control" id="description" name="description" rows="3" required
                  bind:value={app.description}></textarea>
    </div>

    <div class="form-group my-2">
        <label for="category">دسته بندی</label>
        <select class="form-select" id="category" name="category" required bind:value={app.category_id}>
            {#each categories as category}
                <option value={category.id}>{category.name}</option>
            {/each}

        </select>
    </div>
    <div class="form-group my-2">
        <label for="icon">Icon</label>
        <input placeholder="bi-app" type="text" class="form-control" id="icon" name="icon" maxlength="50" required
               bind:value={app.icon}>
        <p>از <a href="https://icons.getbootstrap.com">این ادرس</a> فقط اسم آیکون را کپی کنید و قرار دهید. </p>
    </div>
    <hr>
    <div class="form-group my-2">

        <p>در پرامپت برای تایین متغیر برای اپ از قواعد هشتگ گذاری اینستاگرام استفاده کنید.</p>
        <label for="prompt">پرامپت</label>
        <textarea style="direction: ltr !important" class="form-control" id="prompt" name="prompt" rows="3" required
                  bind:value={app.prompt}></textarea>
        <button role="button" class="btn btn-primary w-100 my-5" on:click={findHashtags}>جدا سازی متغیر های مورد نیاز
        </button>
    </div>

    <div class="row">
        {#each fields as field,index}
            <div class="col-3">
                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">{field.key}</div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="label">عنوان متغیر:</label>
                            <input bind:value={fields[index].label} type="text" class="form-control" id="label"
                                   aria-describedby="label" placeholder="field label">
                        </div>
                        <div class="form-group">
                            <label for="default">مقدار پیشفرض متغیر:</label>
                            <input bind:value={fields[index].default} type="text" class="form-control" id="default"
                                   aria-describedby="label" placeholder="field label">
                        </div>
                        <div class="form-group">
                            <label for="fdescription">توضیحات متغیر:</label>
                            <input bind:value={fields[index].description} type="text" class="form-control"
                                   id="fdescription" aria-describedby="description" placeholder="field label">
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <button on:click={buildApp} class="btn btn-primary">ساخت اپ</button>
</form>
