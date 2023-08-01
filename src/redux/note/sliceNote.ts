import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { notesData } from "../../api/notes";

export interface Note {
  id: number;
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
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.notes = [
        ...state.notes,
        {
          id: state.notes.length,
          name: action.payload,
          archived: false,
          time: new Date(),
          category: action.payload,
          content: action.payload,
          dates: action.payload,
          arrayOfDate: action.payload
        },
      ];
    },
    removeNote: (state, action: PayloadAction<number>) => {
        state.notes = state.notes.filter(el => el.id !== action.payload)
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const updatedNote = action.payload;
      const noteToUpdate = state.notes.find((note) => note.id === updatedNote.id);
      
      if (noteToUpdate) {
        // Обновляем все поля заметки
        console.log(noteToUpdate, 'noteToUpdatenoteToUpdatenoteToUpdate')
        noteToUpdate.name = updatedNote.name;
        noteToUpdate.time = updatedNote.time;
        noteToUpdate.category = updatedNote.category;
        noteToUpdate.content = updatedNote.content;
        // ... Обновите остальные поля здесь
    
        // Добавляем новую дату в массив dates
        noteToUpdate.dates = [...noteToUpdate.dates, updatedNote.arrayOfDate];
      }
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      const idToArchive = action.payload;
      const noteToArchive = state.notes.find((note) => note.id === idToArchive);
      if (noteToArchive) {
        noteToArchive.archived = true;
      }
    }
  },
});

export const {addNote, removeNote, editNote, archiveNote} = counterSlice.actions
export const noteReducer = counterSlice.reducer;
