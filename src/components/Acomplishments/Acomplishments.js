import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Bootcamps'},
  { number: 20, text: 'Projetos no Github', },
  { number: 20, text: 'Projetos pessoais', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Realizações pessoais</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
          
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
