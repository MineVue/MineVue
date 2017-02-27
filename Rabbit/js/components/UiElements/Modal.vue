<template>
    <div class="btn-wrapper">
        <button type="button" class="btn" v-bind:class="'btn-' + style" data-toggle="modal" data-target="#exampleModal">
          {{ text }}
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                    </div>
                    <div class="modal-body">
                        {{ message }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" v-for="item in buttons" v-on:click="item.action()" v-bind:class="'btn-' + item.style">
                            {{ item.text }}
                        </button>
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                        <button type="button" class="btn btn-primary">저장</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['text', 'title', 'style', 'message', 'buttons']
    }
</script>
<style>
    .btn-wrapper {
        display: inline-block;
    }
</style>