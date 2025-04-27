<script setup lang="ts">
import {
  ListChecks,
  Italic,
  Bold,
  Rows2,
  TextQuote,
  List,
} from "lucide-vue-next";
import TaskList from "@tiptap/extension-task-list";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";
import TaskItem from "@tiptap/extension-task-item";

const content = defineModel<string>("content");
const editor: Editor = new Editor({
  content: content.value,
  extensions: [
    StarterKit.configure({
      bulletList: {
        HTMLAttributes: {
          class: "bullet-list",
        },
      },
    }),
    TaskItem,
    TaskList.configure({
      itemTypeName: "taskItem",
    }),
  ],
  onUpdate({ editor }) {
    content.value = editor.getHTML();
  },
});
</script>
<template>
  <div>
    <template v-if="editor">
      <div class="grid gap-2 m-4">
        <div class="flex gap-2">
          <button
            @click="editor.chain().focus().toggleTaskList().run()"
            :class="{
              'bg-amber-500  ': editor.isActive('taskList'),
            }"
            class="p-1 border rounded-lg"
          >
            <ListChecks class="w-4 h-4" />
          </button>
          <button
            @click="editor.chain().focus().toggleBulletList().run()"
            :class="{
              'bg-amber-500  ': editor.isActive('bulletList'),
            }"
            class="p-1 border rounded-lg"
          >
            <List class="w-4 h-4" />
          </button>
          <button
            @click="editor.chain().focus().toggleItalic().run()"
            :class="{
              'bg-amber-500  ': editor.isActive('italic'),
            }"
            class="p-1 border rounded-lg"
          >
            <Italic class="w-4 h-4" />
          </button>
          <button
            @click="editor.chain().focus().toggleBold().run()"
            :class="{
              'bg-amber-500  ': editor.isActive('bold'),
            }"
            class="p-1 border rounded-lg"
          >
            <Bold class="w-4 h-4" />
          </button>
          <button
            @click="editor.chain().focus().setHorizontalRule().run()"
            class="p-1 border rounded-lg"
          >
            <Rows2 class="w-4 h-4" />
          </button>
          <button
            @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{
              'bg-amber-500  ': editor.isActive('blockquote'),
            }"
            class="p-1 border rounded-lg"
          >
            <TextQuote class="w-4 h-4" />
          </button>
        </div>

        <EditorContent
          class="border p-2 min-h-[70vh] rounded-lg"
          :editor="editor"
        />
      </div>
    </template>
  </div>
</template>
