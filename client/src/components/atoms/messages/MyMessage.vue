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
      return ['Lorem ipsum dolor sit amet, consectetur n ullamco']
    }
  },
  stamp : {
    type: String,
    required: true
  },
})
</script>

<style scoped lang="scss">
#MyMessage {
 max-width: 60%;
  &:deep(.q-message-text--received) {
    color: white;
    border-radius: 0 36px 36px 36px;
    padding: 1rem;
    border: 1px solid var(--q-dark);
  }

  &:deep(.q-message-text::before) {
    content: none;
  }
}

</style>
