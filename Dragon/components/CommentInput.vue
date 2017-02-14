<template>
    <div>
        <input type="text" v-model="msg"/>
        <button type="button" :click="onClickA">add to A</button>
        <button type="button" :click="onClickB">add to B</button>
    </div>
</template>

<script>
export default {
    data: {
        msg: ''
    },
    method: {
        onClickA: function (e) {
            $store.commit('addCommentToA', {
                msg: this.msg
            })
        },
        onClickB: function (e) {
            $store.commit('addCommentToB', {
                msg: this.msg
            })
        }
    }
};
</script>