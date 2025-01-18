import Header from 'components/header/header';
import SectionHero from 'components/sectionHero/sectionHero'
import SectionServiceList from 'components/sectionServiceList/sectionServiceList';
import SectionRitualGoods from 'components/sectionRitualGoods/sectionRitualGoods'
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import SectionFeneralPrice from 'components/sectionFeneralPrice/sectionFeneralPrice';
import SectionOrganizationFuneral from 'components/sectionOrganizationFuneral/sectionOrganizationFuneral';
import SectionRitualGoodsDescription from 'components/sectionRitualGoodsDescription/sectionRitualGoodsDescription';
import Footer from 'components/footer/footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionServiceList />
        <SectionRitualGoods />
        <SectionNeedHelp />
        <SectionFeneralPrice />
        <SectionOrganizationFuneral />
        <SectionRitualGoodsDescription />
      </main>
      <Footer />
    </>
  );
};



export default MainPage;