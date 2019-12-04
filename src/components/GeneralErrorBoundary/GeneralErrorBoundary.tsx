import React, { Component } from 'react';

import { ErrorDialog } from '../ErrorDialog';

export class GeneralErrorBoundary extends Component {
  state = { hasError: false, error: '' };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(`%c ${error}`, 'background: #222; color: #bada55');
    console.log(`%c ${JSON.stringify(errorInfo)}`, 'background: #222; color: #bada55');
  }

  render() {
    if (this.state.hasError) {
      return <ErrorDialog message={this.state.error!} />;
    }

    return this.props.children;
  }
}

export default GeneralErrorBoundary;
