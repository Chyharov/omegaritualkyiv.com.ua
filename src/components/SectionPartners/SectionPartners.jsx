import React from 'react';
import spogadLogo from 'images/partners/spogadLogo.svg';
import s from './SectionPartners.module.scss';

const SectionPartners = () => {
  return (
    <section className={s.sectionPartners}>
      <div className={`container ${s.partners__container}`}>
              <h2 className='title' style={{ textAlign: 'center', fontSize: '34px' }}>Партнери</h2>
              <a href="https://www.spogad.co/">
                  <img className={s.partnersLogo} src={spogadLogo} alt="Spogad Logo" />
              </a>
      </div>
    </section>
  );
};

export default SectionPartners;
