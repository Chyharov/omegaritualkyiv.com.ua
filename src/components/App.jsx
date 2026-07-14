import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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

const routes = [
  { path: '/', element: <MainPage /> },
  { path: '/ritualnyi-agent-kyiv', element: <RitualAgentPage /> },
  { path: '/ritualagent', element: <Navigate to="/ritualnyi-agent-kyiv" replace /> },
  { path: '/ritualni-poslugy-v-kyievi', element: <FuneralOrganisation /> },
  { path: '/ritualni-poslugy-kyiv', element: <FuneralOrganisation /> },
  { path: '/funeralorganisation', element: <Navigate to="/ritualni-poslugy-v-kyievi" replace /> },
  { path: '/krematsiia-kyiv', element: <CremationServicesPage /> },
  { path: '/cremationservices', element: <Navigate to="/krematsiia-kyiv" replace /> },
  { path: '/rytualnyi-transport-kyiv', element: <RitualTransportPage /> },
  { path: '/ritualtransport', element: <Navigate to="/rytualnyi-transport-kyiv" replace /> },
  { path: '/pokhovannia-kyiv', element: <FuneralOfTheDeceased /> },
  { path: '/funeralofthedeceased', element: <Navigate to="/pokhovannia-kyiv" replace /> },
  { path: '/perevezennia-pomerlykh-kyiv', element: <TransportationOfTheDeceased /> },
  { path: '/transportationofthedeceased', element: <Navigate to="/perevezennia-pomerlykh-kyiv" replace /> },
  { path: '/morg-poslugy-kyiv', element: <MortuaryServicesPage /> },
  { path: '/mortuaryservices', element: <Navigate to="/morg-poslugy-kyiv" replace /> },
  { path: '/pomynalni-obidy-kyiv', element: <MemorialDinnersPage /> },
  { path: '/memorialdinners', element: <Navigate to="/pomynalni-obidy-kyiv" replace /> },
  { path: '/oformlennia-dokumentiv-kyiv', element: <ProcessingDocumentsPage /> },
  { path: '/processingdocuments', element: <Navigate to="/oformlennia-dokumentiv-kyiv" replace /> },
  { path: '/rytualna-zala-kyiv', element: <RitualHallPage /> },
  { path: '/ritualhall', element: <Navigate to="/rytualna-zala-kyiv" replace /> },
  { path: '/orkestr-na-pokhoron-kyiv', element: <FuneralMusicPage /> },
  { path: '/funeralmusic', element: <Navigate to="/orkestr-na-pokhoron-kyiv" replace /> },
  { path: '/medychnyi-suprovid-kyiv', element: <MedicalSupportOnFuneral /> },
  { path: '/medicalsupportonfuneral', element: <Navigate to="/medychnyi-suprovid-kyiv" replace /> },
  { path: '/pro-kompaniiu', element: <AboutCompanyPage /> },
  { path: '/aboutcompany', element: <Navigate to="/pro-kompaniiu" replace /> },
  { path: '/price', element: <PricePage /> },
  { path: '/contacts', element: <ContactsPage /> },
  { path: '/veduchyi-pokhoronu-kyiv', element: <FuneralHostPage /> },
  { path: '/funeralhost', element: <Navigate to="/veduchyi-pokhoronu-kyiv" replace /> },
  { path: '/nosii-truny-kyiv', element: <PallbearersPage /> },
  { path: '/pallbearers', element: <Navigate to="/nosii-truny-kyiv" replace /> },
  { path: '/dezynfektsiia-prymishchen-kyiv', element: <DisinfectionPage /> },
  { path: '/disinfection', element: <Navigate to="/dezynfektsiia-prymishchen-kyiv" replace /> },
  { path: '/rytualni-vinky-kyiv', element: <WreathsPage /> },
  { path: '/wreaths', element: <Navigate to="/rytualni-vinky-kyiv" replace /> },
  { path: '/zhyvi-vinky-kyiv', element: <FreshWreathsPage /> },
  { path: '/freshwreaths', element: <Navigate to="/zhyvi-vinky-kyiv" replace /> },
  { path: '/shtuchni-vinky-kyiv', element: <ArtificialWreathsPage /> },
  { path: '/artificialwreaths', element: <Navigate to="/shtuchni-vinky-kyiv" replace /> },
  { path: '/truny-kyiv', element: <CoffinsPage /> },
  { path: '/coffins', element: <Navigate to="/truny-kyiv" replace /> },
  { path: '/rytualni-khresty-kyiv', element: <CrossesPage /> },
  { path: '/crosses', element: <Navigate to="/rytualni-khresty-kyiv" replace /> },
  { path: '/pamiatnyky-kyiv', element: <MonumentsPage /> },
  { path: '/monuments', element: <Navigate to="/pamiatnyky-kyiv" replace /> },
  { path: '/orhanizatsiia-rytualnykh-posluh-kyiv', element: <OrganizationFuneralServicesPage /> },
  { path: '/organizationfuneralservices', element: <Navigate to="/orhanizatsiia-rytualnykh-posluh-kyiv" replace /> },
  { path: '/rytualni-tovary-kyiv', element: <RitualGoodsPage /> },
  { path: '/ritualgoods', element: <Navigate to="/rytualni-tovary-kyiv" replace /> },
  { path: '/pokhoronni-komplekty-kyiv', element: <FuneralSetPage /> },
  { path: '/funeralset', element: <Navigate to="/pokhoronni-komplekty-kyiv" replace /> },
  { path: '/foto-na-pamiatnyk-kyiv', element: <FuneralPortraitPage /> },
  { path: '/funeralportrait', element: <Navigate to="/foto-na-pamiatnyk-kyiv" replace /> },
  { path: '/urny-dlia-popelu-kyiv', element: <UrnForAshesPage /> },
  { path: '/urnsforashes', element: <Navigate to="/urny-dlia-popelu-kyiv" replace /> },
];

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Suspense>
);

export default App;
