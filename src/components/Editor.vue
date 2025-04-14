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
            :class="{ 'is-active': editor.isActive('taskList') }"
          >
            Toggle task list
          </button>
          <button
            @click="editor.chain().focus().splitListItem('taskItem').run()"
            :disabled="!editor.can().splitListItem('taskItem')"
          >
            Split list item
          </button>
          <button
            @click="editor.chain().focus().sinkListItem('taskItem').run()"
            :disabled="!editor.can().sinkListItem('taskItem')"
          >
            Sink list item
          </button>
          <button
            @click="editor.chain().focus().liftListItem('taskItem').run()"
            :disabled="!editor.can().liftListItem('taskItem')"
          >
            Lift list item
          </button>
        </div>
      </div>
      <EditorContent :editor="editor" />
    </template>
  </div>
</template>
