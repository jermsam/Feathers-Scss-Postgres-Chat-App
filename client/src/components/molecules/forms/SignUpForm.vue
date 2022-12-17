<template>
  <div style="max-width: 26.75em; border: 1px solid black;" class="column items-center">
  <div style="margin-bottom: 1em; align-content: center;">
    <text-inputs>
    <template #label>
      phone number
    </template>
  </text-inputs>
  </div>

  <div style="margin-bottom: 1em">
    <text-inputs>
    <template #label>
      password
    </template>
    <template #append>
    <m-icon name="fa-solid fa-eye"/>
    </template>
  </text-inputs>

  </div>

    <div style="margin-bottom: 6.563em">
    <text-inputs>
    <template #label>
       Confirm password
    </template>
    <template #append>
    <m-icon name="fa-solid fa-eye"/>
    </template>
  </text-inputs>
    </div>

  <primary-button>
    Sign Up
  </primary-button>
  <p  style="text-align: center;">Already registered,<a style="color: blue">login</a></p>
  </div>
</template>

<script setup>
import PrimaryButton from '../../atoms/buttons/PrimaryButton.vue';
import TextInputs from '../../atoms/text-inputs/TextInputs.vue';
import MIcon from '../../atoms/icons/MIcon.vue';

</script>

<style scoped>

</style>
