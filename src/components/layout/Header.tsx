import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { themeConstants } from '../../styles/theme';
import { MenuItem } from '../../types/navigation';

interface HeaderProps {
  onMenuToggle?: () => void;
  isMobile: boolean;
  selectedMenu: MenuItem;
}

export const Header = ({ onMenuToggle, isMobile, selectedMenu }: HeaderProps) => {
  return (
    <Box
      component='header'
      sx={{
        position: 'fixed',
        width: '100%',
        backgroundColor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        zIndex: (theme) => theme.zIndex.appBar,
        height: themeConstants.header.height,
        display: 'flex',
        alignItems: 'center',
        px: 2,
      }}
    >
      {isMobile && (
        <IconButton edge='start' onClick={onMenuToggle} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant='h6'>{selectedMenu}</Typography>
    </Box>
  );
};
