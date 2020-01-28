import React, { useState, useEffect } from 'react';
import NotificationContext from './notification-context';

interface State {
  show: boolean;
  message: string;
}

interface Props {
  children: React.ReactNode;
}

function NotificationProvider({ children }: Props) {
  const [notification, setNotification] = useState<State>({ show: false, message: '' });

  useEffect(() => {
    const { show, message } = notification;

    if (show) {
      setTimeout(() => {
        setNotification({ show: false, message });
      }, 4000);
    }
  }, [notification]);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>{children}</NotificationContext.Provider>
  );
}

export default NotificationProvider;
