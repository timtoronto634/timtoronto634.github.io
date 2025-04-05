import { ReactNode } from 'react';

export type MenuItem = 'Home' | 'Work' | 'Education' | 'Skills' | 'Blogs' | 'Languages / Others';

export interface NavigationItemProps {
  text: MenuItem;
  isSelected: boolean;
  isMobile: boolean;
  onClick: () => void;
}

export interface NavigationListProps {
  selectedMenu: MenuItem;
  isMobile: boolean;
  onMenuSelect: (menu: MenuItem) => void;
  onMobileClose?: () => void;
}

export interface MainContentProps {
  selectedMenu: MenuItem;
}

export interface SidebarProps {
  selectedMenu: MenuItem;
  isMobile: boolean;
  onMenuSelect: (menu: MenuItem) => void;
  onMobileClose?: () => void;
}

export interface MobileAppBarProps {
  onMenuToggle: () => void;
}
