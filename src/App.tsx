import { useState } from 'react';
import './App.css';
import Work from './components/Work';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Home } from './components/Home';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Blogs } from './components/Blogs';
import { Languages } from './components/Languages';
import { ProfileLogo } from './components/ProfileLogo';

type MenuItem = 'Home' | 'Work' | 'Education' | 'Skills' | 'Blogs' | 'Languages / Others';

const drawerWidth = 240;
const menuItems: MenuItem[] = [
  'Home',
  'Work',
  'Education',
  'Skills',
  'Blogs',
  'Languages / Others',
];

function App() {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem>('Home');

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#4A90E2',
            color: 'white',
          },
        }}
      >
        <ProfileLogo />
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
                },
              }}
              onClick={() => setSelectedMenu(text)}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {selectedMenu === 'Home' && <Home />}
        {selectedMenu === 'Work' && <Work />}
        {selectedMenu === 'Education' && <Education />}
        {selectedMenu === 'Skills' && <Skills />}
        {selectedMenu === 'Blogs' && <Blogs />}
        {selectedMenu === 'Languages / Others' && <Languages />}
      </Box>
    </Box>
  );
}

export default App;
