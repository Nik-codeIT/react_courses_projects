import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
      // const index =state.findIndex((book)) => book.id === action.payload
      // if (index !== -1) {
      //   state.splice(index, 1)
      // }
    },
    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) book.isFavorite = !book.isFavorite
      })
      // return state.map((book) =>
      //   book.id === action.payload
      //     ? { ...book, isFavorite: !book.isFavorite }
      //     : book
      // )
    },
  },
})

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions
export const selectBooks = (state) => state.books
export default booksSlice.reducer
