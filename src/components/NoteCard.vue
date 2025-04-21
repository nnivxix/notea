<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import formatTime from "../utils/formatTime";
import { computed, useTemplateRef } from "vue";

const { note } = defineProps<{
  note: {
    id: string;
    title: string;
    content: string;
    created_at: string;
  };
}>();

const contentEl = useTemplateRef("contentEl");

const { width, height } = useElementSize(contentEl);

const rowEnd = computed(() => {
  let rows = Math.ceil(height.value / width.value);

  if (rows > 2) {
    rows = 2;
  }
  return `span ${rows}`;
});
</script>
<template>
  <RouterLink
    :to="{
      name: 'notes.uid',
      params: { uid: note.id },
    }"
    :key="note.id"
    class="p-4 bg-white rounded-xl shadow"
    :style="{
      'grid-row-end': rowEnd,
    }"
  >
    <time :datetime="note.created_at" class="text-gray-400 text-sm">{{
      formatTime(note.created_at)
    }}</time>
    <h2 class="text-xl font-bold line-clamp-1">{{ note.title }}</h2>
    <div
      class="mt-2 max-h-72 overflow-hidden"
      v-html="note.content"
      ref="contentEl"
    />
  </RouterLink>
</template>
