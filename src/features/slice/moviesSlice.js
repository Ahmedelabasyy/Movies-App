import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {Apikey} from '../../common/apis/movieApiKey';
import movieApi from '../../common/apis/movieApi';


export const fetchAllMovies = createAsyncThunk("allMovies/fetchAllMovies", async () => {
    const movieText = "Game";
    const res = await movieApi.get(`?apiKey=${Apikey}&s=${movieText}&type=movie`);
    return res.data;
});

export const fetchAllShows = createAsyncThunk("allShows/fetchAllShows", async () => {
    const movieText = "Walking";
    const res = await movieApi.get(`?apiKey=${Apikey}&s=${movieText}&type=series`);
    return res.data;
});

export const fetchMovieOrShowDetail = createAsyncThunk("selectedItem/fetchMovieOrShowDetail", async (id) => {
    const res = await movieApi.get(`?apiKey=${Apikey}&i=${id}&Plot=full`);
    return res.data;
})


export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        allMovies: {},
        allShows: {},
        selectedItem: {}
    },
    reducers: {
        removeShownDetails: (state) => {
            state.selectedItem= {};
        }
    },
    extraReducers: {
        [fetchAllMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAllMovies.fulfilled]: (state, action) => {
            state.allMovies = action.payload;
        },
        [fetchAllMovies.rejected]: () => {
            console.log("Reajected");
        },
        [fetchAllShows.fulfilled]: (state, action) => {
            state.allShows = action.payload;
        },
        [fetchMovieOrShowDetail.fulfilled]: (state, action) => {
            state.selectedItem = action.payload;
        }
    }
})

export const { removeShownDetails } = moviesSlice.actions;
export default moviesSlice.reducer;