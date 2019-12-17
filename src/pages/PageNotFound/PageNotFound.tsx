import React from 'react';

import { Icon } from '../../components';

function PageNotFound() {
  return (
    <h1 style={{ textAlign: 'center' }}>
      <span>404 Page not found</span>
      <Icon ariaLabel="page-not-found-icon" icon="🙀" />
    </h1>
  );
}

export default PageNotFound;
