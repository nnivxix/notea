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
import { defineProps, defineEmits, defineModel, ref } from "vue";

const content = defineModel<string>("content");
const { color } = defineProps<{
  color: string;
}>();

// TODO: Change these colors to a more suitable color palette
const COLORS = {
  primary: "#4ade80",
  secondary: "#f472b6",
  accent: "#facc15",
  neutral: "#cbd5e1",
  base: "#f8fafc",
};

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
const backgroundColor = ref<string>(color);
const emit = defineEmits<{
  (e: "update:color", value: string): void;
}>();

const updateColor = (color: string) => {
  emit("update:color", color);
  backgroundColor.value = color;
};
</script>
<template>
  <div>
    <template v-if="editor">
      <div class="grid gap-2 m-4 grid-cols-2">
        <div class="flex gap-2 col-span-1">
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
        <div class="flex gap-2 col-span-1 justify-end">
          <button
            v-for="(color, index) in Object.values(COLORS)"
            :key="index"
            @click="updateColor(color)"
            class="p-1 border border-slate-600 rounded-full w-5 h-5"
            :style="{
              backgroundColor: color,
            }"
          ></button>
        </div>

        <EditorContent
          :style="{
            backgroundColor: backgroundColor,
          }"
          class="border col-span-2 p-2 min-h-[70vh] rounded-lg"
          :editor="editor"
        />
      </div>
    </template>
  </div>
</template>
