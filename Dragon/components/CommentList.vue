<template>
<div class="app" style="border: 1px solid">
  <div v-for="msg in list">{{ msg }}</div>
</div>
</template>

<script>
export default {
  props: ['list']
};
</script>
