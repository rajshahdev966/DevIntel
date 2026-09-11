import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDisplayGithubRepos } from "../api/repoApi";
import { AnalysisContext } from "../../../app/context/AnalysisContext";
import { useNavigate } from "react-router";

export const useRepoTable = () => {
  // Basic Declarations 
  const navigate = useNavigate();
  const {formatDate} = useContext(AnalysisContext)
  const { user } = useSelector((store) => store.profile);

  //Config for the page 
  const [pageNum, setPageNum] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [sortValue, setSortValue] = useState(null)
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const res = await getDisplayGithubRepos(user?.login, pageNum, sortValue, searchTerm);
      setRepos(res);
    } catch (error) {
      console.log("Error in fetching the API for the rpeos", error);
    }
  }; // to fetch the response
  useEffect(() => {
    if (!user?.login) return;
    const timeout = setTimeout(() => {
      fetchRepos();
    }, 500);
    return  ()=>{
      clearInterval(timeout)
    }
  }, [user?.login, pageNum, searchTerm, sortValue]);


  const copyGithubLink = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.log("Failed to copy", err);
    }
  }; // Copy the given link

  return {
    repos,
    formatDate,
    copyGithubLink,
    navigate,
    fetchRepos,
    pageNum,
    setPageNum,
    searchTerm,
    setSearchTerm,
    sortValue,
    setSortValue
  };
};
