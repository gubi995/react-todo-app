import React from 'react';

import { Icon } from '@iconify/react';
import wearyCat from '@iconify/icons-twemoji/weary-cat';

function PageNotFound() {
  return (
    <h1 style={{ textAlign: 'center' }}>
      <span>404 Page not found </span>
      <Icon icon={wearyCat} />
    </h1>
  );
}

export default PageNotFound;
