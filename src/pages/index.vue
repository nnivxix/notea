<script setup lang="ts">
import NoteCard from "../components/NoteCard.vue";
import { useNotes } from "../composables/useNotes";
import { onBackKeyDown } from "tauri-plugin-app-events-api";
import { exit } from "@tauri-apps/plugin-process";

onBackKeyDown(async () => {
  // alert("back");
  try {
    await exit(1);
    alert("exit");
  } catch (error) {
    alert("error");
  }
});

const { notes } = useNotes();
const exitAction = async () => {
  console.log("exit");
  alert("exit");
  await exit();
};
</script>
<template>
  <button
    @click="exitAction"
    class="py-2 px-1 w-32 rounded-2xl bg-slate-700 text-white"
  >
    exit
  </button>
  <div class="grid grid-cols-2 gap-4">
    <NoteCard v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>
