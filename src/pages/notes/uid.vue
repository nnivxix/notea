<script setup lang="ts">
import { useRoute } from "vue-router";
import Editor from "../../components/Editor.vue";
import { useNotes } from "../../composables/useNotes";

const route = useRoute();
const { uid } = route.params;

const { getNote } = useNotes();

const content = getNote(uid as string);

const updateTitle = (event: Event) => {
  const target = event.target as HTMLElement;
  content.title = target.textContent || "";
};
</script>
<template>
  <div>
    <h1
      class="text-xl font-bold mx-4"
      contenteditable
      @input="updateTitle($event)"
      @keydown.enter.prevent
    >
      {{ content.title }}
    </h1>
    <Editor v-model:content="content.content" />
  </div>
</template>
