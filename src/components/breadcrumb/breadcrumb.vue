<template>
    <nav>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Typography</li>
        </ol>
    </nav>
</template>

<style lang="sass" scoped>
@import '../../assets/styles/fontawesome/scss/fontawesome.scss'
</style>


<style lang="scss" scoped>
    .breadcrumb-item + .breadcrumb-item::before {
        display: inline-block;
        padding-right: 0.5rem;
        color: #98a6ad;
        content: "\f105";
        font-family: 'Font Awesome 5 Free';
    }
    .breadcrumb-item + .breadcrumb-item::before {
        display: inline-block;
        padding-right: 0.5rem;
        color: #98a6ad;
        content: "\f105";
        font-family: 'Font Awesome 5 Free';
    }
    .breadcrumb a {
        color: #98a6ad;
        font-weight: 500;
    }
    .breadcrumb {
        background-color: transparent;
        padding: 0;
    }
    .breadcrumb-item.active {
        color: #6c757d;
        font-weight: 500;
    }
</style>
