import { Helmet } from 'react-helmet-async';

import { PROJECT_NAME } from 'src/config-global';

import OneView from 'src/sections/one/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{PROJECT_NAME}: Dashboard</title>
      </Helmet>
      <OneView />
    </>
  );
}
