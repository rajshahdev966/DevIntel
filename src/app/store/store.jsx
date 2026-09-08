import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../../features/repoAdd/state/profileSlice";

const store = configureStore({
    reducer: {
        profile: profileReducer
    },
})

export default store;