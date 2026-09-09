import React, { useEffect, useState } from "react";
import {
  BookMarked,
  GitBranch,
  Copy,
  Check,
  X,
  ExternalLink,
  Star,
  GitFork,
  Eye,
  CircleDot,
  GitCommit,
  ShieldCheck,
  Activity,
  Calendar,
  Layers,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  FileCheck2,
  Lock,
  Cpu,
} from "lucide-react";
import { githubApi } from "../../../../config/githubAxios";
import { useSelector } from "react-redux";
import { getLangDetails, getRepoDetails } from "../../api/repoApi";

// GitHub Brand Icon SVG
const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const RepoDetailModal = ({ isOpen = true, onClose, selectedRepo }) => {
  const [copied, setCopied] = useState(false);
  const [repoDetails, setRepoDetails] = useState(null);
  const [repoLang, setRepoLang] = useState(null);
  const { user } = useSelector((store) => store.profile);
  const fetchDetails = async () => {
    try {
      console.log("Meh toh cha;la ", selectedRepo, user);
      const repoRes = await getRepoDetails(selectedRepo, user);
      const langRes = await getLangDetails(selectedRepo, user);
      setRepoLang(langRes);
      setRepoDetails(repoRes);
    } catch (error) {
      console.log("Error in fetching repo details", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [selectedRepo]);
  console.log("Mein aya", repoLang);

  const handleCopyClone = (urlForClone) => {
    navigator.clipboard.writeText(`git clone ${urlForClone}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
  const totalBytes = repoLang?.reduce((sum, arr)=> sum + arr[1], 0);

  const countPercent = ()=>{
    console.log(totalBytes);

    
  }

  if (!isOpen) return null;

  return (
    <div className="w-full bg-[#0a0e17] border border-[#1b253b] rounded-2xl p-5 md:p-7 text-slate-100 shadow-2xl space-y-6 font-sans antialiased transition-all">
      {/* 1. Header Bar: Title, Tags & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#162032] pb-5">
        <div className="flex flex-wrap items-center gap-3">
          <BookMarked className="w-5 h-5 text-blue-400 shrink-0" />
          <div className="flex items-center gap-1.5 text-base md:text-lg font-medium">
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
              @{repoDetails?.owner?.login}
            </span>
            <span className="text-slate-600">/</span>
            <span className="font-bold text-white tracking-tight">
              {repoDetails?.size}
            </span>
          </div>

          <span className="px-2 py-0.5 text-xs font-medium text-slate-400 bg-[#121927] border border-[#1e293b] rounded-full">
            {repoDetails?.visibility}
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Health {repoDetails?.healthScore}/100 ({repoDetails?.healthStatus})
          </span>
        </div>

        {/* Top Right Actions */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          {/* Clone Command Pill */}
          <button
            onClick={() => handleCopyClone(repoDetails?.clone_url)}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-300 bg-[#0f1726] border border-[#1e2b45] hover:border-slate-600 rounded-lg transition-colors cursor-pointer group"
          >
            <span>Clone Command</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200" />
            )}
          </button>

          {/* GitHub Outbound Link */}
          <a
            href={repoDetails?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-[#0f1726] border border-[#1e2b45] hover:border-slate-600 hover:text-white rounded-lg transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          {/* Close Modal / Dismiss Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 3. 6-Column High-Impact Stats Bar */}
      <div className="grid grid-cols-3 gap-3">
        {/* Stars */}
        <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Stars</span>
            <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-bold text-white tracking-tight">
              {repoDetails?.stargazers_count}
            </div>
          </div>
        </div>

        {/* Forks */}
        <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Forks</span>
            <GitFork className="w-4 h-4 text-slate-400" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-bold text-white tracking-tight">
              {repoDetails?.forks_count}
            </div>
          </div>
        </div>

        {/* Watchers */}
        <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Watchers</span>
            <Eye className="w-4 h-4 text-slate-400" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-bold text-white tracking-tight">
              {repoDetails?.watchers_count}
            </div>
          </div>
        </div>

        {/* Commit Velocity */}
        {/* <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Commit Velocity</span>
            <Activity className="w-4 h-4 text-blue-400" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-bold text-white tracking-tight">
              {repoDetails?.stats.commitVelocity} <span className="text-xs font-normal text-slate-400">{repoDetails?.stats.commitVelocityUnit}</span>
            </div>
            <div className="text-[11px] font-medium text-emerald-400 flex items-center gap-1 mt-0.5">
              <span>↗</span> {repoDetails?.stats.commitDelta}
            </div>
          </div>
        </div> */}

        {/* Coverage (CI) */}
        {/* <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Coverage (CI)</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-bold text-emerald-400 tracking-tight">{repoDetails?.stats.coverage}</div>
            <div className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {repoDetails?.stats.coverageStatus}
            </div>
          </div>
        </div> */}
      </div>

      {/* 4. Main Two-Column Analytics Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Language Breakdown & 52-Week Matrix (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Section: Language Distribution & Volume */}
          <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <h3 className="font-semibold text-slate-200">
                Language Distribution & Volume
              </h3>
              <span className="text-slate-400 font-mono">
                {repoDetails?.totalLoc}
              </span>
            </div>

            {/* Segmented Progress Bar */}
            <div className="h-2 w-full rounded-full overflow-hidden flex bg-[#162134]">
              {repoLang?.map((lang, idx) => (
                <div
                  key={idx}
                  style={{ width: lang.width, backgroundColor: lang.color }}
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
                      style={{ backgroundColor: getLanguageColor(lang.name) }}
                      bla={countPercent()}
                    />
                    <span className="text-xs font-semibold text-slate-200">
                      {lang.name}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    <span className="font-medium text-slate-300">
                      {lang.percent}
                    </span>{" "}
                    <span>({lang.loc})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: 52-Week Contribution Matrix & Velocity */}
          <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold text-slate-200">
                  {repoDetails?.title}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {repoDetails?.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-[#162238]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#1d3b6f]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#2563eb]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#60a5fa]" />
                <span>More</span>
              </div>
            </div>

            {/* Heatmap Matrix Visual */}
            {/* <div className="space-y-1.5 pt-1">
              {repoDetails?.map((row, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-16 gap-1.5">
                  {row.map((val, colIdx) => {
                    const colors = [
                      "bg-[#121b2d]",
                      "bg-[#1d3b6f]",
                      "bg-[#2563eb]",
                      "bg-[#3b82f6]",
                      "bg-[#60a5fa]",
                    ];
                    return (
                      <div
                        key={colIdx}
                        className={`h-4 rounded-sm ${colors[val] || colors[2]} transition-transform hover:scale-110 cursor-pointer`}
                      />
                    );
                  })}
                </div>
              ))}
            </div> */}

            {/* 3 Metric Cards Under Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#121927] border border-[#1b263b] rounded-lg p-3">
                <div className="text-[11px] text-slate-400">
                  PR Turnaround Time
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {repoDetails?.turnaround}
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5 font-medium">
                  {repoDetails?.turnaroundNote}
                </div>
              </div>

              <div className="bg-[#121927] border border-[#1b263b] rounded-lg p-3">
                <div className="text-[11px] text-slate-400">
                  Review Merge Rate
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {repoDetails?.mergeRate}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-medium">
                  {repoDetails?.mergeNote}
                </div>
              </div>

              <div className="bg-[#121927] border border-[#1b263b] rounded-lg p-3">
                <div className="text-[11px] text-slate-400">
                  Peak Intensity Window
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {repoDetails?.peakWindow}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-medium">
                  {repoDetails?.peakNote}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Top Contributors & Security Checks (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Top Contributors Card */}
          <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <h3 className="font-semibold text-slate-200">Top Contributors</h3>
              <span className="text-blue-400 hover:underline cursor-pointer font-medium">
                Rankings (90d)
              </span>
            </div>

            {/* <div className="space-y-3">
              {repoDetails?.map((c, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 p-1.5 hover:bg-[#141e33]/50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg ${c.avatarBg} flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-sm`}
                    >
                      {c.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-100 truncate">
                        {c.name}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {c.role}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs font-bold text-slate-200">
                      {c.share}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-medium">
                      {c.locDelta}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Security & Audit Checks Card */}
        </div>
      </div>

      {/* 5. Footer Bar: Keyboard Shortcut Tips + Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#162032] text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <span>Keyboard:</span>
          <kbd className="px-1.5 py-0.5 bg-[#141d30] border border-[#23314a] rounded text-[10px] font-mono text-slate-300">
            ESC
          </kbd>
          <span>to close modal</span>
        </div>

        <div className="flex items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="text-xs font-medium text-slate-400 hover:text-slate-200 px-3 py-1.5 transition-colors cursor-pointer"
            >
              Dismiss
            </button>
          )}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-colors cursor-pointer"
          >
            <span>View Full Repository Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepoDetailModal;
