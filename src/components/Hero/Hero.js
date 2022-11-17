import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem-Vindo ao <br/>
        Meu Portfolio Pessoal
      </SectionTitle>
      <SectionText>
      Esse Portfolio foi criado com base no Layout do Javascript Mastery, Gostei muito pois minhas stacks favoritas são, Javascript e Java, então sigo no aprendizado.
      </SectionText>
      <Button onClick={() => window.location =  'https://www.linkedin.com/in/flamerson-andrade-2306b41b0/'}>Saber Mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;