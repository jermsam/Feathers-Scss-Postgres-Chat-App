<template>
  <q-chat-message
    :text= "text"

    id="SentMessage"
    stamp="10:00am"
  />
</template>

<script setup>
defineProps( {
  text: {
    type: Array,
    default(){
      return ['hey, how are you?']
    }
    },
  stamp : {String,
    required: true
  },
})
</script>

<style scoped lang="scss">
#SentMessage{
  background:var(--q-secondary);
  border: 1 solid var(--q-dark);
  width: 15.125em;
  height: 3.5em;
  border-radius: 36px  0 36px 36px;
  padding-left: 80px;

  &:deep(.q-message-text) {
    position: unset;
    background: unset;

  }

}


</style>
