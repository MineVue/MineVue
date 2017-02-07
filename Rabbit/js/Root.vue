<template>
    <div class="container row" id="root">
       <div class="col-md-2 col-lg-2 left-side">
            <nav>
                <ul class="nav sidebar-nav">
                    <li>
                        <a href="#">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            번호내역
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            가입현황
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            웹 사용현황
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            모바일 사용 현황
                        </a>
                    </li>
                </ul>
            </nav>
       </div>
       <div class="col-md-12 col-lg-12  contents-wrapper">
            <router-view></router-view>
       </div>
    </div>
</template>

<style>
    html, body, .container {height: 100%;}
    .container {
        display:table;
        width:100%;
        margin: 0;
        padding: 0;
    }
    .container .left-side {
        display:table-cell;
        float: none;
        background: #000;
        padding:0;
    }
    .container .content-wrapper {
        display: table-cell;
        float: none;
    }
    .container .left-side a {
        color: #BDBDBD;
        text-align: center;
        padding: 15px 0;
        text-decoration: none;
    }
    .container .left-side a:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    .container .contents-wrapper {
        background: #ECEFF1;
        height:100%;
    }
    a:active, a:visited {
        background: #000;
    }
</style>