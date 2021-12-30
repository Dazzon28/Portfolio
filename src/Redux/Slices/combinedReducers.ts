import { combineReducers } from "@reduxjs/toolkit";
import viewContacts from "./viewContacts";

const combinedReducers =combineReducers({
    viewContacts:viewContacts
})

export default combinedReducers