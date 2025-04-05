import { Box, useMediaQuery, useTheme } from '@mui/material';
import { MainContentProps } from '../../types/navigation';
import { Home } from '../Home';
import Work from '../Work';
import { Education } from '../Education';
import { Skills } from '../Skills';
import { Activity } from '../Activity';
import { LanguagesOthers } from '../LanguagesOthers';
import { themeConstants } from '../../styles/theme';

export const MainContent = ({ selectedMenu }: MainContentProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component='main'
      sx={{
        position: 'relative',
        top: isMobile ? themeConstants.header.height : 0,
        padding: isMobile ? 1 : 2,
        marginBottom: isMobile ? themeConstants.header.height : 0,
      }}
    >
      {selectedMenu === 'Home' && <Home />}
      {selectedMenu === 'Work' && <Work />}
      {selectedMenu === 'Education' && <Education />}
      {selectedMenu === 'Skills' && <Skills />}
      {selectedMenu === 'Activity' && <Activity />}
      {selectedMenu === 'Languages / Others' && <LanguagesOthers />}
    </Box>
  );
};
