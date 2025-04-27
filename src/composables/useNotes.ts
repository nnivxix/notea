import { computed } from "vue";
import { getAll, get, save } from "../utils/indexedDB";
import type { Note } from "../types";

export const useNotes = () => {
  const notes = computed(async () => {
    const notes = await getAll();
    return notes.map((note) => ({
      ...note,
      createdAt: new Date(note.createdAt),
      updatedAt: new Date(note.updatedAt),
    }));
  });
  const getNote = async (uid: string): Promise<Note> => {
    const note = await get(uid);
    if (!note) {
      const newNote = await save({
        id: uid,
        title: "New Note",
        content: "",
        color: "#ffffff",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      });
      return newNote;
    }

    return {
      ...note,
    };
  };
  return {
    notes,
    getNote,
  };
};
