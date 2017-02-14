<template>
    <div>
        <CommentInput />
        <CommentList :list='this.$store.state.comments_A'/>
        <CommentList :list='this.$store.state.comments_B'/>
    </div>
</template>

<script>
import CommentList from './CommentList.vue';
import CommentInput from './CommentInput.vue';

export default {
    components: { CommentList, CommentInput }
};
</script>
