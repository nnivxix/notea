<script setup lang="ts">
import formatTime from "../utils/formatTime";
import type { Note } from "../types";

const { note } = defineProps<{
  note: Note;
}>();
</script>
<template>
  <RouterLink
    :to="{
      name: 'notes.uid',
      params: { uid: note.id },
    }"
    :key="note.id"
    class="p-4 bg-white rounded-xl shadow col-span-2"
    :class="[note.color ? note.color : 'bg-white']"
  >
    <time :datetime="note.updatedAt as string" class="text-gray-400 text-sm">{{
      formatTime(note.updatedAt as string)
    }}</time>
    <h2 class="text-xl font-bold line-clamp-1">{{ note.title }}</h2>
    <div
      class="mt-2 max-h-32 overflow-hidden"
      v-html="note.content"
      ref="contentEl"
    />
  </RouterLink>
</template>
