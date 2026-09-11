import axios from "axios";
import { useSelector } from "react-redux";
import { githubApi } from "../../../config/githubAxios";

export const getGithubRepos = async (username) => {
  try {
    if (!username) return [];
    const res = await githubApi.get(`/users/${username}/repos`);
    return res.data;
  } catch (error) {
    console.log("Error in fetching repositories");
  }
}; // Get all the 100 Repos for analysis data
export const getDisplayGithubRepos = async (
  username,
  pageNum,
  sortValue,
  searchTerm,
) => {
  try {
    console.log("Repo API here", username);
    console.log("Search here ------>", searchTerm);

    if (!username) return [];
    if (searchTerm && searchTerm != "") {
      const res = await githubApi.get(
        `/search/repositories?q=user:${username}+${searchTerm}`,
      );
      return res.data.items;
    }
    const res = await githubApi.get(
      `/users/${username}/repos?per_page=30&page=${pageNum}${sortValue ? `&${sortValue}` : ""}`,
    );
    return res.data;
  } catch (error) {
    console.log("Error in fetching repositories");
  }
}; // To fetch and change the repos to display according to the need of user

export const getRepoDetails = async (repoName, user) => {
  try {
    if (!repoName) return [];
    const res = await githubApi.get(`/repos/${user.login}/${repoName}`);
    return res.data;
  } catch (error) {
    console.log("Error in getting Repo details", error);
  }
}; // To thetch the details of particular repo

export const getLangDetails = async (selectedRepo, user) => {
  try {
    const res = await githubApi.get(
      `/repos/${user?.login}/${selectedRepo}/languages`,
    );
    return Object.entries(res.data);
  } catch (error) {
    console.log("Error in getting language details", error);
  }
}; // To fetch the language details of a particular repo

export const getContriDetails = async (selectedRepo, user) => {
  try {
    if (!selectedRepo) return [];
    const res = await githubApi.get(
      `/repos/${user.login}/${selectedRepo}/contributors`,
    );
    return res.data;
  } catch (error) {
    console.log("Error in getting Repo details", error);
  }
}; // To fetch contributions of a particular repo
export const getCommitActivity = async (selectedRepo, user, retreis = 3) => {
  try {
    const res = await githubApi.get(
      `/repos/${user.login}/${selectedRepo}/stats/commit_activity`,
    );

    if (res.status == 202 || res.data.length == 0) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return getCommitActivity(selectedRepo, user, retreis - 1);
    }
    return res.data;
  } catch (error) {
    console.log("Error in getting commit activity", error);
  }
}; // To fetch the coomit activity of a particular repo
