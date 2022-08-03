import styled from "styled-components";

interface Props {
  src: string;
}

const Logo = ({ src }: Props) => {
  return <Wrapper>{src}</Wrapper>;
};

const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
`;

export default Logo;
