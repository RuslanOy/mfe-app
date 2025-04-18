import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));

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
