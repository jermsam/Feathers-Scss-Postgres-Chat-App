<template>
  <q-bar style="
  width: 26.75em;
  height: 6.563em;
    border: 1px solid var(--q-dark);"
         class="bg-white text-black "
   id="FeedMenu">
    <display-picture style="width:3em; height: 3em;">
      <img style="object-fit: cover;"
           src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
           alt="user image">
    </display-picture>
    <q-space/>
    <h6 style="font-weight: 600; color: var(--q-dark)">Messages</h6>
    <q-space/>

    <q-btn style="color: var(--q-dark)" flat icon="fa-solid fa-magnifying-glass"/>
    <q-btn style="color: var(--q-dark)" dense flat icon="fa-solid fa-right-from-bracket"/>
  </q-bar>
</template>


<script setup>
import DisplayPicture from '../../atoms/illustrations/DisplayPicture.vue';

</script>

<style scoped>
#FeedMenu{
  color: var(--q-dark);
}
</style>
