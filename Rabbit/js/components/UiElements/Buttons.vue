<template>
    <button
        type="button"
        class="btn"
        v-bind:class="'btn-' + (isOutline ? 'outline-' : '') + style + (isBlock ? ' btn-block' : '') + ( ' btn-' + (size === 'large' ? 'lg' : (size === 'small' ? 'sm' : 'md')))"
        v-bind:disabled="isDisabled"
        v-on:click="click($event)"
    >
        <i class="fa" v-bind:class="(isWithIcon ? '' : 'hidden') + ('fa-' + iconName)"></i>
        {{ message }}
    </button>
</template>
<script>
    export default {
        props: ['isWithIcon', 'iconName', 'isOutline', 'message', 'style', 'size', 'isBlock', 'isDisabled', 'click'],
        mounted() {

            console.log(this.message);
            // this.transpillMessage();
        },
        methods: {
            transpillMessage: function () {
                return $('.btn' ).html(this.message);
            }
        }
    }
</script>
<style>

</style>