const useLanguageBars = () => {
  const LANGUAGE_COLORS = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Rust: "#dea584",
    Go: "#00ADD8",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    Shell: "#89e051",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
  };

  const getLanguageColor = (lang) => LANGUAGE_COLORS[lang] || "#64748b";
  const totalBytes = repoLang?.reduce((sum, arr) => sum + arr[1], 0);

  const countPercent = (byte) => {
    return Math.round((byte / totalBytes) * 100 * 10) / 10;
  };
  return {countPercent, getLanguageColor};
};
