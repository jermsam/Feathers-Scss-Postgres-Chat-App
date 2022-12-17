<template>
  <q-avatar :src="src" id="DisplayPicture">
    <slot>

    </slot>
  </q-avatar>
</template>

<script setup>
defineProps({
  src: {
    type: String,
  },
})
</script>

<style scoped>

</style>
