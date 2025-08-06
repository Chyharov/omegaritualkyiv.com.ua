import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('pages/mainPage/mainPage'));
const RitualAgentPage = lazy(() => import('pages/ritualAgentPage/ritualAgentPage'));
const FuneralOrganisation = lazy(() => import('pages/funeralOrganisationPage/funeralOrganisationPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ritualagent" element={<RitualAgentPage />} />
          <Route path="/funeralorganisation" element={<FuneralOrganisation />} />
        </Routes>
      </Suspense>
    </>
  );
};
