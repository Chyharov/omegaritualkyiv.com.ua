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
const FuneralMusicPage = lazy(() => import('pages/funeralMusicPage/funeralMusicPage'));
const MedicalSupportOnFuneral = lazy(() => import('pages/medicalSupportOnFuneralPage/medicalSupportOnFuneralPage'));
const AboutCompanyPage = lazy(() => import('pages/AboutCompanyPage/AboutCompanyPage'));
const PricePage = lazy(() => import('pages/PricePage/PricePage'));
const ContactsPage = lazy(() => import('pages/contactsPage/contactsPage'));
const FuneralHostPage = lazy(() => import('pages/funeralHostPage/funeralHostPage'));
const PallbearersPage = lazy(() => import('pages/pallbearersPage/pallbearersPage'));
const DisinfectionPage = lazy(() => import('pages/disinfectionPage/disinfectionPage'));
const WreathsPage = lazy(() => import('pages/wreathsPage/wreathsPage'));
const FreshWreathsPage = lazy(() => import('pages/freshWreathsPage/freshWreathsPage'));
const ArtificialWreathsPage = lazy(() => import('pages/artificialWreathsPage/artificialWreathsPage'));
const CoffinsPage = lazy(() => import('pages/coffinsPage/coffinsPage'));
const CrossesPage = lazy(() => import('pages/crossesPage/crossesPage'));
const MonumentsPage = lazy(() => import('pages/monumentsPage/monumentsPage'));
const OrganizationFuneralServicesPage = lazy(() => import('pages/organizationFuneralServicesPage/organizationFuneralServicesPage'));
const RitualGoodsPage = lazy(() => import('pages/RitualGoodsPage/RitualGoodsPage'));
const FuneralSetPage = lazy(() => import('pages/funeralSetPage/funeralSetPage'));
const FuneralPortraitPage = lazy(() => import('pages/FuneralPortraitPage/FuneralPortraitPage'));
const UrnForAshesPage = lazy(() => import('pages/UrnForAshesPage/UrnForAshesPage'));

const Page404 = lazy(() => import('pages/page404/page404'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
<Routes>
  {/* Main */}
  <Route path="/" element={<MainPage />} />

  {/* SERVICES */}
  <Route
    path="/services/ritualni-poslugy-kyiv"
    element={<FuneralOrganisation />}
  />

  <Route
    path="/services/ritualnyi-agent-kyiv"
    element={<RitualAgentPage />}
  />

  <Route
    path="/services/krematsiia-kyiv"
    element={<CremationServicesPage />}
  />

  <Route
    path="/services/rytualnyi-transport-kyiv"
    element={<RitualTransportPage />}
  />

  <Route
    path="/services/pokhovannia-kyiv"
    element={<FuneralOfTheDeceased />}
  />

  <Route
    path="/services/perevezennia-pomerlykh-kyiv"
    element={<TransportationOfTheDeceased />}
  />

  <Route
    path="/services/morg-poslugy-kyiv"
    element={<MortuaryServicesPage />}
  />

  <Route
    path="/services/pomynalni-obidy-kyiv"
    element={<MemorialDinnersPage />}
  />

  <Route
    path="/services/oformlennia-dokumentiv"
    element={<ProcessingDocumentsPage />}
  />

  <Route
    path="/services/rytualna-zala-kyiv"
    element={<RitualHallPage />}
  />

  <Route
    path="/services/orkestr-na-pokhoron"
    element={<FuneralMusicPage />}
  />

  <Route
    path="/services/medychnyi-suprovid"
    element={<MedicalSupportOnFuneral />}
  />

  <Route
    path="/services/veduchyi-pokhoronu"
    element={<FuneralHostPage />}
  />

  <Route
    path="/services/nosii-truny"
    element={<PallbearersPage />}
  />

  <Route
    path="/services/dezynfektsiia-prymishchen"
    element={<DisinfectionPage />}
      />
      
      <Route
  path="/services/orhanizatsiia-rytualnykh-posluh-kyiv"
  element={<OrganizationFuneralServicesPage />}
/>

  {/* PRODUCTS */}
  <Route path="/products/rytualni-vinky" element={<WreathsPage />} />
  <Route path="/products/zhyvi-vinky" element={<FreshWreathsPage />} />
  <Route path="/products/shtuchni-vinky" element={<ArtificialWreathsPage />} />
  <Route path="/products/truny" element={<CoffinsPage />} />
  <Route path="/products/khresty" element={<CrossesPage />} />
  <Route path="/products/pamiatnyky" element={<MonumentsPage />} />
  <Route path="/products/rytualni-tovary" element={<RitualGoodsPage />} />
  <Route path="/products/pokhoronnyi-nabir" element={<FuneralSetPage />} />
  <Route path="/products/pokhoronnyi-portret" element={<FuneralPortraitPage />} />
  <Route path="/products/urny-dlia-prakhu" element={<UrnForAshesPage />} />

  {/* COMPANY */}
  <Route path="/about" element={<AboutCompanyPage />} />
  <Route path="/prices" element={<PricePage />} />
  <Route path="/contacts" element={<ContactsPage />} />

  <Route path="*" element={<Page404 />} />
</Routes>
  </Suspense>
);

export default App;
