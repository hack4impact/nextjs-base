import '../styles/globals.scss';
import 'bulma/bulma.sass';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Provider } from 'next-auth/client';
import ProtectRoute from '../utils/ProtectRoute';

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </Provider>
  );
}
