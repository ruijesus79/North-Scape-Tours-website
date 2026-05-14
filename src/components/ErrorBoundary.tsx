import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[North Scape Tours] Runtime Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0c0c0c',
            color: '#fafafa',
            fontFamily: '"Playfair Display", Georgia, serif',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <div style={{ maxWidth: '500px' }}>
            <h1
              style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                background: 'linear-gradient(120deg, #ffffff 0%, #d4af37 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              North Scape Tours
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '2rem',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Estamos a atualizar as nossas experiências.
              <br />
              Por favor, recarregue a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 32px',
                borderRadius: '9999px',
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: '"Inter", sans-serif',
                transition: 'opacity 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Recarregar Página
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre
                style={{
                  marginTop: '2rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(255,0,0,0.1)',
                  border: '1px solid rgba(255,0,0,0.2)',
                  borderRadius: '8px',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                  textAlign: 'left',
                  overflow: 'auto',
                  maxHeight: '200px',
                  fontFamily: 'monospace',
                }}
              >
                {this.state.error.message}
                {'\n'}
                {this.state.error.stack}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
