<script setup lang="ts">
import { onMounted, ref } from "vue";
import TaskList from "@tiptap/extension-task-list";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";
import TaskItem from "@tiptap/extension-task-item";

let content = ref(`
<ul data-type="taskList">
<li data-type="taskItem" data-checked="true">A list item</li>
<li data-type="taskItem" data-checked="false">And another one</li>
</ul>`);
const editor = ref<Editor | null>(null);

onMounted(() => {
  editor.value = new Editor({
    content: content.value,
    extensions: [
      StarterKit,
      TaskItem,
      TaskList.configure({
        itemTypeName: "taskItem",
      }),
    ],
    onUpdate({ editor }) {
      content.value = editor.getHTML();
    },
  });
});
</script>
<template>
  <div>
    <template v-if="editor">
      <div class="control-group">
        <div class="button-group">
          <button
            @click="editor.chain().focus().toggleTaskList().run()"
            :class="{
              'bg-amber-500  ': editor.isActive('taskList'),
            }"
            class="p-1 border rounded-lg"
          >
            Toggle task list
          </button>
        </div>
      </div>
      <EditorContent class="border m-4 p-2 rounded-lg" :editor="editor" />
    </template>
  </div>
</template>
