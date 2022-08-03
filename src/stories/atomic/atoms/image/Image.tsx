import styled from "styled-components";

interface Props {
  src: string;
}

const Image = ({ src }: Props) => {
  return <Wrapper src={src} alt={src} />;
};

const Wrapper = styled.img`
  border-radius: 3px;
  max-width: 100%;
  font-family: Helvetica, Arial, sans-serif;
`;

export default Image;
