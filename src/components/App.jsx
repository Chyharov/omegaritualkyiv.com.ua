import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('pages/mainPage/mainPage'));
const RitualAgentPage = lazy(() => import('pages/ritualAgentPage/ritualAgentPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ritualagent" element={<RitualAgentPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
