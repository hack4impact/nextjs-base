import '../styles/globals.scss';
import 'bulma/bulma.sass';
import '@fortawesome/fontawesome-free/css/all.css';

import React from 'react';
import { Provider, useSession } from 'next-auth/client';
import Wrapper from '../components/Layout/Wrapper';

// TODO: Validate these routes
// These routes don't have the Wrapper that protected routes have; so each page currently has a custom header.
const ROUTES_ACCESSIBLE_BY_PUBLIC_ONLY = ['/', '/auth/login', '/auth/signup'];

const getProtectedRouteSidebarName = (path) => path.charAt(1).toUpperCase() + path.slice(2);

export const ProtectRoute = ({ children }) => {
  const [session, loading] = useSession();

  if (typeof window !== undefined && loading) {
    return null;
  }

  const { location } = window;

  // If the user is not logged in and is trying to access a public page (e.g the homepage, login page), return that public page.
  if (!session && ROUTES_ACCESSIBLE_BY_PUBLIC_ONLY.includes(location.pathname)) {
    return children;
  }

  // If the user is logged in and is attempting to access a public only page, redirect them to the Dashboard.
  if (session && ROUTES_ACCESSIBLE_BY_PUBLIC_ONLY.includes(location.pathname)) {
    return <p> Redirecting ... </p> && location.replace('/dashboard');
  }

  // Else if the user is not signed in and is attempting to access any other page besides login, redirect them to the login, as that page is protected.
  if (!session && location.pathname != '/auth/login') {
    return <p> Not signed in. Redirecting to login... </p> && location.replace('/auth/login');
  }

  // Else, they have a valid session and so can access a protected page.
  return (
    <Wrapper component={getProtectedRouteSidebarName(location.pathname)}>
      {children}
    </Wrapper>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <Provider
      session={pageProps.session}
    >
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </Provider>
  );
}
