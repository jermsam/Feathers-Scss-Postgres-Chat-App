<template>
  <q-icon :name="name" :size="size" color="dark" clickable/>
<!--  <q-btn flat round color="primary" icon="fa-solid fa-chevron-left" />-->
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
