<template>
  <q-chat-message
    :text= "text"
    sent
    id="SenderMessage"
  />
</template>

<script>
defineProps( {
  text: {
    type: Array,
    default(){
      return ['hey, how are you?']
    }
  },
})
</script>

<style scoped lang="scss">



</style>
