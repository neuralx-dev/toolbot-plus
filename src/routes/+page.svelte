<script>

    import {page} from "$app/stores";

    export let data;
    let categories = []
    let tags = []
    categories = data.page
    //tags = data.tags


</script>


<div class="row m-3">
    <div class="col-md-8 p-3 ">
        <h2 class="text-header-1 div-with-border-right ps-3">
            <span class="text-mine-pink"> آخرین </span> <span class="text-mine-teal"> ابزاری </span> که از<br/> <span
                class="text-mine-orange"> هوش مصنوعی </span> نیاز دارید
        </h2>


    </div>
    <div class="col-md-4 p-3">
        <img src="./images/knife.png" alt="" width="450" class="img-fluid robot-white-shadow"/>
    </div>
</div>

<div class="row m-3">
    <div class="col-md-12">
        <h3 class="div-with-border-right ps-3">
            دسته بندی ها
        </h3>
    </div>
</div>

<div class="row my-3 mx-3">
    {#each categories as i}

        <div class=" col-4 col-lg-4 col-md-12 col-sm-12">
            <div class="dark-card my-2">
                <h4 class="h4-title ">
                    {i.name}
                </h4>
                <div class="apps-container">

                    {#each i.apps.slice(0, 3) as app}
                        <a href="/tool/{app.id}" style="text-decoration: none">
                            <div class="app-item">
                                <button class="app-item-icon" style="background-color: transparent">
                                    <i class="bi {app.icon}"></i>
                                </button>
                                <div class="app-name">
                                    <p>{app.name}</p>
                                </div>
                            </div>
                        </a>

                    {/each}
                </div>

            </div>

        </div>
    {/each}
</div>
