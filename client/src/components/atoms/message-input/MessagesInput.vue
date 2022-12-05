<template>
  <q-input rounded outlined
           v-model="text"
           label="type your message here..."
           id="MessagesInput"


  >
    </q-input>

</template>

<script>

</script>

<style scoped lang="scss">

#MessagesInput{
  width: 19.5em;
  height:2.313em;
  border-radius: 19px;
  border: 1 solid var(--q-dark);
  &:deep(.q-field) {
   line-height: 1.188em;
   font-size: 1em;
 }
}

</style>
