<template>
  <q-input label-slot rounded outlined v-model="text" id= "TextInput">
    <template #label>
      <slot name="label">

      </slot>
    </template>
    <template #append>
      <slot name="append">

      </slot>
    </template>

  </q-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let text = ref('')
</script>

<style scoped lang="scss">
#TextInput {
  width: 24.869em;
  height: 3.75em;
  border-radius: 31px;
  border: 1 solid var(--q-dark);
  &:deep(.q-field--labeled ) {
    line-height: 1.125em;
    font-size:0.875em;

  }
}
</style>
