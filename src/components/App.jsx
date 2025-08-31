import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('pages/mainPage/mainPage'));
const RitualAgentPage = lazy(() => import('pages/ritualAgentPage/ritualAgentPage'));
const FuneralOrganisation = lazy(() => import('pages/funeralOrganisationPage/funeralOrganisationPage'));
const CremationServicesPage = lazy(() => import('pages/cremationServicesPage/cremationServicesPage'));
const RitualTransportPage = lazy(() => import('pages/ritualTransportPage/ritualTransportPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ritualagent" element={<RitualAgentPage />} />
          <Route path="/funeralorganisation" element={<FuneralOrganisation />} />
          <Route path="/cremationservices" element={<CremationServicesPage />} />
          <Route path="/ritualtransport" element={<RitualTransportPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
