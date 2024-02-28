import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //You can mutate state to Immer
      state.title = action.payload
      // You can also return new state as usually
      // return {...state, title: action.payload}
    },
    setAuthorFilter: (state, action) => {
      //You can mutate state to Immer
      state.author = action.payload
    },
    resetFilters: (state) => {
      return initialState
    },
  },
})

export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export default filterSlice.reducer