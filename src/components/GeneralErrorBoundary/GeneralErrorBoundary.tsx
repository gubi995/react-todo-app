/* eslint-disable no-console */
import React, { Component } from 'react';

import ErrorDialog from '../ErrorDialog';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: string;
}

export class GeneralErrorBoundary extends Component<Props, State> {
  state = { hasError: false, error: '' };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(`%c ${error}`, 'background: #222; color: #bada55');
    console.log(`%c ${JSON.stringify(errorInfo)}`, 'background: #222; color: #bada55');
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorDialog message={error!} />;
    }

    return children;
  }
}

export default GeneralErrorBoundary;
