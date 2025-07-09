import React, { useState, useEffect } from "react";
import { Note } from "../types";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (note: Note) => void;
  existingNote?: Note;
}

const NoteModal: React.FC<Props> = ({
  visible,
  onClose,
  onSave,
  existingNote,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  useEffect(() => {
    if (existingNote) {
      setTitle(existingNote.title);
      setContent(existingNote.content);
    } else {
      setTitle("");
      setContent("");
    }

    setTitleError("");
    setContentError("");
  }, [existingNote, visible]);

  if (!visible) return null;

  const handleSave = () => {
    let hasError = false;

    if (!title.trim()) {
      setTitleError("Title cannot be empty.");
      hasError = true;
    } else {
      setTitleError("");
    }

    if (content.trim().length < 5) {
      setContentError("Content must be at least 5 characters long.");
      hasError = true;
    } else {
      setContentError("");
    }

    if (hasError) return;

    const note: Note = {
      id: existingNote?.id || Date.now(),
      title,
      content,
    };

    onSave(note);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{existingNote ? "Edit note" : "New note"}</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && <p className="error">{titleError}</p>}

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {contentError && <p className="error">{contentError}</p>}

        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
