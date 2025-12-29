import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('pages/mainPage/mainPage'));
const RitualAgentPage = lazy(() =>
  import('pages/ritualAgentPage/ritualAgentPage')
);
const FuneralOrganisation = lazy(() =>
  import('pages/funeralOrganisationPage/funeralOrganisationPage')
);
const CremationServicesPage = lazy(() =>
  import('pages/cremationServicesPage/cremationServicesPage')
);
const RitualTransportPage = lazy(() =>
  import('pages/ritualTransportPage/ritualTransportPage')
);
const FuneralOfTheDeceased = lazy(() =>
  import('pages/funeralOfTheDeceased/funeralOfTheDeceased')
);
const TransportationOfTheDeceased = lazy(() =>
  import('pages/transportationOfTheDeceased/transportationOfTheDeceased')
);
const MortuaryServicesPage = lazy(() =>
  import('pages/mortuaryServicesPage/mortuaryServicesPage')
);
const MemorialDinnersPage = lazy(() =>
  import('pages/memorialDinnersPage/memorialDinnersPage')
);
const ProcessingDocumentsPage = lazy(() =>
  import('pages/processingDocumentsPage/processingDocumentsPage')
);
const RitualHallPage = lazy(() =>
  import('pages/ritualHallPage/ritualHallPage')
);
const FuneralMusicPage = lazy(() =>
  import('pages/funeralMusicPage/funeralMusicPage')
);
const MedicalSupportOnFuneral = lazy(() =>
  import('pages/medicalSupportOnFuneralPage/medicalSupportOnFuneralPage')
);
const AboutCompanyPage = lazy(() =>
  import('pages/AboutCompanyPage/AboutCompanyPage')
);
const PricePage = lazy(() => import('pages/PricePage/PricePage'));
const ContactsPage = lazy(() => import('pages/contactsPage/contactsPage'));
const FuneralHostPage = lazy(() =>
  import('pages/funeralHostPage/funeralHostPage')
);
const PallbearersPage = lazy(() =>
  import('pages/pallbearersPage/pallbearersPage')
);
const DisinfectionPage = lazy(() =>
  import('pages/disinfectionPage/disinfectionPage')
);
const WreathsPage = lazy(() => import('pages/wreathsPage/wreathsPage'));
const FreshWreathsPage = lazy(() =>
  import('pages/freshWreathsPage/freshWreathsPage')
);
const ArtificialWreathsPage = lazy(() =>
  import('pages/artificialWreathsPage/artificialWreathsPage')
);
const CoffinsPage = lazy(() => import('pages/coffinsPage/coffinsPage'));
const CrossesPage = lazy(() => import('pages/crossesPage/crossesPage'));

const Page404 = lazy(() => import('pages/page404/page404'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ritualagent" element={<RitualAgentPage />} />
      <Route path="/funeralorganisation" element={<FuneralOrganisation />} />
      <Route path="/cremationservices" element={<CremationServicesPage />} />
      <Route path="/ritualtransport" element={<RitualTransportPage />} />
      <Route path="/funeralofthedeceased" element={<FuneralOfTheDeceased />} />
      <Route
        path="/transportationofthedeceased"
        element={<TransportationOfTheDeceased />}
      />
      <Route path="/mortuaryservices" element={<MortuaryServicesPage />} />
      <Route path="/memorialdinners" element={<MemorialDinnersPage />} />
      <Route
        path="/processingdocuments"
        element={<ProcessingDocumentsPage />}
      />
      <Route path="/ritualhall" element={<RitualHallPage />} />
      <Route path="/funeralmusic" element={<FuneralMusicPage />} />
      <Route
        path="/medicalsupportonfuneral"
        element={<MedicalSupportOnFuneral />}
      />
      <Route path="/aboutcompany" element={<AboutCompanyPage />} />
      <Route path="/price" element={<PricePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/funeralhost" element={<FuneralHostPage />} />
      <Route path="/pallbearers" element={<PallbearersPage />} />
      <Route path="/disinfection" element={<DisinfectionPage />} />
      <Route path="/wreaths" element={<WreathsPage />} />
      <Route path="/freshwreaths" element={<FreshWreathsPage />} />
      <Route path="/artificialwreaths" element={<ArtificialWreathsPage />} />
      <Route path="/coffins" element={<CoffinsPage />} />
      <Route path="/crosses" element={<CrossesPage />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  </Suspense>
);

export default App;
