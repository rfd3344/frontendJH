import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

import Routers from './Routers';
// import Header from './PageHeader';
// import Footer from './PageFooter';

export default function Theme() {
  return (
    <div id="page">
      <main className="container">
        <ErrorBoundary>
          <Routers />
        </ErrorBoundary>
      </main>
    </div>
  );
}
