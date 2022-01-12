import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../api/hotel-rooms';

interface SearchState {
    results: Array<any>,
    hotels: {
        list: Array<any>,
        loaded: boolean,
    };
    rating: number;
    children: {
        count: number,
        minValue: number,
        maxValue: number,
        header: string,
        subheader: string,
        id: string,
    };
    adults: {
        count: number,
        minValue: number,
        maxValue: number,
        header: string,
        subheader: string,
        id: string,
    };
}

const initialState: SearchState = {
    results: [],
    hotels: {
        list: [],
        loaded: false,
    },
    rating: 4,
    adults: {
        count: 4,
        minValue: 1,
        maxValue: 16,
        header: 'Adults',
        subheader: 'Ages 16 or above',
        id: '1',
    },
    children: {
        count: 0,
        minValue: 0,
        maxValue: 5,
        header: 'Children',
        subheader: 'Add children',
        id: '2',
    }
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setRating(state, {payload}) {
            state.rating = payload;
        },

        setAdults(state, {payload}) {
            state.adults.count = payload;
        },

        updateAdultsByAmount(state, {payload}) {
            state.adults.count = state.adults.count + payload;
        },

        setChildren(state, {payload}) {
            state.children.count = payload;
        },

        updateChildrenByAmount(state, {payload}) {
            state.children.count = state.children.count + payload;
        },

        setResults(state) {
            state.results = state.hotels.list;
        }
    },
    extraReducers: (builder) => {
        builder
        // Loading hotels
            .addCase(getHotels.pending, (state) => {
            state.hotels.loaded = false;
            })
            .addCase(getHotels.rejected, (state) => {
            state.hotels.loaded = false;
            })
            builder.addCase(getHotels.fulfilled, (state, {payload}) => {            
                state.hotels.loaded = true;
                state.hotels.list = payload;
            })

        // Loading rooms
            .addCase(getRooms.pending, (state) => {
            state.hotels.loaded = false;
            })
            .addCase(getRooms.rejected, (state) => {
            state.hotels.loaded = false;
            })
            .addCase(getRooms.fulfilled, (state, {payload}) => {
                state.hotels.loaded = true;
                if(payload) {
                    const hotelIndex = state.hotels.list.findIndex(hotel => hotel.id === payload.hotelId);
                    state.hotels.list[hotelIndex].rooms = payload.availableRooms;
                }
            });
    },
});

export const getRooms = createAsyncThunk(
    "search/getRooms",
    async (hotelId: string) => {
        return await axios.get(`${baseUrl}/roomRates/OBMNG/${hotelId}`)
            .then(res => res.data)
            .then(data => {
                return {
                    availableRooms: data.rooms,
                    hotelId
                }
            })
            .catch(err => {
              console.log(err);
            })
        }
)

export const getHotels = createAsyncThunk<PayloadAction | object | any>(
    "search/getHotels",
    async (obj, { dispatch }) => {
        return await axios.get(`${baseUrl}/hotels?collection-id=OBMNG`)
            .then(res => res.data)
            .then((data) => {
                data.forEach((hotel: { id: string }) => {
                    dispatch(getRooms(hotel.id));
                });
                return data
            })
            .catch(err => {
              console.log(err);
            })
        }
)

export const { 
    setRating,
    setAdults, 
    updateAdultsByAmount,
    setChildren, 
    updateChildrenByAmount,
    setResults
} = searchSlice.actions;
export default searchSlice.reducer;