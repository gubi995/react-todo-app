import React from 'react';

const NotificationContext = React.createContext({
  notification: { show: false, message: '' },
  setNotification: {} as React.Dispatch<React.SetStateAction<any>>,
});

export default NotificationContext;
