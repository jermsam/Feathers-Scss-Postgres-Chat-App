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
      return ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco']
    }
    },
  stamp : {
    type: String,
    required: true
  },
})
</script>

<style scoped lang="scss">
#SentMessage{
 max-width: 60%;
  &:deep(.q-message-text--received){
    color: var(--q-secondary);
    border-radius: 36px  0 36px 36px;
    padding: 1rem;
    text-align: right;
  }
  &:deep(.q-message-text::before){
  content: none;
  }

}


</style>
