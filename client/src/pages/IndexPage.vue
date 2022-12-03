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
        </div>

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
import PrimaryButton from "components/atoms/buttons/PrimaryButton.vue";

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
