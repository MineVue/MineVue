<template>
    <div class="app-root">
        <header class="app-header navbar">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a href="#" class="navbar-brand">CM ADMIN</a>
            <ul class="nav navbar-nav hidden-md-down b-r-1">
                <li class="nav-item">
                    <a href="#" class="nav-link navbar-toggler sidebar-toggler">☰</a>
                </li>
            </ul>
            <form action="" class="form-inline b-r-1 px-2 hidden-md-down">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control" placeholder="Search...">
            </form>
        </header>
        <div class="app-body">
            <div class="sidebar">
                <nav class="sidebar-nav">
                    <ul class="nav">
                        <li class="nav-item has-sub" v-bind:class="{ active: activeMenu === menu.active}" v-for="menu in menuList" key="index">
                            <span v-on:click="slidingSubMenu($event)">
                                <i v-bind:class="menu.icon"></i>
                                {{menu.title}}
                            </span>
                            <ul class="sub-menu">
                                <li v-for="sub in menu.submenu">
                                    <router-link v-bind:to="sub.link">
                                        {{sub.title}}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="contents">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import store from './store';
    import { fetchMenuList } from './actions/main';
    export default {
        data() {
            return {
                activeMenu: 0,
                menuList: this.$select('main').list,
                menu: this.$select('main')
            }
        },
        mounted() {
            store.actions.fetchMenuList();
        },
        methods: {
            slidingSubMenu (e) {
                e.preventDefault();
                const $target = $(e.target);
                const $parent = $target.parent();
                const $subMenu = $target.next('.sub-menu');
                const $otherSubMenu = $('.sidebar .nav > li.has-sub > .sub-menu');
                const no = $parent.data('no');

                $otherSubMenu.not($subMenu).slideUp(250, () => {
                    $parent.siblings().removeClass('open');
                });

                $subMenu.slideToggle(250, () => {
                    if ($parent.hasClass('open')) {
                        $parent.removeClass('open');
                    } else {
                        $parent.addClass('open');
                    }
                });
            }
        }
    }
</script>
<style>
    body, html {
        height: 100%;
    }
    body {
        font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.5;
        color: #374767;
    }
    .app, .app-dashboard, .app-root {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        min-height: 100vh;
    }
    .app-body {
        display: flex;
        -webkit-box-flex: 1;
        flex-grow: 1;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;;
        overflow-x: hidden;
    }
    /* header */
    .app-header {
        position: fixed;
        z-index: 1000;
        width: 100%;
        -webkit-box-flex: 0;
        flex: 0 0 60px;
    }
    header.navbar {
        height: 60px;
        position:relative;
        padding:0;
        background-color: #fff;
        border-bottom: 1px solid #e1e6ef;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
    }
    header.navbar .navbar-nav {
        height: 60px;
    }
    header.navbar .nav-item {
        position: relative;
        min-width: 50px;
        margin: 0 !important;
        text-align: center;
        padding: 19px 0;
    }
    header.navbar .nav-item .nav-link {
        padding: 0;
    }
    .navbar-nav .nav-link {
        color: #c0cadd;
    }
    .navbar-brand {
        display: inline-block;
        width:250px;
        height:60px;
        margin-right: 0;
        text-align:center;
        padding: 15px 0;
        color: #fff;
        background-color:#FF4500;
    }
    .b-r-1 {
        border-right: 1px solid #e1e6ef !important;
    }
    .form-control {
        margin-left: 6px;
    }

    /* sidebar */
    .sidebar-fixed .sidebar {
        position: fixed;
        height: 100%;
    }
    .app-body .sidebar {
        -webkit-box-flex: 0;
        flex: 0 0 250px;
        order: -1;
    }
    .sidebar-fixed .sidebar .sidebar-nav {
        height: calc(100vh - 60px);
    }
    .sidebar .sidebar-nav {
        position: reative;
        overflow-x: hidden;
        overflow-y: auto;
        width: 250px;
        background: #444d50;
        border-right: 1px solid #2c3334;
        border-left: 1px solid #2c3334;
    }
    .sidebar ul.nav {
        width: 250px;
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        flex-direction: column !important;
    }
    .sidebar ul.nav li.nav-item {
        position: relative;
        margin:0;
        transition: background .3s ease-in-out;
    }
    .sidebar ul.nav li.nav-item span {
        display: block;
        padding: .75rem 1rem;
        color: #fff;
        text-decoration: none;
        background: transparent;
        cursor: pointer;
    }
    .sidebar ul.nav li.nav-item span::before {
        position: absolute;
        top: .96875rem;
        right: 1rem;
        display:block;
        width: .875rem;
        height: .875rem;
        padding: 0;
        font-size: .875rem;
        line-height: .65625rem;
        text-align: center;
        content: "\2039";
        transition: 0.3s;
    }
    .sidebar ul.nav li.nav-item.open span::before {
        transform: rotate(-90deg);
    }
    /*sidebar submenu*/
    .sidebar .has-sub.active > .sub-menu {
        display: block;
    }
    .sidebar .sub-menu:before {
        content: '';
        display: block;
        position: absolute;
        left: 36px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: #24292e;
    }
    .sidebar .sub-menu {
        list-style-type: none;
        padding: 10px 0 10px 45px;
        margin: 0;
        background: #30373e;
        position: relative;
        display: none;
        font-size: 12.5px;
    }
    .sidebar .sub-menu .sub-menu {
        padding: 0 0 0 30px;
        background: none;
    }
    .sidebar .sub-menu .sub-menu:before {
        left: 21px;
    }
    .sidebar .sub-menu > li > a {
        padding: 5px 20px;
        display:block;
        color: #8a8f94;
        text-decoration: none;
        position: relative;
    }
    .sidebar .sub-menu > li > a:before {
        content: '\f111';
        font-family: FontAwesome;
        position: absolute;
        left: 0;
        font-size: 7px;
        color: #4f555a;
        top: 50%;
        margin-top: -6px;
        margin-left: -10px;
    }
    .sidebar .sub-menu > li > a:hover:before,
    .sidebar .sub-menu > li > a:focus:before {
        color: #8a8f94;
    }
    .sidebar .sub-menu > li > a:hover,
    .sidebar .sub-menu > li > a:focus,
    .sidebar .sub-menu > li.active > a,
    .sidebar .sub-menu > li.active > a:hover,
    .sidebar .sub-menu > li.active > a:focus,
    .sidebar .nav > li li.has-sub.active > a {
        color: #fff;
    }
    .sidebar .sub-menu > li.active > a:before {
        color: #1abc9c;
    }
    .sidebar .nav .sub-menu > li > a .caret {
        float: right;
        margin-top: 7px;
    }
    /* contents */
    .contents {
        margin-left: 250px;
        padding:25px;
        position:relative;
        min-height:100%;
        width:100%;
        background: rgba(255,69,0, 0.1);
    }
</style>
