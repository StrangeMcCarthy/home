import { useState, useEffect } from 'react';

export type RoutePath =
  | 'home'
  | 'homes'
  | 'our-difference'
  | 'stores'
  | 'faqs'
  | 'journal'
  | 'reviews'
  | 'home-detail';

export interface RouteState {
  path: RoutePath;
  params: Record<string, string>;
}

export function parseHash(): RouteState {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash || hash === 'home') {
    return { path: 'home', params: {} };
  }

  const parts = hash.split('/');
  const mainPath = parts[0] as RoutePath;

  if (mainPath === 'home-detail' && parts[1]) {
    return { path: 'home-detail', params: { id: parts[1] } };
  }

  const validPaths: RoutePath[] = [
    'home',
    'homes',
    'our-difference',
    'stores',
    'faqs',
    'journal',
    'reviews',
    'home-detail',
  ];

  if (validPaths.includes(mainPath)) {
    return { path: mainPath, params: parts[1] ? { id: parts[1] } : {} };
  }

  return { path: 'home', params: {} };
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(parseHash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: RoutePath, params?: Record<string, string>) => {
    let newHash = `#/${path}`;
    if (params && params.id) {
      newHash += `/${params.id}`;
    }
    window.location.hash = newHash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { route, navigate };
}
