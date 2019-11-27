import React from 'react';

import { Icon } from '../../components';

function PageNotFound() {
  return (
    <h1 style={{ textAlign: 'center' }}>
      404 Page not found <Icon ariaLabel="page-not-found-icon" icon="🙀" />
    </h1>
  );
}

export default PageNotFound;
