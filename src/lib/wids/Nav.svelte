<script>
    import {page} from "$app/stores";
</script>

<nav class="navbar navbar-expand-lg navbar-dark ">

    <div class="container">

        <a class="navbar-brand" href="/">
            <img src="/images/roboplus.png" alt="Logo" width="150">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#">تول بات</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">جستجو</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">بلاگ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">آموزش</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">درباره ما</a>
                </li>
            </ul>

            <div class="d-flex">
                {#if $page.data.userD}
                    <a href="/panel" type="button" class="btn btn-base mx-1 ">پنل کاربری</a>
                    <a href="/panel/app/new" type="button" class="btn btn-base  mx-1 ">ساخت اپ</a>
                {:else}
                    <a href="/login" type="button" class="btn btn-base  btn-base-w100 ">ثبت نام / ورود</a>
                {/if}
            </div>

        </div>

    </div>

</nav>
