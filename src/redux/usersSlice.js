import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersOperations';

const userInitialState = {
  users: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = [...state.users, ...action.payload];
      })
      .addCase(fetchUsers.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
