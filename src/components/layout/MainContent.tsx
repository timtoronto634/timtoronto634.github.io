import { Box } from '@mui/material';
import { MainContentProps } from '../../types/navigation';
import { Home } from '../Home';
import Work from '../Work';
import { Education } from '../Education';
import { Skills } from '../Skills';
import { Blogs } from '../Blogs';
import { LanguagesOthers } from '../LanguagesOthers';
import { themeConstants } from '../../styles/theme';

export const MainContent = ({ selectedMenu }: MainContentProps) => {
  return (
    <Box
      component='main'
      sx={{
        position: 'relative',
        top: themeConstants.header.height,
        padding: 2,
      }}
    >
      {selectedMenu === 'Home' && <Home />}
      {selectedMenu === 'Work' && <Work />}
      {selectedMenu === 'Education' && <Education />}
      {selectedMenu === 'Skills' && <Skills />}
      {selectedMenu === 'Blogs' && <Blogs />}
      {selectedMenu === 'Languages / Others' && <LanguagesOthers />}
    </Box>
  );
};
