import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Mobile = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: block;
  @media (min-width: 600px) {
    display: none;
  }
`;

export default Mobile;
