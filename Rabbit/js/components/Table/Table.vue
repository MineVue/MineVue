<template>
    <div class="card">
        <div class="card-header">
            {{ title }}
        </div>
        <div class="card-block">
            <table class="table table-td-valign-middle"
                v-bind:class="{
                    'table-bordered': isBorder,
                    'table-hover': isHover,
                    'table-striped': isStriped,
                    'table-responsive': isResponsive
                }"
            >
                <thead v-bind:class="'thead-'+ headerType">
                    <tr v-bind:class="'bg-' + headerType">
                        <th>no</th>
                        <th>name</th>
                        <th>email</th>
                        <th>gender</th>
                        <th>language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list">
                        <th scope="row">{{item.no}}</th>
                        <td>{{item.name}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.gender}}</td>
                        <td>{{item.language}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import store from '../../store';

    export default {
        props: ['title','headerType', 'isHover', 'isBorder', 'isStriped', 'isResponsive'],
        data() {
            return {
                list: this.$select('main').people
            }
        },
        mounted() {
            store.actions.fetchUserList();
        }
    }
</script>
<style>
    .card .card-block .table .bg-primary,
    .card .card-block .table .bg-success,
    .card .card-block .table .bg-warning,
    .card .card-block .table .bg-danger,
    .card .card-block .table .bg-info {
        color:#fff;
    }
</style>