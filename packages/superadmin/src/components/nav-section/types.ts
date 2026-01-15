import { ListItemButtonProps } from '@mui/material/ListItemButton';
import { StackProps } from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type SlotProps = {
  gap?: number;
  rootItem?: SxProps<Theme>;
  subItem?: SxProps<Theme>;
  subheader?: SxProps<Theme>;
  currentRole?: string;
};

export type NavItemStateProps = {
  depth?: number;
  open?: boolean;
  active?: boolean;
  hasChild?: boolean;
  currentRole?: string;
  externalLink?: boolean;
};

export type NavItemBaseProps = {
  serial?: number;
  title: string;
  path: string;
  icon?: React.ReactElement;
  info?: React.ReactElement;
  caption?: string;
  disabled?: boolean;
  roles?: string[];
  children?: any;
};

export type NavItemProps = ListItemButtonProps &
  NavItemStateProps &
  NavItemBaseProps & {
    slotProps?: SlotProps;
  };

export type NavListProps = {
  data: NavItemBaseProps;
  depth: number;
  slotProps?: SlotProps;
};

export type NavSubListProps = {
  data: NavItemBaseProps[];
  depth: number;
  slotProps?: SlotProps;
};

export type NavGroupProps = {
  subheader?: string;
  icon?: React.ReactElement;
  items: NavItemBaseProps[];
  slotProps?: SlotProps;
};

export type NavProps = StackProps & {
  data: {
    serial?: number;
    subheader: string;
    icon?: React.ReactElement;
    items: NavItemBaseProps[];
  }[];
  slotProps?: SlotProps;
};
