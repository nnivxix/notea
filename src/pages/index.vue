<script setup lang="ts">
import NoteCard from "../components/NoteCard.vue";
import { onMounted, ref } from "vue";
import { getAll } from "../utils/indexedDB";

const notes = ref();

onMounted(async () => {
  notes.value = await getAll();
});
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <NoteCard v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>
