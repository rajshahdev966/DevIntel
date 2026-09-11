import { RiGithubFill } from "@remixicon/react";
import React from "react";

const ContributiorsList = ({ contriData }) => {
  return (
    <div className="space-y-3">
      {contriData?.map((c, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between gap-3 p-1.5 hover:bg-[#141e33]/50 rounded-lg transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`w-8 h-8 rounded-lg ${c.avatar_url} flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-sm`}
            >
              <img src={c.avatar_url} alt="" className="rounded-full"></img>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-slate-100 truncate">
                {c.login}
              </div>
              <div className="text-[11px] text-slate-400 truncate">{c.id}</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-bold text-slate-200 cursor-pointer">
              <a href={c.html_url} target="_blank">
                <RiGithubFill size={20} />
              </a>
            </div>
            <div className="text-[12px] text-emerald-400 font-medium">
              {c.contributions}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContributiorsList;
