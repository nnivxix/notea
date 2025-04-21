<script setup lang="ts">
import { useNotes } from "../composables/useNotes";

const { notes } = useNotes();
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <RouterLink
      v-for="note in notes"
      :to="{
        name: 'notes.uid',
        params: { uid: note.id },
      }"
      :key="note.id"
      class="p-4 bg-white rounded-xl shadow"
    >
      <h2 class="text-xl font-bold">{{ note.title }}</h2>
      <p class="mt-2">{{ note.content }}</p>
    </RouterLink>
  </div>
</template>
