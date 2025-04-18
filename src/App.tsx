import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header')
  .then(module => ({ default: module.default }))
  .catch(error => {
    console.error('Header load failed:', error);
    return { default: () => <div>Header failed to load</div> };
  }));

const Footer = React.lazy(() => import('footer/Footer')
  .then(module => ({ default: module.default }))
  .catch(error => {
    console.error('Footer load failed:', error);
    return { default: () => <div>Footer failed to load</div> };
  }));

export const App = () => (
  <div>
    <Suspense fallback={<div>Загрузка Header...</div>}>
      <Header />
    </Suspense>

    <h1>Основное приложение</h1>

    <Suspense fallback={<div>Загрузка Footer...</div>}>
      <Footer />
    </Suspense>
  </div>
);
