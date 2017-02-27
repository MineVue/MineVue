<template>
    <div class="pace-top">
        <div id="page-container" class="page-container page-side-bar-fixed page-with-two-sidebar">
            <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="#">CM ADMIN</a>
            </nav>
            <div id="sidebar" class="sidebar">
                <nav class="sidebar-nav">
                    <ul class="nav">
                        <li class="nav-title has-sub" v-bind:class="{ active: activeMenu === menu.active}" v-for="menu in menuList" key="index">
                            <router-link v-on:click.native="slidingSubMenu($event)" v-bind:to="menu.link">
                                {{menu.title}}
                            </router-link>
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
            <div class="sidebar-bg"></div>
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
        updated() {
          console.log('update');
          console.log(this.$select('main'));
        },
        methods: {
            slidingSubMenu (e) {
                e.preventDefault();
                const $target = $(e.target);
                const $parent = $target.parent();
                const $subMenu = $target.next('.sub-menu');
                const $otherSubMenu = $('.sidebar .nav > li.has-sub > .sub-menu');
                const no = $parent.data('no');

                // if (no === this.activeMenu) {
                //     this.activeMenu = 0;
                // } else {
                //     this.activeMenu = no;
                // }
                $otherSubMenu.not($subMenu).slideUp(250, () => {
                });

                $subMenu.slideToggle(250, () => {
                });
            }
        }
    }
