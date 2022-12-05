<template>
  <q-page class="row items-center justify-evenly">
    <div>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>

      <div class="column q-gutter-md">

        <div class="column q-gutter-sm">
          <h3>Atoms</h3>
          <primary-button/>
          <m-icon name="fa-solid fa-chevron-left"/>
          <m-icon name="fa-solid fa-chevron-left" size="24px"/>
<!--                                       display-picture-->
          <p>Pictures</p>
            <div>
              <display-picture>
                 <img src="https://images.unsplash.com/photo-1596510915005-2cd3c22b37df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80">
              </display-picture>
              <display-picture>

                 <img src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80">
              </display-picture>
              <display-picture>
                <q-avatar>
                 <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
                </q-avatar>
              </display-picture>
              <display-picture>
                <q-avatar>
                 <img src="https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80">
                </q-avatar>
              </display-picture>
              <display-picture>
                <q-avatar>
                 <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
                </q-avatar>
              </display-picture>
              <display-picture>
                <q-avatar>
                 <img src="https://images.unsplash.com/photo-1614251056798-0a63eda2bb25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
                </q-avatar>
              </display-picture>
            </div>


          <div>
            <splash-image/>
          </div>

          <messages-input/>

        </div>
<!--        <div>-->
<!--        <sender-message/>-->
<!--        </div>-->
        <div class="column q-gutter-sm">
          <h3>Molecules</h3>

        </div>
        <div class="column q-gutter-sm">
          <h3>Organisms</h3>

        </div>

      </div>
    </div>


  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';
import PrimaryButton from 'components/atoms/buttons/PrimaryButton.vue';
import MIcon from 'components/atoms/icons/MIcon.vue';
import DisplayPicture from 'components/atoms/illustrations/DisplayPicture.vue';
import SplashImage from 'components/atoms/illustrations/SplashImage.vue';
import MessagesInput from 'components/atoms/message-input/MessagesInput.vue';
// import SenderMessage from 'components/atoms/messages/SenderMessage.vue';

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);
const meta = ref<Meta>({
  totalCount: 1200
});
</script>
