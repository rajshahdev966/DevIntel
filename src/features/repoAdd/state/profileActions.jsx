import { createAsyncThunk } from "@reduxjs/toolkit";
import { githubApi } from "../../../config/githubAxios";

export const profileAddAction = createAsyncThunk(
    "profile/add",
    async (githubUser, thunkApi)=>{
        try {
            if(githubUser){
                const res = await githubApi.get(`/users/${githubUser}`)
                localStorage.setItem("githubUser", JSON.stringify(res.data))
                return res.data;
            }else{
                return null;
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }   
    }
)
