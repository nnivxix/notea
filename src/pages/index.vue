<script setup lang="ts">
import NoteCard from "../components/NoteCard.vue";
import { computed, onMounted, ref } from "vue";
import { Plus } from "lucide-vue-next";
import { getAll } from "../utils/indexedDB";
import nanoid from "../utils/nanoid";
import type { Note } from "../types";

const notes = ref<Note[]>();

const newNote = computed(() => "notes/" + nanoid());

onMounted(async () => {
  notes.value = await getAll();
  // notes.value = Array.from({ length: 30 }, (_, i) => ({
  //   id: i + 1,
  //   title: `Note ${i + 1}`,
  //   content: `This is the content of note ${i + 1}.`,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // }));
});
</script>
<template>
  <div class="overflow-y-auto relative">
    <RouterLink
      :to="newNote"
      class="fixed bottom-4 p-4 translate-x-[750%] bg-amber-500 rounded-full shadow-xl"
    >
      <Plus class="w-6 h-6 text-white" />
    </RouterLink>
    <div class="grid grid-cols-2 gap-4">
      <template v-if="!notes?.length">
        <div class="col-span-2 grid place-items-center">
          <h1 class="text-2xl font-bold col-span-2 text-center">
            No notes yet.
          </h1>
          <p class="text-center col-span-2">
            Click the plus button to create a new note.
          </p>
        </div>
      </template>
      <template v-else>
        <NoteCard v-for="note in notes" :key="note.id" :note="note" />
      </template>
    </div>
  </div>
</template>
