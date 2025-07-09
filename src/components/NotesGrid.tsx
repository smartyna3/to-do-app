import React from "react";
import { Note } from "../types";
import NoteCard from "./NoteCard";

interface Props {
  notes: Note[];
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
}

const NotesGrid: React.FC<Props> = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NotesGrid;
