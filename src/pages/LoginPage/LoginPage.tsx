import React from 'react';

import { LogIn, SignUp } from '../../containers';

function LoginPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <LogIn />
      <SignUp />
    </div>
  );
}

export default LoginPage;
