import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//GET @ /contacts
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/contacts");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//POST @ /contacts
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", contact);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//DELETE @ /contacts/:contactId
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//PATCH @ /contacts/:contactId
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact, thunkAPI) => {
    try {
      console.log(contact.id, contact.name, contact.number);
      const res = await axios.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
