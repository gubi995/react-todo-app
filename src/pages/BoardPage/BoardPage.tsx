import React, { useEffect } from 'react';
import todoMockService from '../../services/todo-mock-service';

function BoardPage() {
  useEffect(() => {
    todoMockService.findAll().then(console.log);
  }, []);

  return <div>BoardPage</div>;
}

export default BoardPage;
