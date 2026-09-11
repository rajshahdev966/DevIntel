import { Children, createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getGithubRepos } from "../../features/repositoryCollection/api/repoApi";

export const AnalysisContext = createContext();

export const AnalysisContextProvider = ({ children }) => {
  const [allRepos, setAllRepos] = useState([]); // Collect the all Repos for analysis (Only 100 Repos)
  const { user } = useSelector((store) => store.profile); // Get User data from redux

  const fetchRepos = async () => {
    try {
      const res = await getGithubRepos(user?.login);
      setAllRepos(res);
    } catch (error) {
      console.log("Error in fetching the API for the rpeos", error);
    }
  };
  useEffect(() => {
    if (!user?.login) return;
    fetchRepos();
  }, [user?.login]); // Store the API response

   const formatDate = (dateStirng) => {
    if (!dateStirng) return "-";
    const date = new Date(dateStirng);
    const diffInSeconds = Math.floor((new Date() - date) / 1000);
    let rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    if (diffInSeconds < 60) return rtf.format(-diffInSeconds, "second");
    if (diffInSeconds < 3600)
      return rtf.format(-Math.floor(diffInSeconds / 60), "minute");
    if (diffInSeconds < 86400)
      return rtf.format(-Math.floor(diffInSeconds / 3600), "hour");
    if (diffInSeconds < 31536000)
      return rtf.format(-Math.floor(diffInSeconds / 86400), "day");
    return rtf.format(-Math.floor(diffInSeconds / 31536000), "years");
  };
  

  return (
    <AnalysisContext.Provider value={{ allRepos, formatDate }}>
      {children}
    </AnalysisContext.Provider>
  );
};
