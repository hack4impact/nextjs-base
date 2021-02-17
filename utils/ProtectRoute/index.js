/*
ProtectRoute is a wrapper component that contains the logic for how to render a view based 
on user sign in status and page visibility status
*/
import { useSession } from "next-auth/client";
import Wrapper from "../../components/Layout/Wrapper";

const ROUTES_ACCESSIBLE_BY_PUBLIC_ONLY = ['/', '/auth/login', '/auth/signup'];

const getProtectedRouteSidebarName = (path) => path.charAt(1).toUpperCase() + path.slice(2);

const ProtectRoute = ({ children }) => {
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

export default ProtectRoute;