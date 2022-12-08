<template>
  <main>
    <h1>Welcome to your your sandbox environment</h1>
    <TestComponent />
    <br/>
    <Input
      label="firstname"
      :input-attributes="{
        placeholder: 'Enter your firstname...',
        type: 'text',
        autocomplete: 'given-name',
      }"
    >
      First-name
    </Input>
  </main>
</template>

<script lang="ts" setup>
  import TestComponent from '../src/lib/ButtonComponent.vue';
  import Input from '../src/lib/InputComponent.vue';
</script>

<style lang="scss" scoped></style>
