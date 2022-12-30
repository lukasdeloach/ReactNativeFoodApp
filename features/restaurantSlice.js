
import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    restaurant: {
        id: null,
        imgUrl: null,
        name: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
}, };

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload;
    },
  }
});


export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant = (state) => state.restaurant.restaurant;
export default restaurantSlice.reducer;