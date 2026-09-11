import React from 'react'
import RepositoriesTable from '../components/RepositoriesTable'

const RepoCollection = () => {

  return (
    <div className='flex-1 p-6 md:p-8 space-y-8 max-w-7xl w-full mx-auto'>
      {/* Repositories Table */}
      <RepositoriesTable />
    </div>
  )
}

export default RepoCollection
