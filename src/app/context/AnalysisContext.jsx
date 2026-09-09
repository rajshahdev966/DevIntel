import { Children, createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getGithubRepos } from "../../features/repositoryCollection/api/repoApi";

export const AnalysisContext = createContext();

export const AnalysisContextProvider = ({children}) => {
      const [repos, setRepos] = useState([]);
    const { user } = useSelector((store) => store.profile);
  const fetchRepos = async () => {
    try {
      const res = await getGithubRepos(user?.login);
      console.log("API RUNNNNNNIIIIGGGG", res);
      setRepos(res);
    } catch (error) {
      console.log("Error in fetching the API for the rpeos", error);
    }
  };
  useEffect(() => {
    if (!user?.login) return;
    fetchRepos();
  }, [user?.login]);
    

    return <AnalysisContext.Provider value={{repos}}>
        {children}
    </AnalysisContext.Provider>
}