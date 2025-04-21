const notes = [
  {
    id: 1,
    title: "Note 1",
    content: "This is the first note.",
  },
  {
    id: 2,
    title: "Note 2",
    content: "This is the second note.",
  },
  {
    id: 3,
    title: "Note 3",
    content: "This is the third note.",
  },
  {
    id: 4,
    title: "Note 4",
    content: "This is the fourth note.",
  },
  {
    id: 5,
    title: "Note 5",
    content: "This is the fifth note.",
  },
  {
    id: 6,
    title: "Note 6",
    content: "This is the sixth note.",
  },
];

export const useNotes = () => {
  const getNote = (uid: string) => {
    const note = notes.find((note) => note.id === parseInt(uid));

    if (!note) {
      return {
        id: 0,
        title: "Note not found",
        content: "This note does not exist.",
      };
    }
    return note;
  };
  return {
    notes,
    getNote,
  };
};
