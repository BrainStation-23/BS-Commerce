import { memo } from 'react';

import Stack from '@mui/material/Stack';

import NavList from 'src/components/nav-section/horizontal/nav-list';
import { NavGroupProps, NavProps } from 'src/components/nav-section/types';

// ----------------------------------------------------------------------

function NavSectionHorizontal({ data, slotProps, sx, ...other }: NavProps) {
  // Sort navigation groups by serial number
  const sortedData = [...data].sort((a, b) => (a.serial || 0) - (b.serial || 0));

  return (
    <Stack
      component="nav"
      id="nav-section-horizontal"
      direction="row"
      alignItems="center"
      spacing={`${slotProps?.gap || 6}px`}
      sx={{
        mx: 'auto',
        ...sx,
      }}
      {...other}
    >
      {sortedData.map((group, index) => (
        <Group key={group.subheader || index} items={group.items} slotProps={slotProps} />
      ))}
    </Stack>
  );
}

export default memo(NavSectionHorizontal);

// ----------------------------------------------------------------------

function Group({ items, slotProps }: NavGroupProps) {
  // Sort items by serial number
  const sortedItems = [...items].sort((a, b) => (a.serial || 0) - (b.serial || 0));

  return (
    <>
      {sortedItems.map((list) => (
        <NavList key={list.title} data={list} depth={1} slotProps={slotProps} />
      ))}
    </>
  );
}
