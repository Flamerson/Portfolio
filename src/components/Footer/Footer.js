import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contato</LinkTitle>
          <LinkItem href='tel:8498758-4359'>(84) 98758-4359</LinkItem>
        </LinkColumn>
      </LinkList>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:flamersonandrade1@gmail.com'>flamersonandrade1@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <CompanyContainer>
          <Slogan>Inovando com novos Projetos.</Slogan>
        </CompanyContainer>
        <SocialIcons  href="https://github.com/Flamerson">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons  href="https://www.linkedin.com/in/flamerson-andrade-2306b41b0/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons  href="https://www.instagram.com/flamersonv/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
