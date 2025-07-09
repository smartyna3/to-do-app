import React, { useState } from "react";
import { Note } from "../types";
import NotesGrid from "../components/NotesGrid";
import NoteModal from "../components/NoteModal";

interface Props {
  notes: Note[];
  onSave: (note: Note) => void;
  onDelete: (id: number) => void;
}

const NotesPage: React.FC<Props> = ({ notes, onSave, onDelete }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | undefined>(undefined);

  const openModal = (note?: Note) => {
    setEditingNote(note);
    setModalVisible(true);
  };

  return (
    <>
      <h1>My Notes</h1>
      <button className="add-btn" onClick={() => openModal()}>
        Add Note
      </button>
      <NotesGrid notes={notes} onEdit={openModal} onDelete={onDelete} />
      <NoteModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={onSave}
        existingNote={editingNote}
      />
    </>
  );
};

export default NotesPage;
