<template>
  <div class="main">
    <input type="text" v-model="text" />
    <div class="hello">Hello {{ text }}!</div>
  </div>
</template>

<script>
  export default {
    replace: false,
  	data() {
      return {
        text: 'vue'
      }
    }
  }
</script>
