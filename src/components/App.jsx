import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('pages/mainPage/mainPage'));
const RitualAgentPage = lazy(() => import('pages/ritualAgentPage/ritualAgentPage'));
const FuneralOrganisation = lazy(() => import('pages/funeralOrganisationPage/funeralOrganisationPage'));
const CremationServicesPage = lazy(() => import('pages/cremationServicesPage/cremationServicesPage'));
const RitualTransportPage = lazy(() => import('pages/ritualTransportPage/ritualTransportPage'));
const FuneralOfTheDeceased = lazy(() => import('pages/funeralOfTheDeceased/funeralOfTheDeceased'));
const TransportationOfTheDeceased = lazy(() => import('pages/transportationOfTheDeceased/transportationOfTheDeceased'));
const MortuaryServicesPage = lazy(() => import('pages/mortuaryServicesPage/mortuaryServicesPage'));
const MemorialDinnersPage = lazy(() => import('pages/memorialDinnersPage/memorialDinnersPage'));
const ProcessingDocumentsPage = lazy(() => import('pages/processingDocumentsPage/processingDocumentsPage'));
const RitualHallPage = lazy(() => import('pages/ritualHallPage/ritualHallPage'));

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
          <Route path="/funeralofthedeceased" element={<FuneralOfTheDeceased />} />
          <Route path="/transportationofthedeceased" element={<TransportationOfTheDeceased />} />
          <Route path="/mortuaryservices" element={<MortuaryServicesPage />} />
          <Route path="/memorialdinners" element={<MemorialDinnersPage />} />
          <Route path="/processingdocuments" element={<ProcessingDocumentsPage />} />
          <Route path="/ritualhall" element={<RitualHallPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
