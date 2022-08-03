import React from "react";
import styled from "styled-components";
import Desktop from "../../atoms/desktop/Desktop";
import Mobile from "../../atoms/mobile/Mobile";

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
      <Body>
        <Desktop>
          <Sidebar>{sidebar}</Sidebar>
        </Desktop>
        <Content>{content}</Content>
      </Body>
      <Footer>
        <Mobile>{footer}</Mobile>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;
const Header = styled.div`
  display: flex;
`;
const Body = styled.div`
  display: flex;
  flex-grow: 1;
`;
const Sidebar = styled.div``;
const Content = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
`;
const Footer = styled.div``;

export default FlexLayout;
