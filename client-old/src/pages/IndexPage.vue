<template>
  <q-page>
<!--                  buttons-->
  <div>
  <m-primary-button>
    Sign Up
  </m-primary-button>
  </div>

    <div>
      <m-primary-button>
        Login
      </m-primary-button>
    </div>

    <div>
      <m-primary-button>
        Submit
      </m-primary-button>
    </div>
<!--                           icons-->
    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-right-from-bracket"/>
      </m-call-icon>
    </div>

    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-magnifying-glass"/>
      </m-call-icon>
    </div>

    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-plus"/>
      </m-call-icon>
    </div>

    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-microphone"/>
      </m-call-icon>
    </div>

    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-paper-plane-top"/>
      </m-call-icon>
    </div>

    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-user-plus"/>
      </m-call-icon>
    </div>

    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-users-medical"/>
      </m-call-icon>
    </div>
    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-video"/>
      </m-call-icon>
    </div>
    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-phone"/>
      </m-call-icon>
    </div>
    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-chevron-left"/>
      </m-call-icon>
    </div>
    <div>
      <m-call-icon>
        <q-icon name="fa-solid fa-camera"/>
      </m-call-icon>
    </div>


<!--                                input-->
  <div>
    <m-text-input>
      <q-input model-value="">
       password:
      </q-input>
    </m-text-input>
  </div>

  <div>
    <m-text-input>
      <q-input model-value="">
        phone number:
      </q-input>
    </m-text-input>
  </div>


  </q-page>


</template>


<script setup>
import MPrimaryButton from "components/atoms/buttons/MPrimaryButton";
import MCallIcon from "components/atoms/icon/MCallIcon";
// import MDisplayPicture from "components/atoms/illustrations/MDisplayPicture";
import MTextInput from "components/atoms/text-inputs/MTextInput"


</script>
