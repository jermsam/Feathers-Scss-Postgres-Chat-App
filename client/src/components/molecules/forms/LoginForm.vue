<template>
  <div style="border: 1px solid black; max-width:26.75em;" class="column items-center">
  <div style="margin-bottom:1.563em;">
  <text-inputs>
    <template #label>
      phone number
    </template>
  </text-inputs>
    </div>
  <div style="margin-bottom:0.875em">
    <text-inputs>
    <template #label>
       password
    </template>
    <template #append>
      <m-icon name="fa-solid fa-eye"/>
    </template>
  </text-inputs>
  </div>
  <div style="margin-bottom:8.375em">
  <p style="color: blue; text-align: center;">forgot password</p>
  </div>
  <div style="margin-bottom:16px">
  <primary-button>
    Login
  </primary-button>
  </div>
  <div>
    <p style="text-align: center;">Not registered, <a style="color: blue">SignUp</a></p>
  </div>
  </div>
</template>

<script setup>
import TextInputs from '../../atoms/text-inputs/TextInputs.vue';
import PrimaryButton from '../../atoms/buttons/PrimaryButton.vue';
import MIcon from '../../atoms/icons/MIcon.vue';
</script>

<style scoped>

</style>
