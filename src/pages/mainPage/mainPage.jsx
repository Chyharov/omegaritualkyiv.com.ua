import Header from 'components/header/header';
import SectionHero from 'components/sectionHero/sectionHero'
import ComponentForMainPage from 'components/componentForMainPage/componentForMainPage';
import SectionServiceList from 'components/sectionServiceList/sectionServiceList';
import SectionRitualGoods from 'components/sectionRitualGoods/sectionRitualGoods'
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionServiceList />
        <SectionRitualGoods />
        <SectionNeedHelp />
        <ComponentForMainPage />
      </main>
    </>
  );
};



export default MainPage;