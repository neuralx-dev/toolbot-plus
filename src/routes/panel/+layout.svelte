<script>

    import {onMount} from 'svelte';

    let url = ``;

    onMount(() => url = window.location.href);

</script>


<div class="d-flex flex-nowrap">
    <div class="d-flex flex-column  p-3 text-bg-dark" style="width: 280px; border-radius: 25px !important; height: 500px !important;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

            <span class="fs-4">خوش آمدید</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="/panel/home" class="nav-link {url.includes('home')?'active':''}" aria-current="page">
                    <i class="bi bi-house mx-2"></i>
                    خانه
                </a>
            </li>
            <li>
                <a href="/panel/app" class="nav-link text-white  {url.includes('history')?'active':''}">
                    <i class="bi bi-chat mx-2"></i>

                    اپلیکیشن ها
                </a>
            </li>
            <hr>
            <li>
                <a href="/panel/profile" class="nav-link text-white">
                    <svg class="bi pe-none me-2" width="16" height="16">
                        <use xlink:href="#people-circle"></use>
                    </svg>
                    پروفایل
                </a>
            </li>
        </ul>
        <!--<hr>
        <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
               data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                <strong>mdo</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" style="">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>-->
    </div>
    <div class="d-flex flex-column flex-shrink-0 p-3 w-75">
        <div style="min-height: 500px">
            <slot/>
        </div>

    </div>
</div>
