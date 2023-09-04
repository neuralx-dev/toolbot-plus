<script>
    export let data
</script>


<div class="row">
    <div class="col-3">
        <div class="dark-card" style="min-height: 550px !important">
            <h4 class="h4-title ">
                همه اپلیکیشن ها
            </h4>
            <div class="accordion" id="accordionExample">
                {#each data.categories as i}
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseitem_{i.id}" aria-expanded="true"
                                    aria-controls="collapseitem_{i.id}">
                                {i.name}
                            </button>
                        </h2>
                        <div id="collapseitem_{i.id}" class="accordion-collapse collapse "
                             data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                                    {#each i.apps as app}
                                        <a href="/tool/{app.id}" style="text-decoration: none">
                                            <p type="button" class="">{app.name}</p>
                                        </a>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}

            </div>
        </div>
    </div>
    <div class="col-9">
        <slot/>

    </div>
</div>
