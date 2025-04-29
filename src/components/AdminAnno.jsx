import React from 'react'
import { Toolbar } from '@mui/material'

const AdminAnno = ({ isSidebarExpanded }) => {
  return (
    <>
      <Toolbar id="atoolbar" sx={{marginLeft: isSidebarExpanded ? 0 : 9 }}>Announcements</Toolbar>
    </>
  )
}

export default AdminAnno