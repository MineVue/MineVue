<template>
<ul class="pagination">
    <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item" v-bind:class="{ active: currentPage == n }" v-for="n in count">
        <a class="page-link"  v-bind:href="route+'?page='+n">{{ n }}</a>
    </li>
    <li class="page-item">
        <a class="page-link">Next</a>
    </li>
</ul>
</template>
<script>
    export default {
        props: ['page', 'size', 'totalCount', 'route'],
        data() {
            console.log(this.page)
            return {
                count: Math.floor(this.totalCount / this.size),
                currentPage: this.page.page
            }
        }
    }
</script>
<style>
</style>