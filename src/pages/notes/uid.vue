<script setup lang="ts">
import { useRoute } from "vue-router";
import Editor from "../../components/Editor.vue";
import { useNotes } from "../../composables/useNotes";
import { onUnmounted } from "vue";
import { save } from "../../utils/indexedDB";

const route = useRoute();
const { uid } = route.params;

const { getNote } = useNotes();

const content = await getNote(uid as string);

const updateTitle = (event: Event) => {
  const target = event.target as HTMLElement;
  content.title = target.textContent || "";
};

onUnmounted(async () => {
  await save(content);
});
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
