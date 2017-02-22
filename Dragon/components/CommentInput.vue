<template>
    <div>
        <input type="text" v-model="msg"/>
        <button type="button" v-on:click="onClickA">add to A</button>
        <button type="button" v-on:click="onClickB">add to B</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            msg: ''
        }
    },
    methods: {
        onClickA () {
            this.$store.commit('addCommentToA', {
                msg: this.msg
            })
        },
        onClickB () {
            this.$store.commit('addCommentToB', {
                msg: this.msg
            })
        }
    }
};
</script>