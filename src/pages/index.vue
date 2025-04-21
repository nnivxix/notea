<script setup lang="ts">
import NoteCard from "../components/NoteCard.vue";
import { useNotes } from "../composables/useNotes";

const { notes } = useNotes();
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <NoteCard v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>
