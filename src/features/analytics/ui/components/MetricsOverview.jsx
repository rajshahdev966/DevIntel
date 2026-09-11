import React from "react";
import { Code2, Star, GitFork, Users, Clock } from "lucide-react";

import useMetrics from "../../hooks/useMetrics";

export const MetricsOverview = () => {
  const { user, forkCountNum, starCountNum, formatDate } =
    useMetrics();

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {/* 1. Repositories */}
      <div className="bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">Repositories</span>
          <Code2 className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            {user?.public_repos}
          </span>
        </div>
      </div>

      {/* 2. Total Stars */}
      <div className="bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">
            Total Stars <br />
            (Of Top 100 Repos)
          </span>
          <Star className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            {starCountNum}
          </span>
        </div>
      </div>

      {/* 3. Forks */}
      <div className="bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">
            Forks <br />
            (Of Top 100 Repos)
          </span>
          <GitFork className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            {forkCountNum}
          </span>
        </div>
      </div>

      {/* 4. Followers */}
      <div className="bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">Followers</span>
          <Users className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            {user?.followers}
          </span>
        </div>
      </div>

      {/* 5. Account Age */}
      <div className="col-span-2 md:col-span-1 bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">Account Age</span>
          <Clock className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            {formatDate(user?.created_at)}
          </span>
          <span className="text-xs font-medium text-content-muted whitespace-nowrap">
            Since {String(user?.created_at).slice(0, 4)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default MetricsOverview;
