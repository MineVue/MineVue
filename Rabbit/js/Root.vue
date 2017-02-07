<template>
    <div id="root">
        <hello></hello>
    </div>
</template>

<script>
    import Hello from './components/Hello/Hello.vue';

    export default {
        name: 'root',
        components: {
            Hello
        }
    }
</script>
