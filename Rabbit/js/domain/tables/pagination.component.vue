<template>
    <div class="paginationWrapper">
        <div class="card">
            <div class="card-header">
                Pagination
            </div>
            <div class="card-block">
                <pagination
                    :page.sync="{ page }"
                    :size.sync="20"
                    :totalCount.sync="150"
                    :route="'/#/tables/pagination'"
                >
                </pagination>
            </div>
        </div>
    </div>
</template>
<script>
    import Pagination from '../../components/Table/Pagination.vue';
    export default {
        data() {
            return {
                page: this.$route.query.page || 1
            }
        },
        mounted() {
            console.log('mounted');
        },
        components: {
            pagination: Pagination
        }
    }
</script>
<style></style>