import { useState } from 'react';
import './App.css';
import { useTheme, useMediaQuery, Stack } from '@mui/material';
import { MenuItem } from './types/navigation';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MainContent } from './components/layout/MainContent';

export const App = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem>('Home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Stack sx={{ flexDirection: 'row' }}>
      <Sidebar
        selectedMenu={selectedMenu}
        isMobile={isMobile}
        mobileOpen={mobileOpen}
        onMenuSelect={setSelectedMenu}
        onMobileClose={() => setMobileOpen(false)}
      />
      <Stack>
        <Header
          isMobile={isMobile}
          onMenuToggle={() => setMobileOpen(!mobileOpen)}
          selectedMenu={selectedMenu}
        />
        <MainContent selectedMenu={selectedMenu} />
      </Stack>
    </Stack>
  );
};

export default App;
