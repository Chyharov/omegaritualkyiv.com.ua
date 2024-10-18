import Header from 'components/header/header';
import SectionHero from 'components/sectionHero/sectionHero'
import ComponentForMainPage from 'components/componentForMainPage/componentForMainPage';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <ComponentForMainPage />      
      </main>
    </>
  );
};



export default MainPage;