import React from "react";

const LanguageBars = ({ repoLang }) => {
  const { countPercent, getLanguageColor } = useLanguageBars;
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
