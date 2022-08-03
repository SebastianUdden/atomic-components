import styled from "styled-components";

interface Props {
  href: string;
  children: React.ReactNode;
}

const Anchor = ({ href, children }: Props) => {
  return <Wrapper href={href}>{children}</Wrapper>;
};

const Wrapper = styled.a`
  font-family: Helvetica, Arial, sans-serif;
`;

export default Anchor;
