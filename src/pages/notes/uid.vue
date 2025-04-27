<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import Editor from "../../components/Editor.vue";
import { useNotes } from "../../composables/useNotes";
import { onUnmounted, ref } from "vue";
import { save, remove } from "../../utils/indexedDB";
import { Trash2 } from "lucide-vue-next";

const isDeleted = ref(false);
const router = useRouter();
const route = useRoute();
const { uid } = route.params;

const { getNote } = useNotes();

const content = await getNote(uid as string);

const updateTitle = (event: Event) => {
  const target = event.target as HTMLElement;
  content.title = target.textContent || "";
};

const deleteNote = async () => {
  isDeleted.value = true;
  try {
    await remove(uid as string);
    await router.push({ name: "index" });
  } catch (error) {
    console.error("Error deleting note:", error);
  }
};

onUnmounted(async () => {
  if (!isDeleted.value) {
    await save(content);
  }
});
</script>
<template>
  <div class="grid grid-cols-12 gap-x-4">
    <h1
      class="text-xl font-bold ml-4 col-span-10"
      contenteditable
      @input="updateTitle($event)"
      @keydown.enter.prevent
    >
      {{ content.title }}
    </h1>
    <button
      class="col-span-2 bg-red-500 p-2 rounded-full self-center place-self-end mr-4"
      @click="deleteNote"
      title="Delete note"
    >
      <Trash2 class="w-4 h-4 text-white" />
    </button>
    <Editor class="col-span-full" v-model:content="content.content" />
  </div>
</template>
