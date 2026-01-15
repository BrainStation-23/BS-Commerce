import { memo, useCallback, useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ListSubheader from '@mui/material/ListSubheader';
import Stack from '@mui/material/Stack';
import { Theme } from '@mui/material/styles';

import { usePathname } from 'src/routes/hooks';

import { NavGroupProps, NavProps } from '../types';
import NavList from './nav-list';

// ----------------------------------------------------------------------

function NavSectionVertical({ data, slotProps, ...other }: NavProps) {
  // Sort navigation groups by serial number
  const sortedData = [...data].sort((a, b) => (a.serial || 0) - (b.serial || 0));

  return (
    <Stack component="nav" id="nav-section-vertical" {...other} sx={{ pb: 4,mt:3 }}>
      {sortedData.map((group, index) => (
        <Group
          key={group.subheader || index}
          subheader={group.subheader}
          icon={group.icon}
          items={group.items}
          slotProps={slotProps}
        />
      ))}
    </Stack>
  );
}

export default memo(NavSectionVertical);

// ----------------------------------------------------------------------

function Group({ subheader, icon, items, slotProps }: NavGroupProps) {
  const pathname = usePathname();

  // Sort items by serial number - ensure items is an array
  const sortedItems = [...(items || [])].sort((a, b) => (a.serial || 0) - (b.serial || 0));

  // Helper function to check if a path is active in the current group
  const checkIfGroupHasActive = useCallback(() => {
    // Function to check if a path is a match or contains the current pathname
    const isPathActive = (itemPath: string) => {
      if (!itemPath) return false;

      // Normalize paths by removing trailing slashes (except for root)
      const normalizedPathname = pathname === '/' ? pathname : pathname.replace(/\/+$/, '');
      const normalizedItemPath = itemPath === '/' ? itemPath : itemPath.replace(/\/+$/, '');

      // For root paths, only exact match
      if (normalizedItemPath === '/') {
        return normalizedPathname === '/';
      }

      // Exact match
      if (normalizedPathname === normalizedItemPath) {
        return true;
      }

      // Check if current path starts with the menu path followed by a slash
      const startsWithPath = normalizedPathname.startsWith(`${normalizedItemPath}/`);

      if (!startsWithPath) {
        return false;
      }

      // Get the remaining part of the path after the menu path
      const remainingPath = normalizedPathname.substring(normalizedItemPath.length + 1); // +1 for the slash

      // Common sibling route patterns that should NOT highlight the parent
      const siblingPatterns = ['pending', 'archived', 'active', 'inactive', 'draft'];

      // If the remaining path is a known sibling pattern and contains no further nesting,
      // don't consider this an active parent
      if (siblingPatterns.includes(remainingPath) && !remainingPath.includes('/')) {
        return false;
      }

      // Allow deep paths (containing slashes) or typical CRUD patterns
      return (
        remainingPath.includes('/') ||
        /^(create|edit|new|\d+)($|\/)/.test(remainingPath) ||
        !/^[a-z-]+$/.test(remainingPath)
      ); // If it's not a simple word pattern
    };

    // Check if any direct item paths match
    const directMatch = sortedItems.some((item) => isPathActive(item.path));
    if (directMatch) return true;

    // Check if any children match (improved logic)
    return sortedItems.some((item) => {
      // Check direct item path
      if (isPathActive(item.path)) return true;

      // Check children paths
      return item.children?.some((child: { path: string }) => {
        const normalizedPathname = pathname === '/' ? pathname : pathname.replace(/\/+$/, '');
        const normalizedChildPath =
          child.path === '/' ? child.path : child.path.replace(/\/+$/, '');

        // Exact match
        if (normalizedPathname === normalizedChildPath) return true;

        // Check if current path starts with child path (for nested routes)
        if (normalizedPathname.startsWith(`${normalizedChildPath}/`)) return true;

        return false;
      });
    });
  }, [sortedItems, pathname]);

  // Initialize based on whether an item is active in the current path
  const [open, setOpen] = useState(() => checkIfGroupHasActive());

  // Check if this group has active items
  const hasActiveItems = checkIfGroupHasActive();

  // Determine background color based on state
  const getBackgroundColor = () => {
    if (hasActiveItems) {
      return (theme: Theme) => theme.palette.divider;
    }
    if (open) {
      return (theme: Theme) => theme.palette.divider;
    }
    return 'transparent';
  };

  // Determine hover background color
  const getHoverBackgroundColor = () => {
    if (hasActiveItems) {
      return (theme: Theme) => theme.palette.divider;
    }
    return (theme: Theme) => theme.palette.secondary.lighter;
  };

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const renderContent = sortedItems.map((list) => (
    <NavList key={list.title} data={list} depth={1} slotProps={slotProps} />
  ));

  return (
    <Stack sx={{ px: 2 }}>
      {subheader ? (
        <>
          <ListSubheader
            disableGutters
            disableSticky
            onClick={handleToggle}
            sx={{
              fontSize: 11,
              cursor: 'pointer',
              typography: 'overline',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: hasActiveItems ? 'text.primary' : 'text.secondary',
              mb: `${slotProps?.gap || 4}px`,
              p: (theme) => theme.spacing(2, 1, 1, 1.5),
              borderRadius: 1,
              background: getBackgroundColor(),
              transition: (theme) =>
                theme.transitions.create(['color', 'background'], {
                  duration: theme.transitions.duration.shortest,
                }),
              '&:hover': {
                color: 'text.primary',
                background: getHoverBackgroundColor(),
              },
              ...slotProps?.subheader,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {icon && (
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { fontSize: 18 } }}>
                  {icon}
                </Box>
              )}
              {subheader}
            </Box>
            {open ? (
              <KeyboardArrowDownIcon fontSize="small" sx={{ color: 'inherit' }} />
            ) : (
              <KeyboardArrowRightIcon fontSize="small" sx={{ color: 'inherit' }} />
            )}
          </ListSubheader>

          <Collapse in={open}>{renderContent}</Collapse>
        </>
      ) : (
        renderContent
      )}
    </Stack>
  );
}
