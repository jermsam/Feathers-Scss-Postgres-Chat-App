<template>
  <q-bar style="
  max-width: 26.75em;
   height: 6.563em;
    border: 1px solid var(--q-dark);"
         class="bg-white text-dark"
      id="MessageInputs">
    <div class="cursor-pointer non-selectable">
      <q-btn style="color: var(--q-dark)" dense flat icon="fa-solid fa-plus"/>
    </div>

    <div class="cursor-pointer non-selectable">
      <div >
        <text-inputs id="MessageTextInputs">
          <template #label>
          type your message here...
          </template>
          <template #append >
            <m-icon name="mdi-send" />
          </template>
        </text-inputs>
      </div>
    </div>
<!--    <h6 style="font-weight: 600; padding-left: 15px;">Mom</h6>-->
    <q-space/>

    <q-btn style="color: var(--q-dark)" dense flat icon="fa-solid fa-camera"/>
    <q-btn style="color: var(--q-dark)" dense flat icon="fa-solid fa-microphone"/>
  </q-bar>
</template>


<script setup>
import TextInputs from '../../atoms/text-inputs/TextInputs.vue';
import MIcon from '../../atoms/icons/MIcon.vue';
</script>

<style scoped lang="scss">
#MessageTextInputs{
  width :19.5em;
  height :2.313em;

}
</style>
