import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('pages/mainPage/mainPage'));
const SecondPage = lazy(() => import('pages/secondPage/secondPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
