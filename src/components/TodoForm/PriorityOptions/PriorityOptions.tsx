import React from 'react';

import { Priority } from '../../../models/todo.model';

function PriorityOptions() {
  return (
    <>
      <option value={Priority.LOW}>{`${Priority.LOW} 🟢`}</option>
      <option value={Priority.NORMAL}>{`${Priority.NORMAL} 🟠`}</option>
      <option value={Priority.HIGH}>{`${Priority.HIGH} 🔴`}</option>
    </>
  );
}

export default PriorityOptions;
