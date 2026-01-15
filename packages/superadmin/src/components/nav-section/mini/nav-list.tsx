import { useCallback, useEffect, useRef, useState } from 'react';

import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';

import { useActiveLink, usePathname } from 'src/routes/hooks';

import { NavListProps, NavSubListProps } from '../types';
import NavItem from './nav-item';

// ----------------------------------------------------------------------

export default function NavList({ data, depth, slotProps }: NavListProps) {
  const navRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  // Check if this menu item is directly active
  const directActive = useActiveLink(data.path, !!data.children);

  // Check if any children are active (for parent menu highlighting)
  const hasActiveChild =
    data.children?.some((child: any) => {
      // Use a simple path check for children
      const normalizedPathname = pathname === '/' ? pathname : pathname.replace(/\/+$/, '');
      const normalizedChildPath = child.path === '/' ? child.path : child.path.replace(/\/+$/, '');

      // Exact match
      if (normalizedPathname === normalizedChildPath) return true;

      // Check if current path starts with child path (for nested routes)
      if (normalizedPathname.startsWith(`${normalizedChildPath}/`)) return true;

      return false;
    }) || false;

  // A menu item is active if it's directly active OR has an active child
  const active = directActive || hasActiveChild;

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu(true);
    }
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      <NavItem
        ref={navRef}
        open={openMenu}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        //
        title={data.title}
        path={data.path}
        icon={data.icon}
        info={data.info}
        roles={data.roles}
        caption={data.caption}
        disabled={data.disabled}
        //
        depth={depth}
        hasChild={!!data.children}
        externalLink={data.path.includes('http')}
        currentRole={slotProps?.currentRole}
        //
        active={active}
        className={active ? 'active' : ''}
        sx={depth === 1 ? slotProps?.rootItem : slotProps?.subItem}
      />

      {!!data.children && (
        <Popover
          disableScrollLock
          open={openMenu}
          anchorEl={navRef.current}
          anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
          transformOrigin={{ vertical: 'center', horizontal: 'left' }}
          slotProps={{
            paper: {
              onMouseEnter: handleOpenMenu,
              onMouseLeave: handleCloseMenu,
              sx: {
                mt: 0.5,
                minWidth: 160,
                ...(openMenu && {
                  pointerEvents: 'auto',
                }),
              },
            },
          }}
          sx={{
            pointerEvents: 'none',
          }}
        >
          <NavSubList data={data.children} depth={depth} slotProps={slotProps} />
        </Popover>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ data, depth, slotProps }: NavSubListProps) {
  return (
    <Stack spacing={0.5}>
      {data.map((list) => (
        <NavList key={list.title} data={list} depth={depth + 1} slotProps={slotProps} />
      ))}
    </Stack>
  );
}
