<template>
  <q-btn unelevated rounded color="primary"  id="PrimaryButton">
    <slot> Submit </slot>
  </q-btn>
</template>

<script setup>


</script>

<style scoped lang="scss">
#PrimaryButton{
  width: 24.75em;
  height:4.125em;
  border-radius: 31px;
  border: 1 solid var(--q-dark);
 &:deep(.q-btn__content) {
   line-height: 1.188em;
   font-size: 1em;
 }
}

</style>
