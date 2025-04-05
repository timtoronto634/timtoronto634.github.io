import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { themeConstants } from '../../styles/theme';

interface HeaderProps {
  onMenuToggle?: () => void;
  isMobile: boolean;
}

export const Header = ({ onMenuToggle, isMobile }: HeaderProps) => {
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
      <Typography variant='h6'>Home</Typography>
    </Box>
  );
};
