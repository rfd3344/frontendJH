import React from 'react';


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
    console.warn('rfd ', error);
    this.setState({
      errorMessage: error.message,
    });
  }

  render() {
    console.warn('this.state.hasError', this.state);
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <section>
          <h1> {this.state.errorMessage} </h1>
          { this.props.children }
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;