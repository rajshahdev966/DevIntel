import React, { useState } from 'react'
import RepositoriesTable from '../components/RepositoriesTable'
import RepoDetailModal from '../components/RepoDetailModal'

const RepoCollection = () => {
  const [selectedRepo, setSelectedRepo] = useState(null)
  const [showDetail, setShowDetail] = useState(true)

  return (
    <div className='flex-1 p-6 md:p-8 space-y-8 max-w-7xl w-full mx-auto'>
      {/* Repositories Table */}
      <RepositoriesTable />
    </div>
  )
}

export default RepoCollection
