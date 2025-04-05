import { useState } from 'react';
import './App.css';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { MenuItem } from './types/navigation';
import { Sidebar } from './components/layout/Sidebar';
import { MobileAppBar } from './components/layout/MobileAppBar';
import { MainContent } from './components/layout/MainContent';

export const App = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem>('Home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <MobileAppBar onMenuToggle={() => setMobileOpen(!mobileOpen)} />
      <Sidebar
        selectedMenu={selectedMenu}
        isMobile={isMobile}
        mobileOpen={mobileOpen}
        onMenuSelect={setSelectedMenu}
        onMobileClose={() => setMobileOpen(false)}
      />
      <MainContent selectedMenu={selectedMenu} />
    </Box>
  );
};

export default App;
