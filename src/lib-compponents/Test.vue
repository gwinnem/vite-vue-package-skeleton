<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button
      type="button"
      @click="count++">
      count is {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  defineProps({
    msg: {
      default: ``,
      type: String,
    },
  },
  );

  const count = ref(0);
</script>

<style scoped>
h1 {
  color: #7e22ce;
}
</style>
