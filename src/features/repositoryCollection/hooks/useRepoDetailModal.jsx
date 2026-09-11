import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getRepoDetails,
  getLangDetails,
  getContriDetails,
  getCommitActivity,
} from "../api/repoApi";

const useRepoDetailModal = (selectedRepo) => {
  const [copied, setCopied] = useState(false);
  const [repoDetails, setRepoDetails] = useState(null);
  const [repoLang, setRepoLang] = useState(null);
  const [contriData, setContriData] = useState(null);
  const [commitData, setCommitData] = useState(null);
  const { user } = useSelector((store) => store.profile);

  const fetchDetails = async () => {
    try {
      const repoRes = await getRepoDetails(selectedRepo, user);
      const langRes = await getLangDetails(selectedRepo, user);
      const contriRes = await getContriDetails(selectedRepo, user);
      const commitRes = await getCommitActivity(selectedRepo, user);
      setRepoLang(langRes);
      setRepoDetails(repoRes);
      setContriData(contriRes);
      setCommitData(commitRes);
    } catch (error) {
      console.log("Error in fetching repo details", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [selectedRepo]);

  const handleCopyClone = (urlForClone) => {
    navigator.clipboard.writeText(`git clone ${urlForClone}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return {
    copied,
    setCopied,
    repoDetails,
    repoLang,
    contriData,
    commitData,
    handleCopyClone
  }
};

export default useRepoDetailModal;