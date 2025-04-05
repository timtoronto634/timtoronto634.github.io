import { useState } from 'react';
import './App.css';
import Work from './components/Work';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Home } from './components/Home';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Blogs } from './components/Blogs';
import { LanguagesOthers } from './components/LanguagesOthers';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <ProfileLogo
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2,
        }}
      />
      <List sx={{ mt: 2 }}>
        {menuItems.map((text) => (
          <ListItem
            key={text}
            sx={{
              backgroundColor: text === selectedMenu ? '#F4A460' : 'transparent',
              borderRadius: 1,
              mx: 1,
              py: isMobile ? 2 : 1,
              '&:hover': {
                backgroundColor: text === selectedMenu ? '#F4A460' : 'rgba(255, 255, 255, 0.1)',
              },
            }}
            onClick={() => {
              setSelectedMenu(text);
              if (isMobile) setMobileOpen(false);
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Mobile AppBar */}
      <AppBar
        position='fixed'
        sx={{
          display: { sm: 'none' },
          zIndex: theme.zIndex.drawer + 2,
        }}
      >
        <Toolbar>
          <IconButton color='inherit' edge='start' onClick={() => setMobileOpen(!mobileOpen)}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Responsive Drawer */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#4A90E2',
            color: 'white',
            borderRight: 'none',
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main content */}
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: 7, sm: 0 },
        }}
      >
        {selectedMenu === 'Home' && <Home />}
        {selectedMenu === 'Work' && <Work />}
        {selectedMenu === 'Education' && <Education />}
        {selectedMenu === 'Skills' && <Skills />}
        {selectedMenu === 'Blogs' && <Blogs />}
        {selectedMenu === 'Languages / Others' && <LanguagesOthers />}
      </Box>
    </Box>
  );
}

export default App;
