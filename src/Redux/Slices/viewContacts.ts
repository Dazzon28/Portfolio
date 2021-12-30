import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:boolean = false
const viewContact = createSlice({
    name:"contact",
    initialState:initialState,
    reducers:{
        setContactView: (state,action:PayloadAction<boolean>)=> state = action.payload
    }
})

export const {setContactView} = viewContact.actions
export default viewContact.reducer