</script>
<style>
    html, body, .page-container {
        height: 100%;
    }

    body {
        font-family: sans-serif;
        font-size: 13px;
        background: #d5d8da;
        color: #30373e;
    }

    .pace-top {
        height:100%;
    }

    .animated {
        -webkit-animation-duration: .6s;
        animation-duration: .6s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .fade {
        opacity: 0;
        -webkit-transition: opacity .3s linear;
        transition: opacity .3s linear;
    }

    .page-header-fixed {
        padding-top: 51px;
    }
    .page-with-top-menu.page-header-fixed {
        padding-top: 100px;
    }
    @media (max-width: 767px) {
        .page-header-fixed {
            padding-top: 94px;
        }
        .page-with-top-menu.page-header-fixed {
            padding-top: 94px;
        }
    }
    .conatainer,
    .conatainer-fluid {
        padding-left: 20px;
        padding-right: 20px;
    }

    /*boxed-layout*/

    @media (min-width: 768px) {
        .boxed-layout .pace {
            position: fixed;
            top: 51px;
            left: 50%;
            width: 1024px;
            margin-left: -512px;
            height: 30px;
            overflow: hidden;
        }
        .boxed-layout .pace .pace-progress {
            position: absolute !important;
            top: 0;
        }
        .boxed-layout .pace .pace-activity {
            position: absolute;
            top: 15px;
        }
        .boxed-layout .page-container {
            position: relative;
            width: 1024px;
            margin: 0 auto;
            min-height: 100%;
            box-shadow: 0 2px 24px rgba(0,0,0,0.4);
            background: #d5d8da;
        }
        .boxed-layout .header,
        .boxed-layout .top-menu,
        .boxed-layout .container,
        .boxed-layout .container-fluid {
            width: 1024px;
            max-width: 1024px;
        }
        .boxed-layout .header,
        .boxed-layout .top-menu {
            right: auto;
        }
        .boxed-layout .header,
        .boxed-layout .top-menu,
        .boxed-layout .sidebar,
        .boxed-layout .sidebar-bg {
            left: auto;
        }
        .boxed-layout .page-with-right-sidebar.page-with-two-sidebar .sidebar.sidebar-right,
        .boxed-layout .page-with-right-sidebar.page-with-two-sidebar .sidebar-bg.sidebar-right {
            position: fixed;
            right: -250px;
        }
        .boxed-layout .page-with-right-sidebar .sidebar,
        .boxed-layout .page-with-right-sidebar .sidebar-bg,
        .boxed-layout .page-with-two-sidebar.page-right-sidebar-toggled .sidebar.sidebar-right,
        .boxed-layout .page-with-two-sidebar.page-right-sidebar-toggled .sidebar-bg.sidebar-right,
        .boxed-layout .page-with-top-menu .top-menu {
            position: absolute;
            right: 0;
        }
        .boxed-layout .page-with-top-menu.page-container {
            overflow: hidden;
        }
    }
    /*
        Header
    */
    .navbar {
        border: none;
        font-size: 14px;
        -webkit-box-shadow: 0 1px rgba(0,0,0,0.025);
        box-shadow: 0 1px rgba(0,0,0,0.025);
        z-index: 1040;
        margin-bottom: 0;
    }
    .navbar-nav > li > a {
        line-height: 26px;
    }
    .navbar-nav > li > a:hover,
    .navbar-nav > li > a:focus,
    .navbar .navbar-nav > .open > a,
    .navbar .navbar-nav > .open > a:focus,
    .navbar .navbar-nav > .open > a:hover {
        background: none;
        color: #333;
    }
    .navbar-nav > li > a.has-notify {
        position: relative;
    }
    .navbar-nav > li > a.has-notify:before {
        content: '';
        position: absolute;
        top: 14px;
        right: 11px;
        width: 11px;
        height: 11px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: #1abc9c;
        z-index: 10;
        opacity: 1;
        transition: all .2s linear;
    }
    .navbar-nav > li > a.has-notify.read:before {
        opacity: 0;
        background: none;
        width: 0;
        height: 0;
    }
    @media (max-width: 767px) {
        .navbar {
            min-height: 48px !important;
        }
        .navbar-nav {
            margin: 0;
        }
        .navbar-right {
            float: right;
        }
        .navbar-nav > li {
            float: left;
        }
        .navbar-nav > li + li {
            margin-left: 15px;
        }
        .navbar-nav > li > a {
            padding-left: 8px;
            padding-right: 8px;
        }
        .navbar-toggle {
            border: none;
            padding: 16px 15px;
            margin: 0;
            background: none;
            border-radius: 0;
        }
        .navbar-nav > li > a.has-notify:before {
            top: 11px;
            right: 4px;
        }
    }
    @media (max-width: 480px) {
        .navbar-nav > li + li {
            margin-left: 5px;
        }
    }

    /*navbar header*/
    .navbar-header {
        width: 230px;
    }
    @media (max-width: 767px) {
        .navbar-header {
            width: auto;
            border-bottom: 2px solid #EAEDEF;
        }
    }

    /*navbar-form*/
    .navbar-form {
        margin: 11px 0;
        position: relative;
    }
    .navbar-form .form-control {
        -webkit-border-radius: 34px;
        -moz-border-radius: 34px;
        border-radius: 34px;
        padding-right: 33px;
    }
    .navbar-form .btn {
        background: none;
        border: none;
        color: #606D79;
        position: absolute !important;
        right: 15px;
        top: 0 !important;
        line-height: 22px;
        -webkit-border-radius: 0 30px 30px 0;
        -moz-border-radius: 0 30px 30px 0;
        border-radius: 0 30px 30px 0;
    }
    @media (max-width: 767px) {
        .navbar-form {
            border: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            margin: 0;
            padding: 8px 0;
        }
        .navbar-form .form-control {
            font-size: 12px;
            height: 30px;
        }
        .navbar-form .btn {
            top: 8px !important;
            line-height: 18px;
            right: 0;
        }
    }
    @media (max-width: 480px) {
        .navbar-form {
            width: 145px;
        }
    }

    /*sidebar*/
    .sidebar,
    .sidebar-bg {
        position: absolute;
        left: 0;
        top: 51px;
        background: #3C454D;
        width: 250px;
        font-size: 13px;
        font-weight: 300;
        z-index: 1010;
    }
    .sidebar .sidebar-nav ul {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
    }
    .sidebar .sidebar-nav ul li a {
        display: block;
    }
    .sidebar-bg {
        position: fixed;
        bottom: 0;
        z-index: 1000;
    }
    .page-sidebar-fixed .sidebar {
        position: fixed;
        bottom: 0;
    }
    @media (max-width: 767px) {
        .sidebar {
            width: 100%;
        }

        .sidebar-bg {
            display:none;
        }

        @keyframes sidebarSlideInLeft {
            from { left: -250px; }
            to { left: 0; }
        }
        @-webkit-keyframes sidebarSlideInLeft {
            from { left: -250px; }
            to { left: 0; }
        }

        .page-sidebar-toggled .sidebar {
            left: 0;
            animation: sidebarSlideInLeft .2s;
            -webkit-animation: sidebarSlideInLeft .2s;
        }
        .page-sidebar-toggled .sidebar-bg {
            position: fixed;
            left: 0;
            animation: sidebarSlideInLeft .2s;
            -webkit-animation: sidebarSlideInLeft .2s;
        }
    }

    /* 3.4 Sidebar - Page with Two Sidebar Setting */
    .page-with-two-sidebar.page-sidebar-fixed .sidebar.sidebar-right {
        position: fixed;
    }
    .page-with-two-sidebar .sidebar.sidebar-right,
    .page-with-two-sidebar .sidebar-bg.sidebar-right {
        right: -250px;
        left: auto;
    }
    .page-with-two-sidebar.page-sidebar-minified .sidebar.sidebar-right .nav-header,
    .page-with-two-sidebar.page-sidebar-minified .sidebar.sidebar-right .nav-user,
    .page-with-two-sidebar.page-sidebar-minified .sidebar.sidebar-right .nav-project {
        display: block;
    }
    @media (max-width: 767px) {
        @keyframes mobileSidebarSlideInRight {
            from { right: -250px; }
            to { right: 0; }
        }
        @-webkit-keyframes mobileSidebarSlideInRight {
            from { right: -250px; }
            to { right: 0; }
        }
        .page-with-two-sidebar .sidebar.sidebar-right,
        .page-with-two-sidebar .sidebar-bg.sidebar-right {
            right: -250px;
            -webkit-animation: none;
            animation: none;
        }
        .page-with-two-sidebar.page-right-sidebar-toggled .sidebar.sidebar-right,
        .page-with-two-sidebar.page-right-sidebar-toggled .sidebar-bg.sidebar-right {
            right: 0;
            left: auto;
            -webkit-animation: mobileSidebarSlideInRight .2s;
            animation: mobileSidebarSlideInRight .2s;
        }
    }
    .page-with-two-sidebar.page-sidebar-minified .sidebar.sidebar-right,
    .page-with-two-sidebar.page-sidebar-minified .sidebar-bg.sidebar-right {
        width: 250px;
        padding: 0;
    }
    .page-with-two-sidebar.page-right-sidebar-toggled .sidebar.sidebar-right,
    .page-with-two-sidebar.page-right-sidebar-toggled .sidebar-bg.sidebar-right {
        right: 0;
    }

    /*sidebar-menu*/
    .sidebar .nav > li:before,
    .sidebar .nav > li:after,
    .sidebar .nav > li > a:before,
    .sidebar .nav > li > a:after,
    .sidebar .nav > li > strong:after {
        content: '';
        display: table;
        clear: both;
    }

    .sidebar .nav > li > a {
        padding: 12px 20px;
        color: #b1b5b8;
    }

    .sidebar .nav > li.expand > a,
    .sidebar .nav > li > a:hover,
    .sidebar .nav > li > a:focus {
        background: #636a71;
    }

    .sidebar .nav > li.active > a,
    .sidebar .nav > li.active > a:hover,
    .sidebar .nav > li.active > a:focus {
        background: #24292e;
        color: #fff;
    }
    .sidebar .nav > li.active > a > i {
        color: #0F6655;
        background: #1abc9c;
    }
    .sidebar .nav > li.active > a > i:after {
        background: none;
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
    .router-link-active {
        color: #fff !important;
    }
    /* contents */
    .contents {
        margin-left: 250px;
        padding:25px;
        position:relative;
        min-height:100%;
    }

    @media (max-width: 767px) {
        .contents {
            margin: 0;
        }
    }
</style>
