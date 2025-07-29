import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.onError?.(error, errorInfo);
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleReload = () => window.location.reload();
  handleDismiss = () => this.setState({ hasError: false, error: null });

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-900 p-8">
          <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
          <pre className="mb-4 bg-red-100 p-4 rounded text-sm max-w-xl overflow-x-auto">
            {this.state.error?.message}
            {this.state.error?.stack && (
              <div className="mt-2 text-xs opacity-75">
                {this.state.error.stack}
              </div>
            )}
          </pre>
          <div className="flex gap-4">
            <button onClick={this.handleReload} className="...">
              Reload Page
            </button>
            <button onClick={this.handleDismiss} className="...">
              Dismiss
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;