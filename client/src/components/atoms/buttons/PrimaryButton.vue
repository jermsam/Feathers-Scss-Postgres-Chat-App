<template>
  <q-btn unelevated rounded color="primary"  id="PrimaryButton">
    <slot> Submit </slot>
  </q-btn>
</template>

<script setup>


</script>

<style scoped>
#PrimaryButton{
  width: 24.75em;
  height:4.125em;
  border-radius: 31px;
  border: 1 solid var(--q-dark);
}

</style>
