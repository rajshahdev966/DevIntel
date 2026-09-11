import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com",
    headers: {
    Accept: "application/vnd.github.v3+json",
    ...(import.meta.env.VITE_GITHUB_TOKEN && {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
    })
  }
}) // Axios Instances for the github
