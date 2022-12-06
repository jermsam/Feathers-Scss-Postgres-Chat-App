<template>
  <q-chat-message
    :text= "text"
    id="MyMessage"
    stamp ="9:00am"
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
#MyMessage{
  background: lightgrey;
  border: 1 solid var(--q-dark);
  width: 15.125em;
  height: 3.5em;
  border-radius: 0 36px 36px 36px;
  &:deep(.q-message-text){
  position: unset;
  background: unset;

}
}


</style>
