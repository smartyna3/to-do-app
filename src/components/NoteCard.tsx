import React from "react";
import { Note } from "../types";

interface Props {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
}

const NoteCard: React.FC<Props> = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-card" onClick={() => onEdit(note)}>
      <h3>{note.title}</h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(note.id);
        }}
      >
        &#10008;
      </button>
    </div>
  );
};

export default NoteCard;
