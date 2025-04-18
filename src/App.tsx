import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));

export const App: React.FC = () => (
  <div>
  <Suspense fallback={<div>Загрузка Header...</div>}>
    <Header />
  </Suspense>
  
  <h1>Мой App из mfe-app</h1>
  
  <Suspense fallback={<div>Загрузка Footer...</div>}>
    <Footer />
  </Suspense>
</div>
);
