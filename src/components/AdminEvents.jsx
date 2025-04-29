import React from 'react'
import { Toolbar, BottomNavigation, Typography } from '@mui/material'

const AdminEvents = ({ isSidebarExpanded }) => {
  return (
    <>
      <Toolbar id="atoolbar" sx={{marginLeft: isSidebarExpanded ? 0 : 9 }}>Events</Toolbar>
    </>
  )
}

export default AdminEvents