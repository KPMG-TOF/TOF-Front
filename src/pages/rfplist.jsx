import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/user copy/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> RFP List | Total RFP </title>
      </Helmet>

      <UserView />
    </>
  );
}
