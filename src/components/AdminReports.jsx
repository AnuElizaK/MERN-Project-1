import React from 'react'
import { Toolbar } from '@mui/material'

const AdminReports = ({ isSidebarExpanded }) => {
  return (
    <>
      <Toolbar id="atoolbar" sx={{marginLeft: isSidebarExpanded ? 0 : 9 }}>Reports</Toolbar>
    </>
  )
}

export default AdminReports