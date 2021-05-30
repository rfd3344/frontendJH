import React from 'react';

import { Alert } from '@material-ui/lab';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      errorMessage: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <section>
          <Alert severity="error">
            { this.state.errorMessage }
          </Alert>
          { this.props.children }
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;