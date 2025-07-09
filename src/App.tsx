import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotesPage from "./pages/NotesPage";
import CalendarPage from "./pages/CalendarPage";
import { Note } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const saveNote = (note: Note) => {
    setNotes((prev) => {
      const exists = prev.find((n) => n.id === note.id);
      if (exists) {
        return prev.map((n) => (n.id === note.id ? note : n));
      }
      return [note, ...prev];
    });
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <nav className="menu">
          <Link to="/">Notes</Link>
          <Link to="/calendar">Calendar</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <NotesPage
                notes={notes}
                onSave={saveNote}
                onDelete={deleteNote}
              />
            }
          />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
