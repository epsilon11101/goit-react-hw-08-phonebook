import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/operations";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = "pending";
};

const handleRejected = (state, action) => {
  state.isLoading = "false";
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected]: handleRejected,
    [updateContact.pending]: handlePending,
    [updateContact.fulfilled]: (state, action) => {
      state.items = state.items.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state.isLoading = false;
      state.error = null;
    },
    [updateContact.rejected]: handleRejected,
    [logout.fulfilled]: (state) => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
