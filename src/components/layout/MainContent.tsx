import { Box, useMediaQuery, useTheme } from '@mui/material';
import { MainContentProps } from '../../types/navigation';
import { Home } from '../Home';
import Work from '../Work';
import { Education } from '../Education';
import { Skill } from '../Skill';
import { Activity } from '../Activity';
import { LanguageOther } from '../LanguageOther';
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
        overflowX: 'hidden',
      }}
    >
      {selectedMenu === 'Home' && <Home />}
      {selectedMenu === 'Work' && <Work />}
      {selectedMenu === 'Education' && <Education />}
      {selectedMenu === 'Skill' && <Skill />}
      {selectedMenu === 'Activity' && <Activity />}
      {selectedMenu === 'Language / Other' && <LanguageOther />}
    </Box>
  );
};
