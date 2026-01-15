import { matchPath, useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

// Hook to determine if a navigation link is active
type ReturnType = boolean;

export function useActiveLink(path: string, deep = true): ReturnType {
  const { pathname } = useLocation();

  // Normalize paths by removing trailing slashes (except for root)
  const normalizedPathname = pathname === '/' ? pathname : pathname.replace(/\/+$/, '');
  const normalizedPath = path === '/' ? path : path.replace(/\/+$/, '');

  // Handle root paths
  if (normalizedPath === '/') {
    return normalizedPathname === '/';
  }

  // For exact matching - path must match exactly
  const normalActive = normalizedPath
    ? !!matchPath({ path: normalizedPath, end: true }, normalizedPathname)
    : false;

  if (!deep) {
    return normalActive;
  }

  // For deep matching with intelligent prefix handling
  if (!normalizedPath) return false;

  // Exact match
  if (normalizedPathname === normalizedPath) {
    return true;
  }

  // Check if current path starts with the menu path followed by a slash
  // This handles cases like "/users/create" when menu path is "/users"
  const startsWithPath = normalizedPathname.startsWith(`${normalizedPath}/`);

  if (!startsWithPath) {
    return false;
  }

  // Get the remaining part of the path after the menu path
  const remainingPath = normalizedPathname.substring(normalizedPath.length + 1); // +1 for the slash

  // For a route to be considered a child (and thus highlight the parent):
  // 1. The remaining path should not be a known sibling route pattern
  // 2. The remaining path should either contain slashes (deeper nesting)
  //    or be a typical action/ID pattern

  // Common sibling route patterns that should NOT highlight the parent
  // These are routes that are at the same level, not children
  const siblingPatterns = ['pending', 'archived', 'active', 'inactive', 'draft'];

  // If the remaining path is a known sibling pattern and contains no further nesting,
  // don't consider this an active parent
  if (siblingPatterns.includes(remainingPath) && !remainingPath.includes('/')) {
    return false;
  }

  // Allow deep paths (containing slashes) or typical CRUD patterns
  // Also allow any path that's not a simple word pattern (likely an ID or action)
  return (
    remainingPath.includes('/') ||
    /^(create|edit|new|update|details|detail\d+)($|\/)/.test(remainingPath) ||
    !/^[a-z-]+$/.test(remainingPath) // If it's not a simple word pattern
  );
}
