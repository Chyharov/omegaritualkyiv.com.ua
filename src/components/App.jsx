import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/mainPage/mainPage.jsx'));
const Page404 = lazy(() => import('../pages/page404/page404.jsx'));

// Додай інші сторінки так само
// const RitualAgentPage = lazy(() => import('../pages/ritualAgentPage/ritualAgentPage.jsx'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* Інші сторінки */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Suspense>
);

export default App;
