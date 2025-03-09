import { configureStore, createSlice } from "@reduxjs/toolkit";

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const exists = state.find((fav) => fav.id === movie.id);
      if (exists) {
        return state.filter((fav) => fav.id !== movie.id);
      } else {
        state.push(movie);
      }
    },
  },
});

export const { toggleFavorite } = favoriteMoviesSlice.actions;

const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesSlice.reducer,
  },
});

export default store;
