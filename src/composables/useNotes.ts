const notes = [
  {
    id: "abcde",
    title: "Note 1",
    content: "<p>This is the first note.</p>",
    created_at: "2023-10-26T00:00:00.000Z",
  },
  {
    id: "fghij",
    title: "Note 2",
    content: "<p>This is the second note.</p>",
    created_at: "2023-10-26T00:00:00.000Z",
  },
  {
    id: "klmno",
    title: "Note 3",
    content: "<ul><li>This is the third note.</li></ul>",
    created_at: "2023-10-26T00:00:00.000Z",
  },
  {
    id: "pqrst",
    title: "Note 4",
    content: "<ol><li>This is the fourth note.</li></ol>",
    created_at: "2023-10-26T00:00:00.000Z",
  },
  {
    id: "uvwxy",
    title: "Note 5",
    content:
      "<ul><li>This is the fifth note.</li><li>Another list item</li></ul>",
    created_at: "2023-10-26T00:00:00.000Z",
  },
  {
    id: "zabcd",
    title: "Note 6",
    content: "<p>This is the sixth note.</p><p>With another paragraph.</p>",
    created_at: "2023-10-26T00:00:00.000Z",
  },
];

export const useNotes = () => {
  const getNote = (uid: string) => {
    const note = notes.find((note) => note.id === uid);

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
