import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name:'weather',
    initialState:{
        city : "Chennai",
        temp : 30.54,
        main : "Clouds",
        tempMin : 30.54,
        tempMax : 30.99,
        humidity : 47,
        pressure : 1011,
        lat : 13.0878,
        lon : 80.2785
    },
    reducers:{
        update: (state,action) => {
            state.city = action.payload.city;
            state.temp = action.payload.temp;
            state.main = action.payload.main;
            state.tempMax = action.payload.tempMax;
            state.tempMin = action.payload.tempMin;
            state.humidity = action.payload.humidity;
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
        }, 
    },
});

export const {update} = weatherSlice.actions;
export default weatherSlice.reducer;