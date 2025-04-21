<script setup lang="ts">
import { useRoute } from "vue-router";
import Editor from "../../components/Editor.vue";
import { useNotes } from "../../composables/useNotes";

const route = useRoute();
const { uid } = route.params;

const { getNote } = useNotes();

const content = getNote(uid as string);
</script>
<template>
  <div>
    <Editor v-model:content="content.content" />
  </div>
</template>
