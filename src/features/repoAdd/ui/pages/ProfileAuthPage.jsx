import React, { useEffect, useState } from "react";
import {
  Check,
  CheckSquare,
  Square,
  MapPin,
  Code2,
  Users,
  ShieldCheck,
  KeyRound,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { profileAddAction } from "../../state/profileActions";
import { useProfileAdd } from "../../hooks/useProfileAdd";

export const RepoAdd = () => {
  const { register, errors, user, setProfileIdSearch } = useProfileAdd();

  return (
    <div className="min-h-screen w-full bg-surface-main flex items-center justify-center p-4 sm:p-6 transition-colors duration-200 selection:bg-blue-600 selection:text-white">
      <div className="max-w-xl w-full bg-surface-card border border-border-main rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl transition-colors duration-200">
        {/* Top Centered Brand Icon */}
        <div className="text-center">
          <div className="w-10 h-10 mx-auto rounded-xl bg-surface-card-inner border border-border-main flex items-center justify-center text-content-main shadow-sm mb-3">
            <GitBranch className="w-5 h-5 text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-content-main">
            Connect your GitHub profile
          </h1>
          <p className="text-xs text-content-secondary max-w-md mx-auto leading-relaxed mt-2">
            DevIntel computes developer health, velocity intelligence, and
            cross-repository telemetry by analyzing your GitHub commits, PRs,
            and reviews.
          </p>
        </div>

        {/* Input: GitHub Username */}
        <div>
          <label className="text-[10px] font-semibold text-content-muted uppercase tracking-wider block mb-2">
            GitHub Username
          </label>
          <div className="flex items-center justify-between bg-surface-card-inner border border-border-main rounded-xl px-4 py-2.5 focus-within:border-brand-blue transition-colors">
            <input
              {...register("profileId", {
                required: "Github Username is required to proceed",
              })}
              onChange={(e) => {
                setProfileIdSearch(e.target.value);
              }}
              placeholder="rajshahdev966"
              type="text"
              className="text-xs font-semibold text-content-main bg-transparent outline-none flex-1"
            />
            {/* <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-md shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Verified</span>
            </span> */}
          </div>
          {errors.profileId && (
            <span className="text-sm text-red-600">
              {errors.profileId.message}
            </span>
          )}
        </div>

        {user ? (
          <div>
            <div className="flex items-start gap-3.5">
              {/* Avatar with Verified Badge */}
              <div className="relative shrink-0">
                <img
                  src={user.avatar_url}
                  alt={user.name}
                  className="w-12 h-12 rounded-xl object-cover ring-1 ring-border-light"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center ring-2 ring-surface-card-inner shadow-sm">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              </div>

              {/* Profile Identity & Info */}
              <div className="space-y-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-content-main">
                    {user.name}
                  </span>
                  <span className="text-xs text-content-muted">
                    @{user.login}
                  </span>
                </div>
                <p className="text-xs text-content-secondary truncate">
                  {user.bio}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-0.5 text-[11px] text-content-muted">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-content-muted" />
                    <span>{user.location ?? "Not Provided"}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-content-muted" />
                    <span>{user.public_repos} repos</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3 h-3 text-content-muted" />
                    <span>{user.followers} followers</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* Security / Compliance Notice */}
        <div className="bg-surface-card-inner border border-border-main rounded-xl p-3.5 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-content-secondary leading-relaxed">
            <strong className="text-content-main font-semibold">
              Zero Source Code Storage:
            </strong>{" "}
            DevIntel requires read-only metadata access (commits, issues, PRs).
            We never execute, read, or store proprietary source code. SOC2 Type
            II Certified.
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 justify-center">
          <button
            type="button"
            className="cursor-pointer flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm shadow-blue-500/20 active:scale-[0.98] transition-all"
          >
            <span>Continue to Repositories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepoAdd;
