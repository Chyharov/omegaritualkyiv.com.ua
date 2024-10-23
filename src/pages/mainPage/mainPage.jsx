import Header from 'components/header/header';
import SectionHero from 'components/sectionHero/sectionHero'
import ComponentForMainPage from 'components/componentForMainPage/componentForMainPage';
import SectionServiceList from 'components/sectionServiceList/sectionServiceList';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionServiceList />
        <ComponentForMainPage />   
      </main>
    </>
  );
};



export default MainPage;