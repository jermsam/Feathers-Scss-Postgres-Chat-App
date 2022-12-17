<template>
  <q-input label-slot rounded outlined v-model="text" id="TextInputs">
    <template #label>
      <slot name="label">
      </slot>
    </template>

    <template #append>
      <slot name="append">
      </slot>
    </template>

    <template #prepend>
      <slot name="prepend">
      </slot>
    </template>


  </q-input>
</template>

<script setup lang="ts">
import {ref} from 'vue'

let text = ref('')
</script>

<style scoped lang="scss">
.q-field {
  width: 24.869em;
  //height: 3.75em;
  border-radius: 31px;
  border: 1px solid var(--q-dark);

  &:deep(.q-field__control ) {
    border:0;
   color: var(--dark);
   &:before{
     border: 0;

   }
  }


  &:deep(.q-field--outlined) {
    border:0;
    transition: var(--q-dark) 0.36s cubic-bezier(0.0, 0, 0.0, 0);

  }


}
</style>
