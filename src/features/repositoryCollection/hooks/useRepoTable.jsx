import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getGithubRepos } from "../api/repoApi";
import { AnalysisContext } from "../../../app/context/AnalysisContext";
import { useNavigate } from "react-router";

export const useRepoTable = () => {
    const navigate = useNavigate();
  const {repos} = useContext(AnalysisContext)
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
    return rtf.format(-Math.floor(diffInSeconds / 86400), "day");
  };

  const copyGithubLink = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (error) {
      console.log("Failed to copy", error);
    }
  };

  return {
    repos,
    formatDate,
    copyGithubLink,
    navigate
  };
};
