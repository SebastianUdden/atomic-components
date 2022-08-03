import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Desktop = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

export default Desktop;
