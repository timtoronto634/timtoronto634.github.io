import { AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileAppBarProps } from '../../types/navigation';

export const MobileAppBar = ({ onMenuToggle }: MobileAppBarProps) => {
  const theme = useTheme();

  return (
    <AppBar
      position='fixed'
      sx={{
        display: { sm: 'none' },
        zIndex: theme.zIndex.drawer + 2,
      }}
    >
      <Toolbar>
        <IconButton color='inherit' edge='start' onClick={onMenuToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
