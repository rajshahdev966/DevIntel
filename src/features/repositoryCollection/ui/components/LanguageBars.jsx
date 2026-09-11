import React from "react";

const LanguageBars = ({repoLang}) => {
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
  return (
    <div>
      <div className="h-2 w-full rounded-full overflow-hidden flex bg-[#162134]">
        {repoLang?.map((lang, idx) => (
          <div
            key={idx}
            style={{
              width: `${countPercent(lang[1])}%`,
              backgroundColor: getLanguageColor(lang[0]),
            }}
            className="h-full transition-all duration-300 hover:opacity-90"
            title={`${lang.name}: ${lang.percent}`}
          />
        ))}
      </div>

      {/* Language Legend Boxes */}
      <div
        className={`grid grid-cols-${repoLang?.length > 3 ? "3" : repoLang?.length} gap-2 pt-1`}
      >
        {repoLang?.map((lang, idx) => (
          <div
            key={idx}
            className="bg-[#121927] border border-[#1b263b] rounded-lg p-2.5 space-y-1"
          >
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: getLanguageColor(lang[0]) }}
              />
              <span className="text-xs font-semibold text-slate-200">
                {lang.name}
              </span>
            </div>
            <div className="text-[11px] text-slate-400">
              <span className="font-medium text-slate-300">
                {countPercent(lang[1])}
              </span>{" "}
              <span>({lang[0]})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageBars;
