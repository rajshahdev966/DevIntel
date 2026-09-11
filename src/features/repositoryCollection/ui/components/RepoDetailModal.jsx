import React from "react";
import {
  BookMarked,
  Copy,
  Check,
  X,
  ExternalLink,
  Star,
  GitFork,
  Eye,
  ArrowRight,
} from "lucide-react";
import HeatMap from "./HeatMap";
import LanguageBars from "./LanguageBars";
import ContributiorsList from "./ContributiorsList";
import { RiGithubFill } from "@remixicon/react";
import useRepoDetailModal from "../../hooks/useRepoDetailModal";
import RepoDetailSkeleton from "./skeletons/RepoDetailSkeleton";

export const RepoDetailModal = ({ isOpen = true, onClose, selectedRepo }) => {
  const {
    copied,
    repoDetails,
    repoLang,
    contriData,
    commitData,
    handleCopyClone,
  } = useRepoDetailModal(selectedRepo);

  if (!isOpen) return null;

  if(!repoDetails) return <RepoDetailSkeleton/>

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
            <RiGithubFill />
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
      </div>
      <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-6 space-y-4 w-full ">
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
        <HeatMap commitContent={commitData} />
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
            <LanguageBars repoLang={repoLang} />
          </div>

          {/* Section: 52-Week Contribution Matrix & Velocity */}
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
            <ContributiorsList contriData={contriData} />
          </div>
        </div>
      </div>

      {/* 5. Footer Bar: Keyboard Shortcut Tips + Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#162032] text-xs">
        <div className="flex items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="text-xs font-medium text-slate-400 hover:text-slate-200 px-3 py-1.5 transition-colors cursor-pointer"
            >
              Dismiss
            </button>
          )}
          <a href={repoDetails?.html_url} target="_blank">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-colors cursor-pointer"
            >
              <span>View Full Repository Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoDetailModal;
