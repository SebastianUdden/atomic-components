import React from "react";
import styled from "styled-components";

interface Props {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const FlexLayout = ({ header, sidebar, content, footer }: Props) => {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Sidebar>{sidebar}</Sidebar>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 1fr 1fr 50px;
  grid-template-columns: 100px 1fr;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  grid-template-areas:
    "head head"
    "main main"
    "main main"
    "foot foot";
  @media (min-width: 600px) {
    grid-template-areas:
      "head head"
      "nav main"
      "nav main"
      "foot foot";
  }
`;
const Header = styled.header`
  grid-area: head;
`;
const Sidebar = styled.nav`
  grid-area: nav;
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;
const Content = styled.main`
  grid-area: main;
`;
const Footer = styled.footer`
  grid-area: foot;
  display: block;
  @media (min-width: 600px) {
    display: none;
  }
`;

export default FlexLayout;
