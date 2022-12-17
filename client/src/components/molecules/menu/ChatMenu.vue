<template>
  <q-bar style="
  max-width: 26.75em;
   height: 6.563em;
    border: 1px solid var(--q-dark);"
         class="bg-white text-dark">
    <div class="cursor-pointer non-selectable" style="padding:0 37px 0 0">
      <q-btn style="color: var(--q-dark)" dense flat icon="fa-solid fa-chevron-left"/>
    </div>

    <div class="cursor-pointer non-selectable">
      <display-picture>
        <img style="object-fit: cover; border:3px solid #09cc09;"
          src="https://images.unsplash.com/photo-1596510915005-2cd3c22b37df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="profile picture">
      </display-picture>
    </div>
    <h6 style="font-weight: 600; padding-left: 15px;">Mom</h6>
    <q-space/>

    <q-btn style="color: var(--q-dark)" dense flat icon="fa-solid fa-phone"/>
    <q-btn style="color: var(--q-dark)" dense flat icon="fa-solid fa-magnifying-glass"/>
  </q-bar>
</template>


<script setup>
import DisplayPicture from '../../atoms/illustrations/DisplayPicture.vue';

</script>

<style scoped>

</style>
