import { createSlice } from "@reduxjs/toolkit";


//  Slice is a piece of data from the store

const rootSlice = createSlice({
    name: "root",
    initialState: {
        key: "Key",
        title: "Title",
        author: 'Author',
        year: "First Published",
        // avg_rating: "Average Rating",
        // user_rating: "User Rating"
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseKey: (state, action) => { state.key = action.payload }, // All we're doing is setting the input to the state.name
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseYear: (state, action) => { state.year = action.payload } ,
        // chooseAvgRating: (state, action) => { state.avg_rating = action.payload },
        // chooseUserRating: (state, action) => { state.user_rating = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseKey, chooseAuthor, chooseTitle, chooseYear } = rootSlice.actions