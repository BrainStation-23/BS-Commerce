import { useCallback, useEffect, useState } from 'react';

import Collapse from '@mui/material/Collapse';

import { usePathname } from 'src/routes/hooks';

import { useActiveLink } from 'src/routes/hooks/use-active-link';
import { NavListProps, NavSubListProps } from '../types';
import NavItem from './nav-item';

// ----------------------------------------------------------------------

export default function NavList({ data, depth, slotProps }: NavListProps) {
  const pathname = usePathname();

  // Check if this menu item is directly active
  const directActive = useActiveLink(data.path, true);

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

  const [openMenu, setOpenMenu] = useState(active);

  useEffect(() => {
    // If this menu item is active, keep it open
    if (active) {
      setOpenMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, active]);

  const handleToggleMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu((prev: any) => !prev);
    }
  }, [data.children]);

  return (
    <>
      <NavItem
        open={openMenu}
        onClick={handleToggleMenu}
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
        sx={{
          mb: `${slotProps?.gap}px`,
          ...(depth === 1 ? slotProps?.rootItem : slotProps?.subItem),
        }}
      />

      {!!data.children && (
        <Collapse in={openMenu} unmountOnExit>
          <NavSubList data={data.children} depth={depth} slotProps={slotProps} />
        </Collapse>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ data, depth, slotProps }: NavSubListProps) {
  // Sort children by serial number
  const sortedData = [...data].sort((a, b) => (a.serial || 0) - (b.serial || 0));

  return (
    <>
      {sortedData.map((list) => (
        <NavList key={list.title} data={list} depth={depth + 1} slotProps={slotProps} />
      ))}
    </>
  );
}
