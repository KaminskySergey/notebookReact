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
        },
      ];
    },
    removeNote: (state, action: PayloadAction<number>) => {
        state.notes = state.notes.filter(el => el.id !== action.payload)
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
  },
});

export const {addNote, removeNote, editNote} = counterSlice.actions
export const noteReducer = counterSlice.reducer;
