<template>
  <q-icon :name="name" :size="size" color="dark" />
</template>

<script setup>
 defineProps({
   name : {
     type: String,
     required: true
   },
   size :  {
     type: String,
     default:'16px'
   },
 })
</script>

<style scoped lang="scss">


</style>
