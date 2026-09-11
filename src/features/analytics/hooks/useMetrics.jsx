import { useSelector } from "react-redux";
import { AnalysisContext } from "../../../app/context/AnalysisContext";
import { useContext, useEffect, useState } from "react";

const useMetrics = () => {
  const { allRepos, formatDate } = useContext(AnalysisContext);
  const { user } = useSelector((store) => store.profile);
  const [forkCountNum, setForkCountNum] = useState(0);
  const [starCountNum, setStarCountNum] = useState(0);
  const metrixCounter = () => {
    let forkCount = 0;
    let starCount = 0;
    allRepos?.map((elem) => {
      forkCount += Number(elem?.forks_count);
      starCount += Number(elem?.stargazers_count);
    });
    setForkCountNum(forkCount);
    setStarCountNum(starCount);
  };

 

  useEffect(() => {
    metrixCounter();
  }, [forkCountNum, starCountNum]);
  return {
    allRepos,
    user,
    forkCountNum,
    starCountNum,
    formatDate,

  };
};

export default useMetrics;

