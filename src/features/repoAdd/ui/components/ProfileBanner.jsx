import React from 'react'
import { Check, Link2, Share2, FileDown, RefreshCw } from 'lucide-react'
import { useSelector } from 'react-redux'

export const ProfileBanner = () => {
  const {user} = useSelector((store)=> store.profile)
  return (
    <section className="bg-surface-card border border-border-main rounded-2xl p-6 transition-colors duration-200">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left: Avatar & Identity Details */}
        <div className="flex items-start sm:items-center gap-5">
          {/* Avatar Container with Verified Badge */}
          <div className="relative shrink-0">
            <img
              src={user?.avatar_url}
              alt={user?.name}
              className="w-20 h-20 rounded-2xl object-cover ring-1 ring-border-light shadow-sm"
            />
            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center ring-2 ring-surface-card shadow-sm">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          {/* Text Information */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-content-main tracking-tight">
                {user?.name}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-content-secondary font-medium">
              <span className="text-content-secondary">@{user?.login}</span>
              <span className="text-content-muted">•</span>
              <a
                href={`https://github.com/${user?.login}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-content-secondary hover:text-brand-blue transition-colors"
              >
                <Link2 className="w-3.5 h-3.5" />
                <span>github.com/{user?.login}</span>
              </a>
            </div>

            <p className="text-sm text-content-secondary max-w-2xl leading-relaxed pt-0.5">
              {user?.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileBanner
