import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { notesData } from "../../api/notes";

export interface Note {
  id: string;
  name: string;
  time: Date | string;
  category: string;
  content: string;
  dates: string[] | string;
  archived: boolean;
  arrayOfDate: string,
}

interface NoteSliseList {
  notes: Note[];
}

export const initialState: NoteSliseList = {
  notes: notesData,
};

export const counterSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      console.log(action.payload, '3333333333333333333')
      console.log(action.payload.time, 'tieeeeeeeeeeeeeeeeeeeeeee')
      state.notes = [
        ...state.notes,
        {
          id: action.payload.id,
          name: action.payload.name,
          archived: false,
          time: action.payload.time,
          category: action.payload.category,
          content: action.payload.content,
          dates: [...action.payload.dates, action.payload.arrayOfDate],
          arrayOfDate: action.payload.arrayOfDate
        },
      ];
    },
    removeNote: (state, action: PayloadAction<string>) => {
        state.notes = state.notes.filter(el => el.id !== action.payload)
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const updatedNote = action.payload;
      const noteToUpdate = state.notes.find((note) => note.id === updatedNote.id);
      
      if (noteToUpdate) {
        console.log(noteToUpdate, 'noteToUpdatenoteToUpdatenoteToUpdate')
        noteToUpdate.name = updatedNote.name;
        noteToUpdate.time = updatedNote.time;
        noteToUpdate.category = updatedNote.category;
        noteToUpdate.content = updatedNote.content;
        
        noteToUpdate.dates = [...noteToUpdate.dates, updatedNote.arrayOfDate];
      }
    },
    archiveNote: (state, action: PayloadAction<string>) => {
      const idToArchive = action.payload;
      console.log(idToArchive, 'idToArchiveidToArchiveidToArchiveidToArchive')
      const noteToArchive = state.notes.find((note) => note.id === idToArchive);
      if (noteToArchive) {
        noteToArchive.archived = true;
      }
    },
    unarchiveNote: (state, action: PayloadAction<string>) => {
      const idToUnarchive = action.payload;
      const noteToUnarchive = state.notes.find((note) => note.id === idToUnarchive);
      if (noteToUnarchive) {
        noteToUnarchive.archived = false;
      }
    },
  },
});

export const {addNote, removeNote, editNote, archiveNote, unarchiveNote} = counterSlice.actions
export const noteReducer = counterSlice.reducer;
