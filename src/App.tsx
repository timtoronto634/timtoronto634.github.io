import { useState } from 'react'
import './App.css'
import Portfolio from './Portfolio'
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material'

const drawerWidth = 240;
const menuItems = ['home', 'work', 'Education', 'Skills', 'Blogs'];

function App() {
  const [selectedMenu, setSelectedMenu] = useState('home')

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#4A90E2',
            color: 'white'
          },
        }}
      >
        <List sx={{ mt: 2 }}>
          {menuItems.map((text) => (
            <ListItem 
              key={text}
              sx={{
                backgroundColor: text === selectedMenu ? '#F4A460' : 'transparent',
                borderRadius: 1,
                mx: 1,
                '&:hover': {
                  backgroundColor: text === selectedMenu ? '#F4A460' : 'rgba(255, 255, 255, 0.1)',
                }
              }}
              onClick={() => setSelectedMenu(text)}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {selectedMenu === "home" && <Portfolio />}
        {selectedMenu === "work" && <Portfolio />}
      </Box>
    </Box>
  )
}

export default App
