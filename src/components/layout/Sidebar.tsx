import { Box, List, ListItem, ListItemText, Drawer } from '@mui/material';
import { useTheme } from '@mui/material';
import { ProfileLogo } from '../ProfileLogo';
import { MenuItem, SidebarProps } from '../../types/navigation';
import { themeConstants } from '../../styles/theme';

const menuItems: MenuItem[] = [
  'Home',
  'Work',
  'Education',
  'Skills',
  'Blogs',
  'Languages / Others',
];

export const Sidebar = ({ selectedMenu, isMobile, onMenuSelect, onMobileClose }: SidebarProps) => {
  const theme = useTheme();

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
              backgroundColor:
                text === selectedMenu ? themeConstants.colors.sidebar.selectedItem : 'transparent',
              borderRadius: 1,
              mx: 1,
              py: isMobile
                ? themeConstants.spacing.drawer.itemPadding.mobile
                : themeConstants.spacing.drawer.itemPadding.desktop,
              '&:hover': {
                backgroundColor:
                  text === selectedMenu
                    ? themeConstants.colors.sidebar.selectedItem
                    : themeConstants.colors.sidebar.hoverItem,
              },
            }}
            onClick={() => {
              onMenuSelect(text);
              if (isMobile && onMobileClose) onMobileClose();
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? true : true}
      onClose={onMobileClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        width: themeConstants.drawer.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: themeConstants.drawer.width,
          boxSizing: 'border-box',
          backgroundColor: themeConstants.colors.sidebar.background,
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
  );
};
