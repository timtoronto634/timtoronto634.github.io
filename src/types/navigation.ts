export type MenuItem = 'Home' | 'Work' | 'Education' | 'Skill' | 'Activity' | 'Language / Other';

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
  mobileOpen: boolean;
  onMenuSelect: (menu: MenuItem) => void;
  onMobileClose?: () => void;
}

export interface MobileAppBarProps {
  onMenuToggle: () => void;
}
