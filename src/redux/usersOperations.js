import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644ff6adb61a9f0c4d300544.mockapi.io/api/v1/';

export const fetchUsers = createAsyncThunk('users/fetchAll', async (page = 1, thunkAPI) => {
  try {
    const res = await axios.get('/users', {
      params: {
        page,
        limit: 3,
      },
    });
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const fetchUsers = createAsyncThunk('users/fetchAll', async (page = 1, thunkAPI) => {
//   try {
//     const res = await axios.get('/users');
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
