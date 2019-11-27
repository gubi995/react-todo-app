import React from 'react';

import { Button, Icon } from '../../components';

function CreateTodoPage() {
  return (
    <div>
      <div>
        <h3>
          TODO <Icon ariaLabel="page-not-found-icon" icon="📐" />
        </h3>
        <Button primary>Save</Button>
      </div>
    </div>
  );
}

export default CreateTodoPage;
