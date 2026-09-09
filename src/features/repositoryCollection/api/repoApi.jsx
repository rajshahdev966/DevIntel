import axios from "axios";
import { useSelector } from "react-redux";
import { githubApi } from "../../../config/githubAxios";

export const getGithubRepos = async (username) => {
  try {
      console.log("Repo API here", username);
    if (username) {
        
      const res = await githubApi.get(`/users/${username}/repos?per_page=100`);
      return res.data;
    }else {
        return [];
    }
  } catch (error) {
    console.log("Error in fetching repositories");
  }
};


export const getRepoDetails = async (repoName, user) => {
    try {
        if(!repoName) return [];
        const res = await githubApi.get(`/repos/${user.login}/${repoName}`);        
        return res.data
    } catch (error) {
        console.log("Error in getting Repo details", error);
    }
}


export const getLangDetails = async (selectedRepo, user)=>{
    try {
        const res = await githubApi.get(`/repos/${user?.login}/${selectedRepo}/languages`)
        return Object.entries((res.data));    
        
    } catch (error) {
        console.log("Error in getting language details", error);
    }
}