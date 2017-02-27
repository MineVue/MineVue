<template>
    <div class="tableWrapper">
        <tableComponent
            :title.sync="'Default Table'"
            :headerType.sync="'default'"
            :isHover.sync="false"
            :isBorder.sync="false"
            :isStriped.sync="false"
            :isResponsive.sync="false"
        ></tableComponent>
        <div class="divider"></div>
        <tableComponent
            :title.sync="'All Options On Table'"
            :headerType.sync="'default'"
            :isHover.sync="true"
            :isBorder.sync="true"
            :isStriped.sync="true"
            :isResponsive.sync="true"
        ></tableComponent>
        <div class="divider"></div>
        <tableComponent
            :title.sync="'Hovered Table'"
            :headerType.sync="'default'"
            :isHover.sync="true"
            :isBorder.sync="false"
            :isStriped.sync="false"
            :isResponsive.sync="false"
        ></tableComponent>
        <div class="divider"></div>
        <tableComponent
            :title.sync="'Bordered Table'"
            :headerType.sync="'default'"
            :isHover.sync="false"
            :isBorder.sync="true"
            :isStriped.sync="false"
            :isResponsive.sync="false"
        ></tableComponent>
        <div class="divider"></div>
        <tableComponent
            :title.sync="'Striped Table'"
            :headerType.sync="'default'"
            :isHover.sync="false"
            :isBorder.sync="false"
            :isStriped.sync="true"
            :isResponsive.sync="false"
        ></tableComponent>
        <div class="divider"></div>
        <tableComponent
            :title.sync="'Responsive Table'"
            :headerType.sync="'default'"
            :isHover.sync="false"
            :isBorder.sync="false"
            :isStriped.sync="false"
            :isResponsive.sync="true"
        ></tableComponent>
    </div>
</template>
<script>
    import * as tableComponent from '../../components/Table/Table.vue';
    export default {
        components: {
            tableComponent
        }
    }
</script>
<style>
    .tableWrapper .divider {
        width: 100%;
        height: 5px;
    }
</style>